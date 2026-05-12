'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.2, 0.9, 0.2, 1] },
})

const ContactIcon = ({ children }: { children: React.ReactNode }) => (
  <span style={{ width: 40, height: 40, background: 'var(--violet)', border: '1.5px solid var(--ink)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
    {children}
  </span>
)

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section
      id="kontakt"
      style={{ padding: 'clamp(70px,10vh,110px) clamp(20px,4vw,48px)', position: 'relative', zIndex: 2 }}
    >
      <motion.div {...fadeUp(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        <span style={{ width: 7, height: 7, background: 'var(--violet)', borderRadius: '50%' }} />
        Kontakt — 05
      </motion.div>

      <motion.h2 {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,78px)', lineHeight: 1, letterSpacing: -2, color: 'var(--ink)', marginBottom: 56 }}>
        Napíšte mi.<br />
        <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>Odpoviem do 24h.</em>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))', gap: 'clamp(32px,5vw,48px)' }}>
        {/* info */}
        <motion.div {...fadeUp(0.15)}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 34, color: 'var(--ink)', marginBottom: 24, letterSpacing: -1 }}>
            Kontaktné <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>údaje</em>
          </h3>

          {[
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
              label: 'Email',
              value: <a href="mailto:info@luminaengine.sk" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet-2)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}>info@luminaengine.sk</a>,
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4a2 2 0 012-2h2l2 5-2 1a12 12 0 006 6l1-2 5 2v2a2 2 0 01-2 2C8 18 4 14 4 6a2 2 0 011-2z"/></svg>,
              label: 'Telefón',
              value: <a href="tel:+421908804366" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet-2)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}>+421 908 804 366</a>,
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2c-4 0-7 3-7 7 0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
              label: 'Sídlo',
              value: <span style={{ fontWeight: 500 }}>Košice, Slovensko</span>,
            },
          ].map((c, i) => (
            <div
              key={i}
              className="card-lift"
              style={{ background: 'var(--paper)', border: '2px solid var(--ink)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-sm)', padding: '16px 20px', marginBottom: 12, display: 'flex', gap: 14, alignItems: 'center' }}
            >
              <ContactIcon>{c.icon}</ContactIcon>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--ink-soft)', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 16 }}>{c.value}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20, background: 'var(--ink)', color: 'var(--bg)', border: '2px solid var(--ink)', borderRadius: 'var(--r-md)', padding: '24px 26px', boxShadow: 'var(--shadow-md)' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 20, marginBottom: 16, color: 'var(--violet-2)' }}>Firemné údaje</h4>
            {[
              { k: 'Spoločnosť', v: 'Brandrise s. r. o.' },
              { k: 'IČO', v: '53 196 449' },
              { k: 'DIČ', v: '2121313865' },
              { k: 'IČ DPH', v: 'SK2121313865' },
              { k: 'Sídlo', v: 'Sokolovská 178/10, Košice' },
            ].map((r, i, a) => (
              <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13, borderBottom: i < a.length - 1 ? '1px dashed rgba(237,238,244,0.18)' : 'none', gap: 16 }}>
                <span style={{ color: 'rgba(237,238,244,0.55)', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px' }}>{r.k}</span>
                <span style={{ color: 'var(--bg)', fontWeight: 500, textAlign: 'right' }}>{r.v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* form */}
        <motion.div
          {...fadeUp(0.25)}
          style={{ background: 'var(--paper)', border: '2px solid var(--ink)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-xl)', padding: 'clamp(28px,4vw,40px) clamp(24px,4vw,36px)' }}
        >
          <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 34, color: 'var(--ink)', marginBottom: 24, letterSpacing: -1 }}>
            Vyžiadajte si <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>ponuku</em>
          </h3>

          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--ink)', marginBottom: 12 }}>Správa odoslaná!</h4>
              <p style={{ color: 'var(--ink-soft)', fontSize: 16 }}>Ozvem sa vám do 24 hodín.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[
                { label: 'Vaše meno a priezvisko', type: 'text', placeholder: 'Ján Novák', name: 'name', required: true },
                { label: 'Email', type: 'email', placeholder: 'jan@firma.sk', name: 'email', required: true },
                { label: 'Telefón', type: 'tel', placeholder: '+421 900 000 000', name: 'phone', required: false },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink-soft)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1.2px' }}>{f.label}</label>
                  <input className="lumina-input" type={f.type} placeholder={f.placeholder} name={f.name} required={f.required} />
                </div>
              ))}

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink-soft)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1.2px' }}>Typ stránky</label>
                <select className="lumina-input" name="type">
                  <option value="">Vyberte typ stránky</option>
                  <option>Landing page (1 stránka) — od 250 €</option>
                  <option>Firemný web (3–5 stránok) — od 350 €</option>
                  <option>Portál / E-shop — od 400 €</option>
                  <option>Neviem ešte, chcem konzultáciu</option>
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink-soft)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1.2px' }}>Stručný popis projektu</label>
                <textarea className="lumina-input" name="message" placeholder="Čo robí vaša firma a čo od stránky očakávate..." style={{ resize: 'none', height: 100 }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, border: '1.5px solid var(--ink)', background: 'var(--ink)', color: 'var(--bg)', boxShadow: '6px 6px 0 var(--violet)', transition: 'transform 0.15s, box-shadow 0.15s', cursor: status === 'sending' ? 'wait' : 'pointer' }}
                  onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = '9px 9px 0 var(--violet)' } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--violet)' }}
                >
                  {status === 'sending' ? 'Odosielam...' : 'Odoslať dopyt'}
                  {status !== 'sending' && <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>}
                </button>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1px' }}>Odpoviem do 24h</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
