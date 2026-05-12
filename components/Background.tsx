'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Background() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* editorial grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right,rgba(12,18,32,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(12,18,32,0.05) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center,black 30%,transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center,black 30%,transparent 80%)',
          }}
        />

        {/* violet orb — top right */}
        <motion.div
          style={{ y: y1, position: 'absolute', top: -200, right: -150 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div
            className="orb-1"
            style={{
              width: 640,
              height: 640,
              background: '#5B21B6',
              borderRadius: '50%',
              filter: 'blur(100px)',
              opacity: 0.28,
            }}
          />
        </motion.div>

        {/* cyan orb — bottom left */}
        <motion.div
          style={{ y: y2, position: 'absolute', bottom: -100, left: -120 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <div
            className="orb-2"
            style={{
              width: 520,
              height: 520,
              background: '#06B6D4',
              borderRadius: '50%',
              filter: 'blur(100px)',
              opacity: 0.18,
            }}
          />
        </motion.div>

        {/* amber orb — center */}
        <motion.div
          style={{ y: y3, position: 'absolute', top: '42%', left: '40%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <div
            className="orb-3"
            style={{
              width: 380,
              height: 380,
              background: '#B45309',
              borderRadius: '50%',
              filter: 'blur(90px)',
              opacity: 0.12,
            }}
          />
        </motion.div>
      </div>

      <div className="grain" aria-hidden="true" />
    </>
  )
}
