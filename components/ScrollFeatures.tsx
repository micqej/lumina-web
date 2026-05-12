'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const features = [
  {
    num: '01', tag: 'SPEED',
    title: 'Rýchlosť, ktorá', em: 'uchváti',
    text: 'Stránka sa načíta za zlomok sekundy. Vaši klienti nečakajú — a Google to ocení v rankingu. PageSpeed 95+ nie je výnimka, je to štandard.',
    icon: '⚡',
    gradient: 'linear-gradient(135deg,#1e1b4b,#3730a3)',
  },
  {
    num: '02', tag: 'DESIGN',
    title: 'Dizajn, ktorý', em: 'chytí',
    text: 'Žiadne unavené šablóny. Každá stránka vyzerá tak, aby ste ju chceli okamžite poslať klientovi alebo partnerovi. Dizajn na mieru, nie z katalógu.',
    icon: '◈',
    gradient: 'linear-gradient(135deg,#4c1d95,#6d28d9)',
  },
  {
    num: '03', tag: 'CARE',
    title: 'Rok úprav', em: 'zdarma',
    text: 'Do 30 minút mesačne stojím za vami. Text, fotka, kontakt — proste napíšete a ja to spravím. Bez čakaní, bez faktúr, bez vysvetľovania.',
    icon: '✦',
    gradient: 'linear-gradient(135deg,#164e63,#0e7490)',
  },
  {
    num: '04', tag: 'DELIVERY',
    title: 'Hotovo do', em: '14 dní',
    text: 'Reálny termín, reálne dodanie. Žiadne ťahanie sa pol roka ako u veľkých agentúr. Podpisujeme a dodávam — to je záväzok.',
    icon: '◷',
    gradient: 'linear-gradient(135deg,#14532d,#15803d)',
  },
  {
    num: '05', tag: 'PRICING',
    title: 'Cena podľa', em: 'rozsahu',
    text: 'Platíte len za to, čo skutočne potrebujete. Žiadne skryté poplatky ani prekvapenia v záverečnej faktúre. Cenová ponuka vždy pred začatím.',
    icon: '◎',
    gradient: 'linear-gradient(135deg,#7c2d12,#b45309)',
  },
  {
    num: '06', tag: 'SEO',
    title: 'SEO základ', em: 'v cene',
    text: 'Technický základ pre Google, správna štruktúra, rýchlosť, meta — všetko v cene, žiaden upsell. Vaša stránka sa nájde, keď treba.',
    icon: '⊕',
    gradient: 'linear-gradient(135deg,#1e3a5f,#1d4ed8)',
  },
]

function FeatureSlide({
  feature,
  index,
  total,
  scrollYProgress,
}: {
  feature: typeof features[0]
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total
  const mid = (start + end) / 2

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, mid, end - 0.05, end],
    [0, 1, 1, 0.85, 0]
  )
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.93, 1, 1, 0.95]
  )
  const xText = useTransform(
    scrollYProgress,
    [start, start + 0.12],
    [index % 2 === 0 ? -60 : 60, 0]
  )
  const xCard = useTransform(
    scrollYProgress,
    [start, start + 0.12],
    [index % 2 === 0 ? 50 : -50, 0]
  )
  const isLeft = index % 2 === 0

  return (
    <motion.div
      style={{ opacity, scale, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(20px,4vw,80px)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
          gap: 'clamp(32px,5vw,72px)',
          width: '100%',
          maxWidth: 1100,
          alignItems: 'center',
        }}
      >
        {/* text block */}
        <motion.div
          style={{ x: xText, order: isLeft ? 0 : 1 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--violet)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            <span style={{ width: 7, height: 7, background: 'var(--violet)', borderRadius: '50%' }} />
            {feature.num} / {feature.tag}
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(38px,5vw,72px)', lineHeight: 1, letterSpacing: -2, color: 'var(--ink)', marginBottom: 20 }}>
            {feature.title}{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>{feature.em}</em>
          </h3>

          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 460 }}>
            {feature.text}
          </p>

          <a
            href="#kontakt"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 32, padding: '14px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid var(--ink)', background: 'var(--paper)', color: 'var(--ink)', boxShadow: '4px 4px 0 var(--ink)', transition: 'transform 0.15s,box-shadow 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)' }}
          >
            Chcem takú stránku
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9h12M11 4l5 5-5 5"/></svg>
          </a>
        </motion.div>

        {/* visual card */}
        <motion.div style={{ x: xCard, order: isLeft ? 1 : 0 }}>
          <div
            style={{
              background: feature.gradient,
              border: '2px solid var(--ink)',
              borderRadius: 'var(--r-lg)',
              boxShadow: '10px 10px 0 var(--ink)',
              padding: 'clamp(28px,4vw,48px)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* decorative grid */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 24 }}>
                {feature.num} / {feature.tag}
              </div>
              <div style={{ fontSize: 'clamp(56px,8vw,100px)', lineHeight: 1, color: 'rgba(255,255,255,0.9)' }}>
                {feature.icon}
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,34px)', color: 'rgba(255,255,255,0.95)', lineHeight: 1.1 }}>
                {feature.title} <em style={{ opacity: 0.8 }}>{feature.em}</em>
              </div>
            </div>

            {/* bottom right decoration */}
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 120, height: 120, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const total = features.length

  return (
    <section id="vyhody" style={{ position: 'relative', zIndex: 2 }}>
      {/* section header */}
      <div style={{ padding: 'clamp(60px,8vh,100px) clamp(20px,4vw,48px) 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 13px', background: 'var(--paper)', border: '1.5px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--ink)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1.5px' }}
        >
          <span style={{ width: 7, height: 7, background: 'var(--violet)', borderRadius: '50%' }} />
          Prečo Lumina — 02
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px,5.5vw,78px)', lineHeight: 1, letterSpacing: -2, color: 'var(--ink)', marginBottom: 16 }}
        >
          Šesť dôvodov,<br />
          prečo to <em style={{ fontStyle: 'italic', color: 'var(--violet-2)' }}>funguje</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 560, lineHeight: 1.65, marginBottom: 24 }}
        >
          Nie som agentúra s dvadsiatimi zamestnancami a polročnými termínmi. Som jeden chlap, ktorý vie čo robí — a robí to poriadne.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          Scrolluj pre každý dôvod
        </motion.p>
      </div>

      {/* scroll container */}
      <div ref={containerRef} style={{ height: `${total * 100}vh` }}>
        <div className="scroll-features-sticky" style={{ background: 'var(--bg)', borderTop: '1.5px solid var(--line)' }}>
          {/* progress indicator */}
          <ProgressDots scrollYProgress={scrollYProgress} total={total} />

          {features.map((f, i) => (
            <FeatureSlide
              key={f.num}
              feature={f}
              index={i}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgressDots({ scrollYProgress, total }: { scrollYProgress: MotionValue<number>; total: number }) {
  return (
    <div style={{ position: 'absolute', right: 'clamp(16px,3vw,32px)', top: '50%', transform: 'translateY(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {Array.from({ length: total }, (_, i) => (
        <DotIndicator key={i} index={i} total={total} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}

function DotIndicator({ index, total, scrollYProgress }: { index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const start = index / total
  const end = (index + 1) / total
  const scale = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0.6, 1.4, 0.6])
  const bg = useTransform(scrollYProgress, [start, (start + end) / 2, end], ['rgba(91,33,182,0.3)', 'rgba(91,33,182,1)', 'rgba(91,33,182,0.3)'])

  return (
    <motion.div style={{ width: 8, height: 8, borderRadius: '50%', background: bg, scale, border: '1px solid rgba(91,33,182,0.4)' }} />
  )
}
