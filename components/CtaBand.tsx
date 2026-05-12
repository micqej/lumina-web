'use client'
import { motion } from 'framer-motion'

export default function CtaBand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9 }}
      style={{
        margin: 'clamp(40px,6vh,80px) clamp(20px,4vw,48px)',
        padding: 'clamp(48px,6vw,80px) clamp(28px,5vw,64px)',
        background: 'var(--ink)',
        color: 'var(--bg)',
        borderRadius: 'var(--r-lg)',
        boxShadow: 'var(--shadow-xl)',
        border: '2px solid var(--ink)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
        gap: 'clamp(32px,5vw,64px)',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      {/* background glow */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 380, height: 380, background: 'var(--violet)', borderRadius: '50%', opacity: 0.35, filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 280, height: 280, background: 'var(--violet-2)', borderRadius: '50%', opacity: 0.2, filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,78px)', lineHeight: 1, letterSpacing: -2, marginBottom: 18 }}>
          Tak <em style={{ color: 'var(--violet-2)', fontStyle: 'italic' }}>poďme</em><br />na to spolu.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(237,238,244,0.72)', maxWidth: 440 }}>
          Bez záväzkov, bez zbytočného mailovania tam-späť. Napíšete mi, ja vám odpoviem do 24 hodín — a rovno k veci.
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <a
          href="#kontakt"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid var(--bg)', background: 'var(--violet)', color: 'var(--bg)', boxShadow: '6px 6px 0 var(--bg)', transition: 'transform 0.15s, box-shadow 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = '9px 9px 0 var(--bg)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--bg)' }}
        >
          Chcem cenovú ponuku
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>
        </a>
        <a
          href="tel:+421908804366"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid var(--bg)', background: 'transparent', color: 'var(--bg)', boxShadow: '6px 6px 0 var(--violet)', transition: 'transform 0.15s, box-shadow 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = '9px 9px 0 var(--violet)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--violet)' }}
        >
          Alebo zavolajte
        </a>
      </div>
    </motion.div>
  )
}
