'use client'

import { motion } from 'framer-motion'

interface Props {
  num?: string
  label?: string
  title: string
  subtitle?: string
}

export default function SectionHero({ num, label, title, subtitle }: Props) {
  return (
    <div
      className="relative overflow-hidden px-8 pt-14 pb-12 md:px-16"
      style={{
        background: 'var(--forest)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Background orbs */}
      <motion.div
        className="orb"
        style={{ width: 380, height: 380, background: 'rgba(46,125,82,0.28)', top: -180, right: -80 }}
        animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb"
        style={{ width: 200, height: 200, background: 'rgba(74,222,128,0.1)', bottom: -80, left: 80 }}
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Huge background section number */}
      {num && (
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none"
          style={{
            fontSize: 'clamp(80px, 14vw, 160px)',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-0.04em',
          }}
        >
          {num}
        </div>
      )}

      <div className="relative z-10 max-w-2xl">
        {(label || num) && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xs font-semibold uppercase tracking-[0.22em] mb-3"
            style={{ color: 'rgba(74,222,128,0.75)' }}
          >
            {num ? `Section ${num}` : ''}{num && label ? ' · ' : ''}{label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-black leading-tight text-white"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-0.02em' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="mt-3 text-sm leading-relaxed max-w-lg"
            style={{ color: 'rgba(200,230,215,0.65)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
