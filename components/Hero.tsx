'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const words = ['Stránka,', 'za ktorú', 'sa', 'nebudete', 'hanbiť.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // parallax — jemné, nastane hneď pri scrolle
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const cardY  = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  // mouse 3D tilt
  const springX = useSpring(0, { stiffness: 90, damping: 22 })
  const springY = useSpring(0, { stiffness: 90, damping: 22 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      springX.set((e.clientX / window.innerWidth - 0.5) * 16)
      springY.set((e.clientY / window.innerHeight - 0.5) * -12)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [springX, springY])

  return (
    <section
      ref={ref}
      style={{
        /* celý viewport — nič mimo obrazovky */
        height: '100svh',
        maxHeight: '100svh',
        overflow: 'hidden',
        padding: 'clamp(24px,3.5vh,48px) clamp(20px,4vw,56px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(24px,4vw,64px)',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* ── LEFT TEXT ── */}
      <motion.div style={{ y: textY, opacity: fadeOut }}>

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', background: 'var(--blue-light)',
            border: '1.5px solid var(--blue)', borderRadius: 999,
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            color: 'var(--blue)', marginBottom: 22, width: 'fit-content',
            textTransform: 'uppercase', letterSpacing: '1.5px',
          }}
        >
          <span style={{ width: 7, height: 7, background: 'var(--blue)', borderRadius: '50%' }} />
          Reprezentatívne stránky pre firmy
        </motion.div>

        {/* headline */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(46px,6.5vw,96px)',
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: -2.5,
          color: 'var(--ink)',
          marginBottom: 24,
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.2, 0.9, 0.2, 1] }}
              style={{
                display: 'inline-block',
                marginRight: '0.2em',
                color: i === 3 ? 'var(--blue)' : 'var(--ink)',
                fontStyle: i === 3 ? 'italic' : 'normal',
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 480, marginBottom: 28 }}
        >
          Nepredávam weby. Predávam{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>dôveru zákazníkov</strong>{' '}
          — prezentáciu, ktorú budete chcieť hneď ukázať klientom.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#kontakt"
            className="btn-pulse"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 26px', borderRadius: 8, fontSize: 14, fontWeight: 700,
              textDecoration: 'none', border: '1.5px solid var(--ink)',
              background: 'var(--ink)', color: 'var(--paper)',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = '' }}
          >
            Cenová ponuka
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>
          </a>
          <a
            href="#ceny"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 26px', borderRadius: 8, fontSize: 14, fontWeight: 600,
              textDecoration: 'none', border: '1.5px solid var(--ink)',
              background: 'var(--paper)', color: 'var(--ink)',
              boxShadow: '5px 5px 0 var(--ink)', transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '5px 5px 0 var(--ink)' }}
          >
            Pozrieť cenník
          </a>
        </motion.div>

        {/* trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', paddingTop: 24, borderTop: '1.5px solid var(--line)' }}
        >
          {[
            { num: '40+', label: 'Spokojných klientov' },
            { num: '14d', label: 'Do spustenia', em: true },
            { num: '95+', label: 'PageSpeed', em: true },
          ].map((t, i) => (
            <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {i > 0 && <span style={{ width: 1, height: 30, background: 'var(--line)' }} />}
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, lineHeight: 1, color: 'var(--ink)', fontWeight: 400 }}>
                  {t.em
                    ? <>{t.num.slice(0, -1)}<em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>{t.num.slice(-1)}</em></>
                    : t.num}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: 4 }}>{t.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── RIGHT — photo ── */}
      <motion.div
        style={{ y: cardY, opacity: fadeOut, perspective: 900 }}
        initial={{ opacity: 0, x: 50, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.9, 0.2, 1] }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* FILE sticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            style={{
              position: 'absolute', top: -12, left: -12, zIndex: 6,
              background: 'var(--blue)', color: 'white',
              border: '1.5px solid var(--ink)', borderRadius: 6,
              padding: '6px 13px', fontFamily: 'var(--font-mono)',
              fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase',
              boxShadow: '3px 3px 0 var(--ink)', fontWeight: 700,
            }}
          >
            FILE · 001 / FOUNDER
          </motion.div>

          {/* 3D tilt photo card */}
          <motion.div style={{ rotateX: springY, rotateY: springX, transformStyle: 'preserve-3d' }}>
            <div style={{
              width: 'clamp(260px, 32vw, 380px)',
              aspectRatio: '4/5',
              background: '#111',
              borderRadius: 'var(--r-md)',
              border: '2px solid var(--ink)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <Image
                src="/michal.jpg"
                alt="Michal Mikula — Lumina Engine"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>
          </motion.div>

          {/* floating badge: web do 14 dní */}
          <motion.div
            className="bob-1"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{
              position: 'absolute', top: '12%', left: -32, zIndex: 5,
              background: 'var(--paper)', border: '1.5px solid var(--ink)',
              borderRadius: 10, padding: '10px 14px', boxShadow: '4px 4px 0 var(--ink)',
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
              color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: 7, height: 7, background: 'var(--blue)', borderRadius: '50%' }} />
            Web do 14 dní
          </motion.div>

          {/* floating badge: PageSpeed */}
          <motion.div
            className="bob-2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{
              position: 'absolute', top: '42%', right: -36, zIndex: 5,
              background: 'var(--paper)', border: '1.5px solid var(--ink)',
              borderRadius: 10, padding: '10px 14px', boxShadow: '4px 4px 0 var(--ink)',
              fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
              color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%' }} />
            PageSpeed 95+
          </motion.div>

          {/* notification card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{
              position: 'absolute', bottom: -10, left: -8, zIndex: 6,
              background: 'var(--paper)', border: '1.5px solid var(--ink)',
              borderRadius: 10, padding: '10px 14px',
              boxShadow: '4px 4px 0 var(--ink)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            <div style={{ width: 32, height: 32, background: 'var(--blue)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--ink-soft)', marginBottom: 2 }}>Nový projekt</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>Klient schválil dizajn ✓</div>
            </div>
          </motion.div>

          {/* name card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            style={{
              position: 'absolute', bottom: -16, right: -16, zIndex: 6,
              background: 'var(--paper)', border: '1.5px solid var(--ink)',
              borderRadius: 8, padding: '10px 14px',
              boxShadow: '4px 4px 0 var(--ink)', textAlign: 'right',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 3 }}>Zakladateľ · 2021</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--ink)', lineHeight: 1.1 }}>
              Michal <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Mikula</em>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.2px', marginTop: 4 }}>Founder · Lumina Engine</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
