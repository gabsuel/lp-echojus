// Mockups do EchoChat em código. TODOS os dados abaixo são fictícios.
import type { ReactNode } from 'react'

type NavKey = 'conversas' | 'kanban' | 'prazos' | 'processos' | 'radar' | 'echoia' | 'inicio'

const NAV: { key: NavKey; label: string; group?: string }[] = [
  { key: 'inicio', label: 'Início' },
  { key: 'conversas', label: 'Conversas', group: 'Atendimento' },
  { key: 'kanban', label: 'Kanban' },
  { key: 'prazos', label: 'Publicações e prazos', group: 'Jurídico' },
  { key: 'processos', label: 'Processos' },
  { key: 'radar', label: 'Radar de comarcas' },
  { key: 'echoia', label: 'Echo IA', group: 'Produção' },
]

export function Logo({ size = 28 }: { size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/img/logo-echochat.png" width={size} height={size} alt="" aria-hidden style={{ width: size, height: size }} />
}

function Shell({ active, children, url = 'app.chatecho.com.br' }: { active: NavKey; children: ReactNode; url?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl text-left select-none">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-white border-b border-slate-100">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-slate-100 rounded-md px-3 py-1 text-[10px] text-slate-400 font-medium">{url}</div>
      </div>
      <div className="flex" style={{ minHeight: 380 }}>
        <aside className="hidden sm:flex flex-col w-40 shrink-0 py-3 px-2 gap-0.5" style={{ background: '#0F172A' }}>
          <div className="flex items-center gap-2 px-2 pb-3">
            <Logo size={20} />
            <span className="text-white text-xs font-bold">EchoChat</span>
          </div>
          {NAV.map((n) => (
            <div key={n.key}>
              {n.group && <div className="text-[9px] uppercase tracking-wider text-slate-500 px-2 pt-3 pb-1">{n.group}</div>}
              <div
                className="text-[11px] px-2 py-1.5 rounded-md font-medium"
                style={
                  n.key === active
                    ? { background: 'rgba(255,255,255,0.12)', color: '#fff' }
                    : { color: '#94A3B8' }
                }
              >
                {n.label}
              </div>
            </div>
          ))}
        </aside>
        <div className="flex-1 min-w-0 p-4" style={{ background: '#F8FAFC' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

function Pill({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'red' | 'amber' | 'green' | 'violet' | 'slate' }) {
  const tones = {
    blue: ['#EFF6FF', '#2563EB'],
    red: ['#FEF2F2', '#DC2626'],
    amber: ['#FFFBEB', '#D97706'],
    green: ['#F0FDF4', '#16A34A'],
    violet: ['#F5F3FF', '#7C3AED'],
    slate: ['#F1F5F9', '#475569'],
  }[tone]
  return (
    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md whitespace-nowrap" style={{ background: tones[0], color: tones[1] }}>
      {children}
    </span>
  )
}

/* ───────────── Conversas ───────────── */
export function ConversasMock() {
  const list = [
    { n: 'Marcos Teixeira', m: 'Doutora, recebi a intimação…', t: '16:11', c: 2, tag: 'Trabalhista', tone: 'blue' as const },
    { n: 'Helena Rodrigues', m: 'Pode me mandar a 2ª via?', t: '15:59', c: 1, tag: 'Consumidor', tone: 'violet' as const },
    { n: '+55 91 90000-0000', m: 'Quanto custa uma ação…', t: '15:42', c: 0, tag: 'Novo lead', tone: 'green' as const },
    { n: 'Paulo Andrade', m: 'Obrigado, Dra. 🙏', t: '15:20', c: 0, tag: 'Previdenciário', tone: 'amber' as const },
  ]
  return (
    <Shell active="conversas">
      <div className="grid grid-cols-5 gap-3 h-full">
        <div className="col-span-2 space-y-1.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-slate-800">Conversas</span>
            <Pill tone="red">12 não lidas</Pill>
          </div>
          {list.map((c, i) => (
            <div key={i} className="bg-white rounded-lg p-2 border border-slate-100 flex gap-2" style={i === 0 ? { borderColor: '#BFDBFE' } : {}}>
              <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>
                {c.n[0] === '+' ? '#' : c.n[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-1">
                  <span className="text-[10px] font-semibold text-slate-800 truncate">{c.n}</span>
                  <span className="text-[9px] text-slate-400">{c.t}</span>
                </div>
                <div className="text-[9px] text-slate-400 truncate">{c.m}</div>
                <div className="mt-1"><Pill tone={c.tone}>{c.tag}</Pill></div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 bg-white rounded-xl border border-slate-100 p-3 flex flex-col">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-800">Marcos Teixeira</span>
            <Pill tone="green">WhatsApp</Pill>
            <span className="ml-auto"><Pill tone="violet">🤖 Robô atendendo</Pill></span>
          </div>
          <div className="flex-1 py-3 space-y-2">
            <div className="max-w-[78%] bg-slate-100 rounded-xl rounded-bl-sm px-2.5 py-1.5 text-[10px] text-slate-700">
              Doutora, recebi uma intimação do processo. O que eu faço?
            </div>
            <div className="max-w-[78%] ml-auto rounded-xl rounded-br-sm px-2.5 py-1.5 text-[10px] text-white" style={{ background: '#2563EB' }}>
              Oi, Marcos! Vi aqui que o prazo é dia 24. Já estou preparando a manifestação. 👍
            </div>
            <div className="max-w-[78%] bg-slate-100 rounded-xl rounded-bl-sm px-2.5 py-1.5 text-[10px] text-slate-700">
              Perfeito, obrigado!
            </div>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[10px] text-blue-700">
            ⚖️ Processo vinculado: <b>0000000-00.2025.8.04.0001</b> · prazo em 3 dias úteis
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* ───────────── Kanban de leads ───────────── */
export function KanbanMock() {
  const cols = [
    { t: 'Novo lead', n: 8, tone: '#2563EB', cards: ['Contato · Financiamento', 'Contato · Trabalhista'] },
    { t: 'Consulta marcada', n: 3, tone: '#7C3AED', cards: ['Contato · Consumidor'] },
    { t: 'Proposta enviada', n: 2, tone: '#D97706', cards: ['Contato · Previdenciário'] },
    { t: 'Contrato assinado', n: 5, tone: '#16A34A', cards: ['Contato · Bancário'] },
  ]
  return (
    <Shell active="kanban">
      <div className="text-xs font-bold text-slate-800 mb-2">Kanban / Atendimento</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {cols.map((c) => (
          <div key={c.t} className="rounded-xl p-2 bg-slate-100/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold" style={{ color: c.tone }}>{c.t}</span>
              <span className="text-[9px] text-slate-400">{c.n}</span>
            </div>
            <div className="space-y-1.5">
              {c.cards.map((k, i) => (
                <div key={i} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
                  <div className="text-[10px] font-semibold text-slate-800">{k}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">12 mensagens · há 2 dias</div>
                </div>
              ))}
              <div className="bg-white/60 rounded-lg p-2 border border-dashed border-slate-200 h-8" />
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* ───────────── Publicações e prazos ───────────── */
export function PrazosMock() {
  const rows = [
    { p: '0000001-00.2025.8.04.0001', t: 'TJAM', d: 'Intimação para manifestação', s: 'Venceu há 2 dias', tone: 'red' as const },
    { p: '0000002-00.2025.8.14.0001', t: 'TJPA', d: 'Sentença publicada', s: 'Vence em 2 dias úteis', tone: 'amber' as const },
    { p: '0000003-00.2025.5.11.0001', t: 'TRT11', d: 'Designada audiência', s: 'Vence em 9 dias úteis', tone: 'blue' as const },
    { p: '0000004-00.2025.4.01.0001', t: 'TRF1', d: 'Despacho', s: 'Tratado', tone: 'green' as const },
  ]
  return (
    <Shell active="prazos" url="app.chatecho.com.br/processos/publicacoes">
      <div className="text-xs font-bold text-slate-800 mb-2">Publicações e prazos</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {[
          ['Tudo a tratar', '64', '#0F172A'],
          ['Prazo vencido', '40', '#DC2626'],
          ['Vencem em 3 dias', '4', '#D97706'],
          ['Tratados hoje', '12', '#16A34A'],
        ].map(([l, v, c]) => (
          <div key={l} className="bg-white rounded-lg border border-slate-100 p-2">
            <div className="text-[9px] text-slate-400">{l}</div>
            <div className="text-lg font-extrabold leading-tight" style={{ color: c }}>{v}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-100 divide-y divide-slate-100">
        {rows.map((r) => (
          <div key={r.p} className="flex items-center gap-2 px-3 py-2">
            <Pill tone="slate">{r.t}</Pill>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold text-slate-800 truncate">{r.d}</div>
              <div className="text-[9px] text-slate-400 truncate">{r.p}</div>
            </div>
            <Pill tone={r.tone}>{r.s}</Pill>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* ───────────── Processos ───────────── */
export function ProcessosMock() {
  const cols = [
    { t: 'Distribuído', n: 4, cards: ['Ação de cobrança', 'Revisional'] },
    { t: 'Em andamento', n: 18, cards: ['Reclamação trabalhista', 'Indenizatória', 'Execução'] },
    { t: 'Concluso p/ sentença', n: 6, cards: ['Consumidor'] },
    { t: 'Em recurso', n: 3, cards: ['Previdenciário'] },
  ]
  return (
    <Shell active="processos" url="app.chatecho.com.br/processos">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-800">Processos</span>
        <div className="flex gap-1"><Pill tone="blue">Com novidade 12</Pill><Pill tone="amber">Importantes 3</Pill></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {cols.map((c) => (
          <div key={c.t} className="rounded-xl p-2 bg-slate-100/80">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-600">{c.t}</span>
              <span className="text-[9px] text-slate-400">{c.n}</span>
            </div>
            <div className="space-y-1.5">
              {c.cards.map((k, i) => (
                <div key={i} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
                  <div className="text-[10px] font-semibold text-slate-800">{k}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">0000000-00.2025…</div>
                  <div className="mt-1 flex gap-1"><Pill tone="slate">TJAM</Pill>{i === 0 && <Pill tone="blue">Novidade</Pill>}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* ───────────── Radar de comarcas ───────────── */
export function RadarMock() {
  const rows = [
    ['Manaus', 'AM', 82],
    ['Belém', 'PA', 68],
    ['Goiânia', 'GO', 61],
    ['Salvador', 'BA', 54],
    ['Curitiba', 'PR', 47],
  ] as const
  return (
    <Shell active="radar" url="app.chatecho.com.br/juridico/radar">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-800">Radar de comarcas</span>
        <div className="flex gap-1"><Pill tone="blue">Juizado especial</Pill><Pill tone="slate">Vara comum</Pill></div>
      </div>
      <div className="text-[9px] text-slate-400 mb-2">Valor esperado por ação · Consumidor · exemplo ilustrativo</div>
      <div className="bg-white rounded-xl border border-slate-100 p-3 space-y-2">
        {rows.map(([c, uf, v]) => (
          <div key={c} className="flex items-center gap-2">
            <span className="text-[10px] text-slate-700 w-20 shrink-0">{c} <span className="text-slate-400">· {uf}</span></span>
            <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${v}%`, background: 'linear-gradient(90deg,#2563EB,#7C3AED)' }} />
            </div>
            <span className="text-[10px] font-semibold text-slate-800 w-12 text-right">R$ {(v * 38).toLocaleString('pt-BR')}</span>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* ───────────── Echo IA ───────────── */
export function EchoIAMock() {
  return (
    <Shell active="echoia" url="app.chatecho.com.br/echo">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-800">Echo IA</span>
        <Pill tone="violet">Nova sessão</Pill>
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-3 space-y-2">
        <div className="max-w-[85%] ml-auto rounded-xl rounded-br-sm px-2.5 py-1.5 text-[10px] text-white" style={{ background: '#2563EB' }}>
          Resuma a intimação do processo do Marcos e sugira os próximos passos.
        </div>
        <div className="max-w-[90%] bg-slate-100 rounded-xl rounded-bl-sm px-2.5 py-2 text-[10px] text-slate-700 space-y-1">
          <div className="font-semibold text-slate-800">Resumo</div>
          <div>• Prazo de 5 dias úteis para manifestação sobre os documentos juntados.</div>
          <div>• Sugestão: juntar comprovantes e pedir designação de audiência.</div>
          <div className="text-[9px] text-slate-400 pt-1">Rascunho gerado pela IA — revise antes de protocolar.</div>
        </div>
      </div>
    </Shell>
  )
}

/* ───────────── Dashboard (Início) ───────────── */
export function InicioMock() {
  const bars = [60, 35, 0, 8, 40, 55, 30]
  return (
    <Shell active="inicio" url="app.chatecho.com.br">
      <div className="text-xs font-bold text-slate-800 mb-2">Início</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {[
          ['Conversas novas', '191', '+2%'],
          ['Consultas marcadas', '24', '+8%'],
          ['Contratos fechados', '9', '+3'],
          ['1ª resposta', '4 min', '-46 min'],
        ].map(([l, v, d]) => (
          <div key={l} className="bg-white rounded-lg border border-slate-100 p-2">
            <div className="text-[9px] text-slate-400">{l}</div>
            <div className="text-base font-extrabold text-slate-900 leading-tight">{v}</div>
            <div className="text-[9px] text-green-600 font-semibold">{d}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-3">
        <div className="text-[10px] font-semibold text-slate-700 mb-2">Conversas novas por dia</div>
        <div className="flex items-end gap-2 h-20">
          {bars.map((b, i) => (
            <div key={i} className="flex-1 rounded-t-md" style={{ height: `${Math.max(b, 3)}%`, background: i % 2 ? '#93C5FD' : '#2563EB' }} />
          ))}
        </div>
      </div>
    </Shell>
  )
}
