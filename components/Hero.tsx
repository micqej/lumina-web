'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.9, 0.2, 1] },
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(48px,6vh,90px) clamp(20px,4vw,48px) clamp(60px,8vh,100px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))',
        gap: 'clamp(48px,6vw,72px)',
        alignItems: 'center',
        minHeight: 'calc(100vh - 80px)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* LEFT */}
      <motion.div style={{ y: textY, opacity }}>
        {/* eyebrow */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '7px 16px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'var(--ink)', marginBottom: 28, textTransform: 'uppercase', letterSpacing: '1.5px', boxShadow: '3px 3px 0 var(--ink)' }}>
          <span style={{ width: 8, height: 8, background: 'var(--violet)', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(91,33,182,0.22)' }} />
          Reprezentatívne stránky pre firmy
        </motion.div>

        {/* title */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(52px,7.2vw,108px)',
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: -3,
            color: 'var(--ink)',
            marginBottom: 28,
          }}
        >
          Stránka, za&nbsp;ktorú sa{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>nebudete</em>{' '}
          hanbiť pred{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            klientmi
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: 6, height: 14, background: 'var(--violet)', opacity: 0.22, zIndex: -1, borderRadius: 2 }} />
          </span>
          .
        </motion.h1>

        <motion.p {...fadeUp(0.3)} style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 520, marginBottom: 36 }}>
          Nepredávam weby. Predávam <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>dôveru zákazníkov</strong> — reprezentatívnu prezentáciu vašej firmy, ktorá vyzerá tak dobre, že ju budete chcieť hneď komusi poslať.
        </motion.p>

        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid var(--ink)', background: 'var(--ink)', color: 'var(--bg)', boxShadow: '6px 6px 0 var(--violet)', transition: 'transform 0.15s,box-shadow 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translate(-3px,-3px)'; e.currentTarget.style.boxShadow='9px 9px 0 var(--violet)' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='6px 6px 0 var(--violet)' }}
          >
            Cenová ponuka
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>
          </a>
          <a href="#ceny" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid var(--ink)', background: 'var(--paper)', color: 'var(--ink)', boxShadow: '6px 6px 0 var(--ink)', transition: 'transform 0.15s,box-shadow 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translate(-3px,-3px)'; e.currentTarget.style.boxShadow='9px 9px 0 var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='6px 6px 0 var(--ink)' }}
          >
            Pozrieť cenník
          </a>
        </motion.div>

        {/* trust */}
        <motion.div {...fadeUp(0.5)} style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', paddingTop: 28, borderTop: '1.5px solid var(--line)' }}>
          {[
            { num: '40+', label: 'Spokojných klientov' },
            { num: '14d', label: 'Do spustenia', em: true },
            { num: '95+', label: 'PageSpeed skóre', em: true },
          ].map((t, i) => (
            <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {i > 0 && <span style={{ width: 1, height: 36, background: 'var(--line)' }} />}
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, lineHeight: 1, color: 'var(--ink)' }}>
                  {t.em
                    ? <>{t.num.slice(0, -1)}<em style={{ color: 'var(--violet-2)', fontStyle: 'italic' }}>{t.num.slice(-1)}</em></>
                    : t.num}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: 6 }}>{t.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — photo card */}
      <motion.div
        style={{ y: cardY, opacity }}
        initial={{ opacity: 0, scale: 0.96, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
        className="relative flex items-center justify-center"
        css-fix="true"
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* META sticker */}
          <div style={{ position: 'absolute', top: -16, left: -16, zIndex: 4, background: 'var(--violet)', color: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 6, padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase', boxShadow: '4px 4px 0 var(--ink)' }}>
            FILE · 001 / FOUNDER
          </div>

          {/* photo card */}
          <div style={{ width: '100%', maxWidth: 420, aspectRatio: '4/5', background: 'linear-gradient(135deg,#1e1b4b 0%,#312e81 40%,#4c1d95 100%)', borderRadius: 'var(--r-md)', border: '2px solid var(--ink)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden', position: 'relative' }}>
            {/* placeholder shimmer */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(91,33,182,0.4),rgba(124,58,237,0.6),rgba(6,182,212,0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.4 }}>◈</div>
                Fotka Michala
              </div>
            </div>
          </div>

          {/* spec cards */}
          <div className="bob-1" style={{ position: 'absolute', top: '14%', left: -32, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 8, padding: '12px 16px', boxShadow: '4px 4px 0 var(--ink)', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px', zIndex: 5 }}>
            <span style={{ width: 8, height: 8, background: 'var(--violet)', borderRadius: '50%' }} />
            Web do 14 dní
          </div>
          <div className="bob-2" style={{ position: 'absolute', bottom: '26%', right: -36, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 8, padding: '12px 16px', boxShadow: '4px 4px 0 var(--ink)', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px', zIndex: 5 }}>
            <span style={{ width: 8, height: 8, background: 'var(--violet)', borderRadius: '50%' }} />
            Rok úprav v cene
          </div>

          {/* index sticker */}
          <div style={{ position: 'absolute', bottom: -20, right: -20, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 6, padding: '14px 18px', boxShadow: '5px 5px 0 var(--ink)', zIndex: 6, textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4 }}>Zakladateľ · 2021</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--ink)', lineHeight: 1.1 }}>Michal <em style={{ color: 'var(--violet-2)', fontStyle: 'italic' }}>Mikula</em></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.2px', marginTop: 6 }}>Founder · Lumina Engine</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
