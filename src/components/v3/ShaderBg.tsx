'use client'
import { useEffect, useRef } from 'react'

/* Fios de luz animados em WebGL (código próprio, sem bibliotecas).
   Leve no celular: resolução reduzida, 30 fps, pausa fora da tela e
   quadro parado para quem pede menos movimento. Sem WebGL, fica só o
   degradê CSS da seção. */

const VERT = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }'

const FRAG = `
precision mediump float;
uniform vec2 r;
uniform float t;
void main(){
  vec2 uv = gl_FragCoord.xy / r;
  vec3 col = vec3(0.0);
  // em telas estreitas as ondas ficam mais abertas, sem virar listras
  float w = clamp(r.x / r.y / 2.6, 0.18, 1.0);
  float x = uv.x * w;
  for (int k = 0; k < 8; k++) {
    float i = float(k);
    float y = 0.16 + i * 0.026
      + 0.11 * w * sin(x * 3.2 + t * 0.22 + i * 0.38)
      + 0.05 * w * sin(x * 7.0 - t * 0.17 + i * 0.85)
      + 0.20 * w * uv.x * uv.x;
    float d = abs(uv.y - y) * r.y;
    float glow = 0.9 / (d + 1.6) + 0.012 * exp(-d * 0.03);
    col += mix(vec3(0.10, 0.32, 0.95), vec3(0.30, 0.78, 1.0), i / 7.0) * glow * 0.42;
  }
  col *= smoothstep(0.0, 0.18, uv.y) * (1.0 - smoothstep(0.55, 0.95, uv.y));
  col = min(col, vec3(1.0));
  gl_FragColor = vec4(col, max(col.r, max(col.g, col.b)));
}
`

export default function ShaderBg({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { antialias: false, powerPreference: 'low-power' })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    const uR = gl.getUniformLocation(prog, 'r')
    const uT = gl.getUniformLocation(prog, 't')

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let last = 0
    let visible = true

    const draw = (ms: number) => {
      gl.uniform2f(uR, canvas.width, canvas.height)
      gl.uniform1f(uT, (ms / 1000) % 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2) * 0.6
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale))
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale))
      gl.viewport(0, 0, canvas.width, canvas.height)
      draw(last)
    }
    const loop = (ms: number) => {
      raf = requestAnimationFrame(loop)
      if (ms - last < 33) return
      last = ms
      draw(ms)
    }
    const sync = () => {
      cancelAnimationFrame(raf)
      if (!still && visible && !document.hidden) raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      sync()
    })
    io.observe(canvas)
    document.addEventListener('visibilitychange', sync)
    resize()
    sync()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
      gl.deleteBuffer(buf)
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
