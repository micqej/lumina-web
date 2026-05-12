export default function Ticker() {
  const items = [
    'Reprezentatívne stránky',
    'Web do 14 dní',
    'Rok úprav v cene',
    'Od 250 €',
    'Dizajn na mieru',
    'PageSpeed 95+',
  ]
  const doubled = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--ink)',
        color: 'var(--bg)',
        overflow: 'hidden',
        padding: '18px 0',
        borderTop: '2px solid var(--ink)',
        borderBottom: '2px solid var(--ink)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="ticker-run" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
              padding: '0 32px',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 28,
              fontWeight: 400,
            }}
          >
            {item}
            <span style={{ width: 8, height: 8, background: 'var(--violet-2)', borderRadius: '50%', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
