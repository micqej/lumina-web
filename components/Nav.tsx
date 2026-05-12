'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#pribeh', label: 'Príbeh' },
  { href: '#vyhody', label: 'Prečo Lumina' },
  { href: '#ceny', label: 'Ceny' },
  { href: '#proces', label: 'Postup' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 48px',
          backdropFilter: 'blur(16px)',
          background: scrolled ? 'rgba(237,238,244,0.88)' : 'rgba(237,238,244,0.7)',
          borderBottom: scrolled ? '1.5px solid var(--ink)' : '1.5px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        {/* logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <span
            style={{
              width: 36, height: 36,
              background: 'var(--ink)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--violet-2)',
              fontFamily: 'var(--font-serif)',
              fontSize: 24,
              fontStyle: 'italic',
              boxShadow: '3px 3px 0 var(--violet)',
            }}
          >L</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 26, letterSpacing: -0.5, color: 'var(--ink)' }}>
            Lumina<em style={{ color: 'var(--violet-2)', fontStyle: 'italic' }}>.</em>
          </span>
        </Link>

        {/* desktop links */}
        <ul style={{ listStyle: 'none', display: 'flex', gap: 32, alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet-2)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              style={{
                background: 'var(--ink)', color: 'var(--bg)',
                padding: '10px 22px', borderRadius: 6, fontSize: 14, fontWeight: 600,
                textDecoration: 'none', boxShadow: '3px 3px 0 var(--violet)',
                transition: 'transform 0.15s, box-shadow 0.15s', display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-2px,-2px)'
                e.currentTarget.style.boxShadow = '5px 5px 0 var(--violet)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '3px 3px 0 var(--violet)'
              }}
            >Cenová ponuka</a>
          </li>
        </ul>

        {/* hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
            {open
              ? <><path d="M6 6l12 12M6 18L18 6"/></>
              : <><path d="M3 6h18M3 12h18M3 18h18"/></>}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'var(--paper)',
              borderBottom: '1.5px solid var(--ink)',
            }}
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}
                >{l.label}</a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                style={{
                  background: 'var(--ink)', color: 'var(--bg)',
                  padding: '12px 20px', borderRadius: 6, fontSize: 14, fontWeight: 600,
                  textDecoration: 'none', textAlign: 'center',
                  boxShadow: '3px 3px 0 var(--violet)',
                }}
              >Cenová ponuka</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
