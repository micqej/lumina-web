'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const features = [
  {
    num: '01', tag: 'SPEED',
    title: 'Rýchlosť, ktorá', em: 'uchváti',
    text: 'Stránka sa načíta za zlomok sekundy. Vaši klienti nečakajú — a Google to ocení v rankingu. PageSpeed 95+ nie je výnimka, je to štandard.',
    gradient: 'linear-gradient(135deg,#1e1b4b,#3730a3)',
  },
  {
    num: '02', tag: 'DESIGN',
    title: 'Dizajn, ktorý', em: 'chytí',
    text: 'Žiadne unavené šablóny. Každá stránka vyzerá tak, aby ste ju chceli okamžite poslať klientovi. Dizajn na mieru, nie z katalógu.',
    gradient: 'linear-gradient(135deg,#1e3a5f,#1d4ed8)',
  },
  {
    num: '03', tag: 'CARE',
    title: 'Rok úprav', em: 'zdarma',
    text: 'Do 30 minút mesačne stojím za vami. Text, fotka, kontakt — proste napíšete a ja to spravím. Bez čakaní, bez faktúr.',
    gradient: 'linear-gradient(135deg,#164e63,#0e7490)',
  },
  {
    num: '04', tag: 'DELIVERY',
    title: 'Hotovo do', em: '14 dní',
    text: 'Reálny termín, reálne dodanie. Žiadne ťahanie sa pol roka ako u veľkých agentúr. Podpisujeme a dodávam — to je záväzok.',
    gradient: 'linear-gradient(135deg,#14532d,#15803d)',
  },
  {
    num: '05', tag: 'PRICING',
    title: 'Cena podľa', em: 'rozsahu',
    text: 'Platíte len za to, čo skutočne potrebujete. Žiadne skryté poplatky ani prekvapenia v záverečnej faktúre.',
    gradient: 'linear-gradient(135deg,#7c2d12,#b45309)',
  },
  {
    num: '06', tag: 'SEO',
    title: 'SEO základ', em: 'v cene',
    text: 'Technický základ pre Google, správna štruktúra, rýchlosť, meta — všetko v cene. Vaša stránka sa nájde, keď treba.',
    gradient: 'linear-gradient(135deg,#1e3a5f,#4338ca)',
  },
]

// Intro + 6 features = 7 "slides" celkovo
const TOTAL = features.length + 1

function useSlideMotion(
  index: number,
  scrollYProgress: MotionValue<number>
) {
  const start = index / TOTAL
  const end   = (index + 1) / TOTAL

  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0,    end - 0.04, end]
      : [start, start + 0.06, end - 0.04, end],
    index === 0
      ? [1,    1,           0]
      : [0,    1,           1,             0]
  )

  const y = useTransform(
    scrollYProgress,
    index === 0
      ? [0, end - 0.04, end]
      : [start, start + 0.07, end - 0.04, end],
    index === 0
      ? ['0%', '0%', '-6%']
      : ['4%',  '0%', '0%', '-4%']
  )

  const xIn = useTransform(
    scrollYProgress,
    [start, start + 0.07],
    index === 0 ? [0, 0] : [index % 2 === 0 ? -50 : 50, 0]
  )

  const xCard = useTransform(
    scrollYProgress,
    [start, start + 0.07],
    index === 0 ? [0, 0] : [index % 2 === 0 ? 50 : -50, 0]
  )

  return { opacity, y, xIn, xCard }
}

/* ─── Intro slide ─── */
function IntroSlide({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSlideMotion(0, scrollYProgress)

  return (
    <motion.div style={{ opacity, y, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(20px,4vw,72px)' }}>
      <div style={{ maxWidth: 760 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: 'var(--ink)', marginBottom: 28, textTransform: 'uppercase', letterSpacing: '1.5px', boxShadow: '2px 2px 0 var(--ink)' }}>
          <span style={{ width: 7, height: 7, background: 'var(--blue)', borderRadius: '50%' }} />
          Prečo Lumina — 02
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(52px,7vw,110px)', lineHeight: 0.95, letterSpacing: -3, color: 'var(--ink)', marginBottom: 28 }}>
          Šesť dôvodov,<br />
          prečo to <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>funguje</em>.
        </h2>

        <p style={{ fontSize: 'clamp(16px,1.3vw,19px)', color: 'var(--ink-soft)', maxWidth: 520, lineHeight: 1.65, marginBottom: 36 }}>
          Nie som agentúra s dvadsiatimi zamestnancami a polročnými termínmi. Som jeden chlap, ktorý vie čo robí — a robí to poriadne.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          Scrolluj pre každý dôvod
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Feature slide ─── */
function FeatureSlide({
  feature, featureIndex, scrollYProgress,
}: {
  feature: typeof features[0]
  featureIndex: number        // 0-based index in features array
  scrollYProgress: MotionValue<number>
}) {
  const slideIndex = featureIndex + 1 // +1 because intro is slide 0
  const { opacity, y, xIn, xCard } = useSlideMotion(slideIndex, scrollYProgress)
  const isLeft = featureIndex % 2 === 0

  return (
    <motion.div style={{ opacity, y, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(20px,4vw,72px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(32px,5vw,64px)', width: '100%', maxWidth: 1100, alignItems: 'center' }}>

        {/* text */}
        <motion.div style={{ x: xIn, order: isLeft ? 0 : 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: 'var(--blue)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '1.5px', boxShadow: '2px 2px 0 var(--ink)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--blue)', borderRadius: '50%' }} />
            {feature.num} / {feature.tag}
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,76px)', lineHeight: 0.97, letterSpacing: -2, color: 'var(--ink)', marginBottom: 20 }}>
            {feature.title}{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>{feature.em}</em>
          </h3>

          <p style={{ fontSize: 'clamp(15px,1.1vw,18px)', lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 440, marginBottom: 28 }}>
            {feature.text}
          </p>

          <a
            href="#kontakt"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 22px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1.5px solid var(--ink)', background: 'var(--paper)', color: 'var(--ink)', boxShadow: '4px 4px 0 var(--ink)', transition: 'transform 0.15s, box-shadow 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)' }}
          >
            Chcem takú stránku
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>
          </a>
        </motion.div>

        {/* visual card */}
        <motion.div style={{ x: xCard, order: isLeft ? 1 : 0 }}>
          <div style={{ background: feature.gradient, border: '2px solid var(--ink)', borderRadius: 'var(--r-lg)', boxShadow: '10px 10px 0 var(--ink)', padding: 'clamp(32px,4vw,52px)', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 20 }}>{feature.num} / {feature.tag}</div>
              <div style={{ fontSize: 'clamp(52px,7vw,90px)', lineHeight: 1, color: 'rgba(255,255,255,0.85)' }}>◈</div>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(20px,2.5vw,30px)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.1 }}>
                {feature.title} <em style={{ opacity: 0.75 }}>{feature.em}</em>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: -24, right: -24, width: 110, height: 110, background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ─── Progress dots ─── */
function DotIndicator({ index, scrollYProgress }: { index: number; scrollYProgress: MotionValue<number> }) {
  const start = index / TOTAL
  const end   = (index + 1) / TOTAL
  const scale  = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0.6, 1.5, 0.6])
  const bg     = useTransform(scrollYProgress, [start, (start + end) / 2, end], ['rgba(27,72,232,0.25)', 'rgba(27,72,232,1)', 'rgba(27,72,232,0.25)'])
  return <motion.div style={{ width: 7, height: 7, borderRadius: '50%', background: bg, scale }} />
}

/* ─── Main export ─── */
export default function ScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="vyhody" style={{ position: 'relative', zIndex: 2 }}>
      {/* scroll container = intro + 6 features */}
      <div ref={containerRef} style={{ height: `${TOTAL * 100}vh` }}>
        <div
          className="scroll-features-sticky"
          style={{ background: 'transparent' }}
        >
          {/* progress dots */}
          <div style={{ position: 'absolute', right: 'clamp(14px,2.5vw,28px)', top: '50%', transform: 'translateY(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 9 }}>
            {Array.from({ length: TOTAL }, (_, i) => (
              <DotIndicator key={i} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          {/* intro slide */}
          <IntroSlide scrollYProgress={scrollYProgress} />

          {/* feature slides */}
          {features.map((f, i) => (
            <FeatureSlide key={f.num} feature={f} featureIndex={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}
