'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const words = ['Stránka,', 'za ktorú', 'sa', 'nebudete', 'hanbiť.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  // mouse parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const springX = useSpring(0, { stiffness: 80, damping: 20 })
  const springY = useSpring(0, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
      springX.set(x * 8)
      springY.set(y * -8)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [springX, springY])

  const rotateX = useTransform(springY, v => v)
  const rotateY = useTransform(springX, v => v)

  const [imgExists, setImgExists] = useState(false)
  useEffect(() => {
    const img = new window.Image()
    img.src = '/michal.jpg'
    img.onload = () => setImgExists(true)
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(48px,6vh,80px) clamp(20px,4vw,56px) clamp(60px,8vh,100px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: 'clamp(48px,6vw,80px)',
        alignItems: 'center',
        minHeight: 'calc(100vh - 74px)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* ── LEFT TEXT ── */}
      <motion.div style={{ y: textY, opacity }}>

        {/* availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', background: 'var(--paper)',
            border: '1.5px solid var(--ink)', borderRadius: 999,
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            color: 'var(--ink)', marginBottom: 12,
            boxShadow: '2px 2px 0 var(--ink)',
            textTransform: 'uppercase', letterSpacing: '1.5px',
          }}
        >
          <span className="avail-dot" style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
          Dostupný pre projekty
        </motion.div>

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', background: 'var(--blue-light)',
            border: '1.5px solid var(--blue)', borderRadius: 999,
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            color: 'var(--blue)', marginBottom: 28, width: 'fit-content',
            textTransform: 'uppercase', letterSpacing: '1.5px',
          }}
        >
          <span style={{ width: 7, height: 7, background: 'var(--blue)', borderRadius: '50%' }} />
          Reprezentatívne stránky pre firmy
        </motion.div>

        {/* headline — word by word */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(54px,7.5vw,112px)',
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: -3,
          color: 'var(--ink)',
          marginBottom: 32,
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.75, delay: 0.2 + i * 0.1, ease: [0.2, 0.9, 0.2, 1] }}
              style={{
                display: 'inline-block',
                marginRight: word.includes(' ') ? 0 : '0.22em',
                color: i === 3 ? 'var(--blue)' : 'var(--ink)',
                fontStyle: i === 3 ? 'italic' : 'normal',
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 500, marginBottom: 36 }}
        >
          Nepredávam weby. Predávam{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>dôveru zákazníkov</strong>{' '}
          — prezentáciu, ktorú budete chcieť hneď ukázať klientom.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#kontakt"
            className="btn-pulse"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700,
              textDecoration: 'none', border: '1.5px solid var(--ink)',
              background: 'var(--ink)', color: 'var(--paper)',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = '' }}
          >
            Cenová ponuka
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>
          </a>
          <a
            href="#ceny"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600,
              textDecoration: 'none', border: '1.5px solid var(--ink)',
              background: 'var(--paper)', color: 'var(--ink)',
              boxShadow: '6px 6px 0 var(--ink)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = '9px 9px 0 var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--ink)' }}
          >
            Pozrieť cenník
          </a>
        </motion.div>

        {/* trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', paddingTop: 28, borderTop: '1.5px solid var(--line)' }}
        >
          {[
            { num: '40+', label: 'Spokojných klientov' },
            { num: '14d', label: 'Do spustenia', em: true },
            { num: '95+', label: 'PageSpeed', em: true },
          ].map((t, i) => (
            <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {i > 0 && <span style={{ width: 1, height: 34, background: 'var(--line)' }} />}
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 34, lineHeight: 1, color: 'var(--ink)', fontWeight: 400 }}>
                  {t.em
                    ? <>{t.num.slice(0, -1)}<em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>{t.num.slice(-1)}</em></>
                    : t.num}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: 5 }}>{t.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── RIGHT — photo with 3D tilt ── */}
      <motion.div
        style={{ y: cardY, opacity, perspective: 800 }}
        initial={{ opacity: 0, x: 60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 540 }}>

          {/* FILE sticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ position: 'absolute', top: -14, left: -14, zIndex: 6, background: 'var(--blue)', color: 'white', border: '1.5px solid var(--ink)', borderRadius: 6, padding: '7px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase', boxShadow: '4px 4px 0 var(--ink)', fontWeight: 700 }}
          >
            FILE · 001 / FOUNDER
          </motion.div>

          {/* 3D tilt photo card */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="photo-tilt"
          >
            <div style={{
              width: 'min(380px, 90vw)', aspectRatio: '4/5',
              background: 'linear-gradient(135deg, #1a1f36 0%, #2d3561 100%)',
              borderRadius: 'var(--r-md)', border: '2px solid var(--ink)',
              boxShadow: 'var(--shadow-xl)', overflow: 'hidden',
              position: 'relative',
            }}>
              {imgExists ? (
                <Image
                  src="/michal.jpg"
                  alt="Michal Mikula — Lumina Engine"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#1B48E8 0%,#4169E1 50%,#0C1220 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    <div style={{ fontSize: 44, marginBottom: 10, opacity: 0.5 }}>◈</div>
                    Pridajte fotku
                    <br />
                    <span style={{ fontSize: 9, opacity: 0.6 }}>/public/michal.jpg</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* floating badge: web do 14 dní */}
          <motion.div
            className="bob-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{ position: 'absolute', top: '13%', left: -36, zIndex: 5, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 10, padding: '12px 16px', boxShadow: '4px 4px 0 var(--ink)', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}
          >
            <span style={{ width: 8, height: 8, background: 'var(--blue)', borderRadius: '50%' }} />
            Web do 14 dní
          </motion.div>

          {/* floating badge: PageSpeed */}
          <motion.div
            className="bob-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            style={{ position: 'absolute', top: '44%', right: -40, zIndex: 5, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 10, padding: '10px 14px', boxShadow: '4px 4px 0 var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%' }} />
              PageSpeed 95+
            </div>
          </motion.div>

          {/* floating notification card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{ position: 'absolute', bottom: -12, left: -10, zIndex: 6, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 10, padding: '12px 16px', boxShadow: '5px 5px 0 var(--ink)', display: 'flex', alignItems: 'center', gap: 12 }}
          >
            <div style={{ width: 36, height: 36, background: 'var(--blue)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--ink-soft)', marginBottom: 2 }}>Nový projekt</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>Klient schválil dizajn ✓</div>
            </div>
          </motion.div>

          {/* name card bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{ position: 'absolute', bottom: -18, right: -18, background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 8, padding: '12px 16px', boxShadow: '5px 5px 0 var(--ink)', zIndex: 6, textAlign: 'right' }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4 }}>Zakladateľ · 2021</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--ink)', lineHeight: 1.1 }}>
              Michal <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Mikula</em>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1.2px', marginTop: 5 }}>Founder · Lumina Engine</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
