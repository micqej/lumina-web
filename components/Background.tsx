'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Background() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* subtle dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(12,18,32,0.07) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
          }}
        />

        {/* blue orb — top right */}
        <motion.div
          style={{ y: y1, position: 'absolute', top: -180, right: -160 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div style={{ width: 680, height: 680, background: '#1B48E8', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.12 }} />
        </motion.div>

        {/* indigo orb — bottom left */}
        <motion.div
          style={{ y: y2, position: 'absolute', bottom: -80, left: -100 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <div style={{ width: 560, height: 560, background: '#4169E1', borderRadius: '50%', filter: 'blur(110px)', opacity: 0.1 }} />
        </motion.div>

        {/* amber orb — center */}
        <motion.div
          style={{ y: y3, position: 'absolute', top: '38%', left: '35%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <div style={{ width: 400, height: 400, background: '#C47F17', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.07 }} />
        </motion.div>
      </div>

      <div className="grain" aria-hidden="true" />
    </>
  )
}
