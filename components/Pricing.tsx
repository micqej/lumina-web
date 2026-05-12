'use client'
import { motion } from 'framer-motion'

const plans = [
  {
    label: 'Plán 01', sku: 'LE-LND',
    name: 'Landing', em: 'page',
    desc: 'Jedna stránka, jeden cieľ.',
    price: '250', period: 'Jednorazovo',
    featured: false,
    features: ['1 stránka (jednostránkový web)', 'Moderný responzívny dizajn', 'Rok úprav zdarma (30 min/mes)', 'SEO základ v cene', 'Dodanie do 14 dní'],
  },
  {
    label: 'Najobľúbenejší', sku: 'LE-CORP',
    name: 'Firemný', em: 'web',
    desc: 'Domov, o nás, služby, kontakt.',
    price: '350', period: 'Jednorazovo',
    featured: true,
    features: ['3–5 stránok', 'Prémiový dizajn na mieru', 'Rok úprav zdarma (30 min/mes)', 'SEO + Google Analytics', 'Kontaktný formulár', 'Dodanie do 14 dní'],
  },
  {
    label: 'Plán 03', sku: 'LE-PRO',
    name: 'Väčší', em: 'web',
    desc: 'Rozsiahlejší projekt na mieru.',
    price: '400+', period: 'Cena podľa rozsahu',
    featured: false,
    features: ['6+ stránok alebo e-shop', 'Komplexná funkcionalita', 'Rok úprav zdarma (30 min/mes)', 'Pokročilé SEO a analytika', 'Termín podľa rozsahu'],
    note: 'Presná cena po krátkej konzultácii',
  },
]

const Check = () => (
  <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--violet)', border: '1.5px solid var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, color: 'white' }}>
    <svg width="9" height="9" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="2,8 6,12 14,4"/></svg>
  </span>
)

export default function Pricing() {
  return (
    <section
      id="ceny"
      style={{ background: 'var(--navy)', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', padding: 'clamp(70px,10vh,110px) clamp(20px,4vw,48px)', position: 'relative', zIndex: 2 }}
    >
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'transparent', border: '1.5px solid var(--bg)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--bg)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        <span style={{ width: 7, height: 7, background: 'var(--violet-2)', borderRadius: '50%' }} />
        Cenník — 03
      </motion.div>

      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.1 }} style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,78px)', lineHeight: 1, letterSpacing: -2, color: 'var(--bg)', marginBottom: 16 }}>
        Transparentne.<br />
        <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>Bez prekvapení.</em>
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} style={{ fontSize: 18, color: 'rgba(237,238,244,0.65)', maxWidth: 580, lineHeight: 1.65, marginBottom: 60 }}>
        Cena závisí od počtu stránok. Vždy dostanete presnú cenovú ponuku vopred — nikdy nie po dodaní.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 24 }}>
        {plans.map((p, i) => (
          <motion.div
            key={p.sku}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            className="card-lift"
            style={{
              background: p.featured ? 'var(--violet)' : 'var(--paper)',
              border: '2px solid var(--ink)',
              borderRadius: 'var(--r-lg)',
              boxShadow: `10px 10px 0 ${p.featured ? 'var(--bg)' : 'var(--violet)'}`,
              padding: 'clamp(28px,4vw,40px) clamp(24px,3vw,36px)',
              display: 'flex',
              flexDirection: 'column',
              color: 'var(--ink)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 18, borderBottom: `1.5px solid ${p.featured ? 'rgba(255,255,255,0.2)' : 'var(--line)'}` }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: p.featured ? 'rgba(255,255,255,0.9)' : 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{p.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: p.featured ? 'rgba(255,255,255,0.6)' : 'var(--ink-soft)', letterSpacing: '1px' }}>{p.sku}</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 34, color: 'var(--ink)', letterSpacing: -1, marginBottom: 6, lineHeight: 1 }}>
              {p.name} <em style={{ fontStyle: 'italic', color: p.featured ? 'rgba(255,255,255,0.85)' : 'var(--violet-2)' }}>{p.em}</em>
            </h3>
            <p style={{ fontSize: 14, color: p.featured ? 'rgba(255,255,255,0.75)' : 'var(--ink-soft)', marginBottom: 20 }}>{p.desc}</p>

            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 76, lineHeight: 1, letterSpacing: -3, color: 'var(--ink)', display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <sup style={{ fontSize: 28, verticalAlign: 'top' }}>€</sup>{p.price}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: p.featured ? 'rgba(255,255,255,0.6)' : 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.2px', marginTop: 10, marginBottom: 24 }}>{p.period}</div>

            <ul style={{ listStyle: 'none', flex: 1, marginBottom: 24 }}>
              {p.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: `1px dashed ${p.featured ? 'rgba(255,255,255,0.2)' : 'var(--line)'}`, fontSize: 14, color: 'var(--ink)', lineHeight: 1.5 }}>
                  <Check />{f}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                textDecoration: 'none',
                border: `1.5px solid ${p.featured ? 'var(--ink)' : 'var(--ink)'}`,
                background: p.featured ? 'var(--ink)' : 'var(--paper)',
                color: p.featured ? 'var(--bg)' : 'var(--ink)',
                boxShadow: p.featured ? '6px 6px 0 var(--bg)' : '6px 6px 0 var(--ink)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = p.featured ? '9px 9px 0 var(--bg)' : '9px 9px 0 var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = p.featured ? '6px 6px 0 var(--bg)' : '6px 6px 0 var(--ink)' }}
            >
              Chcem ponuku
            </a>
            {p.note && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: p.featured ? 'rgba(255,255,255,0.55)' : 'var(--ink-soft)', marginTop: 12, lineHeight: 1.5, textAlign: 'center' }}>{p.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
