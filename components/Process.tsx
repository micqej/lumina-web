'use client'
import { motion } from 'framer-motion'

const steps = [
  { num: 'KROK 01', title: 'Krátka', em: 'správa', text: 'Napíšete mi cez formulár alebo email. Dohodneme si 20-minútový hovor o vašom projekte.' },
  { num: 'KROK 02', title: 'Cenová', em: 'ponuka', text: 'Do 24 hodín máte v inboxe presnú ponuku s rozsahom prác a termínom dodania.' },
  { num: 'KROK 03', title: 'Tvorba', em: 'stránky', text: 'Po zálohovej platbe začínam pracovať. O priebehu vás priebežne informujem.' },
  { num: 'KROK 04', title: 'Spustenie', em: 'online', text: 'Do 14 dní stránka beží naživo. Pomôžem so spustením, doménou aj hostingom.' },
]

export default function Process() {
  return (
    <section
      id="proces"
      style={{ padding: 'clamp(70px,10vh,110px) clamp(20px,4vw,48px)', position: 'relative', zIndex: 2 }}
    >
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        <span style={{ width: 7, height: 7, background: 'var(--violet)', borderRadius: '50%' }} />
        Postup — 04
      </motion.div>

      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.1 }} style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,78px)', lineHeight: 1, letterSpacing: -2, color: 'var(--ink)', marginBottom: 16 }}>
        Ako to <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>ide</em>.
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 480, lineHeight: 1.65, marginBottom: 56 }}>
        Štyri kroky, žiadny chaos. Vy len napíšete — o ostatné sa postarám ja.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 0, border: '2px solid var(--ink)', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--paper)', boxShadow: 'var(--shadow-lg)' }}
      >
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="card-lift"
            style={{ padding: 'clamp(24px,3vw,36px) clamp(20px,2.5vw,28px)', borderRight: i < steps.length - 1 ? '1.5px solid var(--ink)' : 'none', position: 'relative' }}
          >
            {/* connector line */}
            {i < steps.length - 1 && (
              <div style={{ position: 'absolute', top: '50%', right: -1, width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '6px solid var(--violet)', transform: 'translateY(-50%)', zIndex: 3 }} />
            )}

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--violet)', marginBottom: 18, letterSpacing: '1.5px' }}>{s.num}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(20px,2.5vw,26px)', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 12, letterSpacing: -0.5 }}>
              {s.title} <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>{s.em}</em>
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{s.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
