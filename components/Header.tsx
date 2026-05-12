'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header
      className="relative overflow-hidden sticky top-0 z-50"
      style={{ background: 'var(--forest)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Abstract floating orbs */}
      <motion.div
        className="orb"
        style={{ width: 320, height: 320, background: 'rgba(46,125,82,0.35)', top: -160, left: -60 }}
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb"
        style={{ width: 200, height: 200, background: 'rgba(74,222,128,0.12)', top: -80, right: 120 }}
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="orb"
        style={{ width: 140, height: 140, background: 'rgba(61,168,112,0.18)', bottom: -70, right: 300 }}
        animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* Subtle diagonal grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Abstract logo mark */}
          <div className="relative w-8 h-8 flex-shrink-0">
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)' }}
            />
            <div
              className="absolute inset-[3px] rounded-full"
              style={{ background: 'linear-gradient(135deg, rgba(46,125,82,0.8), rgba(13,36,24,0.6))' }}
            />
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="5" stroke="rgba(74,222,128,0.9)" strokeWidth="1.2" fill="none" />
              <line x1="16" y1="6" x2="16" y2="11" stroke="rgba(74,222,128,0.5)" strokeWidth="1" />
              <line x1="16" y1="21" x2="16" y2="26" stroke="rgba(74,222,128,0.5)" strokeWidth="1" />
              <line x1="6" y1="16" x2="11" y2="16" stroke="rgba(74,222,128,0.5)" strokeWidth="1" />
              <line x1="21" y1="16" x2="26" y2="16" stroke="rgba(74,222,128,0.5)" strokeWidth="1" />
            </svg>
          </div>

          <div>
            <p className="text-white font-semibold text-sm leading-tight tracking-tight">
              Lama Lama Country
            </p>
            <p className="text-xs leading-tight" style={{ color: 'rgba(74,222,128,0.7)' }}>
              EWB Challenge 2025 · One Prompt Wonders
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden sm:flex items-center gap-2"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(46,125,82,0.25)',
              border: '1px solid rgba(46,125,82,0.4)',
              color: 'rgba(200,240,215,0.85)',
              letterSpacing: '0.06em',
            }}
          >
            31265 CITP · Task 3
          </span>
        </motion.div>
      </div>
    </header>
  )
}
