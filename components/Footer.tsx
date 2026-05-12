'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer
        style={{ padding: 'clamp(48px,6vh,70px) clamp(20px,4vw,48px) clamp(28px,4vh,40px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'clamp(28px,4vw,56px)', borderTop: '2px solid var(--ink)', background: 'var(--bg-2)', position: 'relative', zIndex: 2 }}
      >
        <div>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 16 }}>
            <span style={{ width: 36, height: 36, background: 'var(--ink)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-2)', fontFamily: 'var(--font-serif)', fontSize: 24, fontStyle: 'italic', boxShadow: '3px 3px 0 var(--violet)' }}>L</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 26, letterSpacing: -0.5, color: 'var(--ink)' }}>
              Lumina<em style={{ color: 'var(--violet-2)', fontStyle: 'italic' }}>.</em>
            </span>
          </Link>
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 360 }}>
            Reprezentatívne stránky pre firmy a živnostníkov. Postavené poriadne, rýchlo a za rozumnú cenu — aby ste si svoju značku konečne mohli ukázať.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, color: 'var(--violet)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Navigácia</h4>
          <ul style={{ listStyle: 'none' }}>
            {[['#pribeh', 'Príbeh'], ['#vyhody', 'Prečo Lumina'], ['#ceny', 'Cenník'], ['#proces', 'Postup'], ['#kontakt', 'Kontakt']].map(([href, label]) => (
              <li key={href} style={{ marginBottom: 10 }}>
                <a href={href} style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet-2)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, color: 'var(--violet)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Spojiť sa</h4>
          <ul style={{ listStyle: 'none' }}>
            {[
              ['mailto:info@luminaengine.sk', 'info@luminaengine.sk'],
              ['tel:+421908804366', '+421 908 804 366'],
            ].map(([href, label]) => (
              <li key={href} style={{ marginBottom: 10 }}>
                <a href={href} style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet-2)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
                >{label}</a>
              </li>
            ))}
            <li style={{ marginBottom: 10 }}>
              <span style={{ color: 'var(--ink-soft)', fontSize: 15 }}>Košice, Slovensko</span>
            </li>
          </ul>
        </div>
      </footer>

      <div
        style={{ padding: '18px clamp(20px,4vw,48px)', background: 'var(--bg-2)', borderTop: '1.5px solid var(--line)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11, position: 'relative', zIndex: 2 }}
      >
        <p style={{ color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1px' }}>© 2025 Brandrise s. r. o. — Vyrobené v Košiciach</p>
        <p style={{ color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '1px' }}>IČO 53 196 449 · Lumina Engine</p>
      </div>
    </>
  )
}
