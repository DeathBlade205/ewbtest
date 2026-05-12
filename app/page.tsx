'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const SECTIONS = [
  { num: '01', title: 'Background',          href: '/background' },
  { num: '02', title: 'Problem Description', href: '/problem' },
  { num: '03', title: 'Design Options',      href: '/design-options' },
  { num: '04', title: 'Design Selection',    href: '/design-selection' },
  { num: '05', title: 'Detailed Design',     href: '/detailed-design' },
  { num: '06', title: 'Prototyping',         href: '/prototyping' },
  { num: '07', title: 'Implementation',      href: '/implementation' },
  { num: '08', title: 'Cost Analysis',       href: '/cost-analysis' },
  { num: '09', title: 'Other Considerations',href: '/other-considerations' },
  { num: '10', title: 'Recommendations',     href: '/recommendations' },
]

export default function ExecutiveSummary() {
  return (
    <div>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden px-8 pt-16 pb-20 md:px-16"
        style={{ background: 'var(--forest)' }}
      >
        {/* Orbs */}
        <motion.div
          className="orb"
          style={{ width: 500, height: 500, background: 'rgba(46,125,82,0.3)', top: -250, right: -100 }}
          animate={{ x: [0, -28, 0], y: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb"
          style={{ width: 300, height: 300, background: 'rgba(74,222,128,0.1)', bottom: -100, left: 60 }}
          animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.div
          className="orb"
          style={{ width: 180, height: 180, background: 'rgba(61,168,112,0.15)', top: 40, left: '40%' }}
          animate={{ x: [0, 14, 0], y: [0, 22, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Background text */}
        <div
          className="absolute right-6 bottom-4 font-black select-none pointer-events-none"
          style={{ fontSize: 'clamp(60px, 18vw, 200px)', lineHeight: 1, color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em' }}
        >
          EWB
        </div>

        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-2 mb-5"
          >
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
              style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.25)', color: 'rgba(74,222,128,0.85)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Assessment Task 3
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.03em' }}
          >
            Microgrids &<br />
            <span style={{ color: 'rgba(74,222,128,0.85)' }}>Hybrid Systems</span><br />
            <span style={{ color: 'rgba(200,230,215,0.6)', fontSize: '0.55em', fontWeight: 400, letterSpacing: '-0.01em' }}>
              for Lama Lama Outstations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm leading-relaxed max-w-md"
            style={{ color: 'rgba(200,230,215,0.6)' }}
          >
            31265 Computing and Information Technology Practice · One Prompt Wonders
          </motion.p>
        </div>
      </div>

      {/* ── Summary content ── */}
      <div className="px-8 md:px-16 py-12 max-w-3xl">

        <ScrollReveal>
          <div className="prose">
            <p>
              This report presents the findings and design recommendation of One Prompt Wonders for the
              Engineers Without Borders (EWB) Challenge 2025, focused on the Lama Lama community of Cape York
              Peninsula, Queensland. The project addresses a persistent and critical energy access problem:
              the outstations of Lama Lama Country are entirely dependent on diesel-powered generation,
              leaving communities vulnerable to supply disruption during the wet season when road access
              is cut off for months at a time.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stats */}
        <ScrollReveal delay={0.08}>
          <div className="grid grid-cols-3 gap-3 my-10">
            {[
              { val: '$80K–120K', label: 'Installation estimate' },
              { val: '5 Years',   label: 'Diesel transition' },
              { val: '3 Days',    label: 'Battery autonomy' },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="rounded-lg p-4 text-center"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
              >
                <p className="font-black text-xl leading-none mb-1" style={{ color: 'var(--pine)' }}>{val}</p>
                <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="prose">
            <p>
              The recommended design is a <strong>distributed hybrid microgrid</strong>: rooftop solar panels
              (0.5–1.5 kW) on existing buildings feeding a shared 20–30 kWh lithium iron phosphate battery
              bank. The existing diesel generator is retained as an automatic fallback below 20% battery
              charge. A traffic-light monitoring display makes system status readable by any community member
              without technical training.
            </p>
            <p>
              Implementation follows a staged five-year transition, with funding achievable through ARENA's
              Remote and Off-Grid Communities program ($40,000–$60,000) and the Queensland Government's
              First Nations Clean Energy Strategy. Based on Bushlight community data, cost recovery
              is estimated within 15–20 years.
            </p>
          </div>
        </ScrollReveal>

        {/* Design criteria met */}
        <ScrollReveal delay={0.12}>
          <div className="mt-10 mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--ink-faint)' }}>
              Three criteria — all satisfied simultaneously
            </p>
            <div className="flex flex-col gap-2">
              {[
                { n: '1', title: 'Reduce Diesel Dependence', body: 'Staged 5-year transition moves diesel from primary source to emergency-only backup.' },
                { n: '2', title: 'Essential Service Reliability', body: '3-day battery autonomy covers wet season cloud cover. Lighting, refrigeration, and comms remain online.' },
                { n: '3', title: 'Community-Appropriate', body: 'Governance with Yintjingga Aboriginal Corporation. Bushlight training model. Modular and locally manageable.' },
              ].map(({ n, title, body }) => (
                <div
                  key={n}
                  className="flex gap-4 rounded-lg p-4"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5"
                    style={{ background: 'var(--pine)', color: 'rgba(74,222,128,0.9)' }}
                  >
                    {n}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{title}</p>
                    <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Section index grid */}
        <ScrollReveal delay={0.14}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--ink-faint)' }}>
            Report sections
          </p>
          <div className="grid grid-cols-2 gap-2">
            {SECTIONS.map(({ num, title, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-md px-4 py-3 group transition-all"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
              >
                <span
                  className="text-[0.6rem] font-black tabular-nums w-5 shrink-0"
                  style={{ color: 'var(--moss)' }}
                >
                  {num}
                </span>
                <span
                  className="text-xs font-medium leading-tight"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  {title}
                </span>
                <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--moss)' }} />
                </svg>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
