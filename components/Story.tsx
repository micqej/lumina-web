'use client'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, delay, ease: [0.2, 0.9, 0.2, 1] },
})

const stats = [
  { num: '40+', label: 'Hotových projektov' },
  { num: '14', label: 'Dní do spustenia' },
  { num: '5–7', label: 'Rokov bez prerábok' },
  { num: '100%', label: 'Spokojnosť klientov', em: true },
]

export default function Story() {
  return (
    <section
      id="pribeh"
      style={{ padding: 'clamp(70px,10vh,110px) clamp(20px,4vw,48px)', position: 'relative', zIndex: 2 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
        {/* text */}
        <div>
          <motion.div {...fadeUp(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            <span style={{ width: 7, height: 7, background: 'var(--violet)', borderRadius: '50%' }} />
            Príbeh — 01
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1, letterSpacing: -2, color: 'var(--ink)', marginBottom: 24 }}>
            Nepredávam <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>weby</em>.<br />
            Predávam <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>klientov</em>.
          </motion.h2>

          {[
            <>Roky som od klientov počúval to isté: <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>chcem niečo, čo bude vyzerať dobre.</strong> Nie najdrahšie. Nie najkomplikovanejšie. Stránku, ktorá ich firmu reprezentuje tak, aby sa za ňu nemuseli hanbiť.</>,
            'Väčšina firemných stránok pritom vydrží 5 až 7 rokov bez výmeny. Netreba ich prerábať každú sezónu — treba ich urobiť raz a poriadne!',
            <>Tak som vyvinul <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Lumina Engine</strong> — vlastný systém, ktorý spája moderný dizajn, rýchlosť a rozumnú cenu. Aby ste získali stránku, na ktorú budete hrdí.</>,
          ].map((text, i) => (
            <motion.p key={i} {...fadeUp(0.15 + i * 0.1)} style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', marginTop: 20 }}>
              {text}
            </motion.p>
          ))}
        </div>

        {/* quote card */}
        <motion.div
          {...fadeUp(0.25)}
          style={{ background: 'var(--paper)', border: '2px solid var(--ink)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)', padding: 'clamp(28px,4vw,44px) clamp(24px,4vw,40px)', position: 'relative', marginTop: 32 }}
        >
          <span style={{ position: 'absolute', top: -8, left: 28, fontFamily: 'var(--font-serif)', fontSize: 120, lineHeight: 1, color: 'var(--violet-2)', opacity: 0.6 }}>"</span>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, color: 'var(--ink)', marginTop: 32, fontWeight: 400 }}>
            Cieľ nie je predať web. Cieľ je dať vám prezentáciu, ktorú vám klienti pochvália — a ktorú budete chcieť hneď ukázať aj kolegom z brandže.
          </p>
          <cite style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28, fontSize: 13, fontStyle: 'normal', color: 'var(--ink)', fontWeight: 600, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
            <span style={{ width: 32, height: 1.5, background: 'var(--violet)', display: 'inline-block' }} />
            Michal Mikula · Zakladateľ
          </cite>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 0, marginTop: 64, border: '2px solid var(--ink)', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--paper)', boxShadow: 'var(--shadow-lg)' }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="card-lift"
            style={{ padding: '28px 24px', borderRight: i < stats.length - 1 ? '1.5px solid var(--ink)' : 'none', borderBottom: 'none' }}
          >
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 60, lineHeight: 1, letterSpacing: -2, color: 'var(--ink)' }}>
              {s.em
                ? <>{s.num.slice(0, -1)}<em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>{s.num.slice(-1)}</em></>
                : s.num}
            </div>
            <div style={{ marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-soft)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1.2px' }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
