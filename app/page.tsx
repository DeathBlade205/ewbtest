'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const SECTIONS = [
  { num: '01', title: 'Background',            href: '/background' },
  { num: '02', title: 'Problem Description',   href: '/problem' },
  { num: '03', title: 'Design Options',        href: '/design-options' },
  { num: '04', title: 'Design Selection',      href: '/design-selection' },
  { num: '05', title: 'Detailed Design',       href: '/detailed-design' },
  { num: '06', title: 'Prototyping',           href: '/prototyping' },
  { num: '07', title: 'Implementation',        href: '/implementation' },
  { num: '08', title: 'Cost Analysis',         href: '/cost-analysis' },
  { num: '09', title: 'Other Considerations',  href: '/other-considerations' },
  { num: '10', title: 'Recommendations',       href: '/recommendations' },
]

const KEYWORDS = [
  'Renewable Energy', 'Microgrids', 'Hybrid Systems', 'Remote Communities',
  'Cape York Peninsula', 'Indigenous Self-Determination', 'Solar PV',
  'Battery Storage', 'Diesel Transition', 'Lama Lama',
]

export default function ExecutiveSummary() {
  return (
    <div>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden px-8 pt-16 pb-20 md:px-16"
        style={{ background: 'var(--forest)' }}
      >
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
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
              Executive Summary
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', letterSpacing: '-0.03em' }}
          >
            Microgrids &amp;<br />
            <span style={{ color: 'rgba(74,222,128,0.85)' }}>Hybrid Systems</span><br />
            <span style={{ color: 'rgba(200,230,215,0.6)', fontSize: '0.55em', fontWeight: 400, letterSpacing: '-0.01em' }}>
              for Lama Lama Outstations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-sm leading-relaxed mb-5 max-w-md"
            style={{ color: 'rgba(200,230,215,0.6)' }}
          >
            A distributed hybrid microgrid proposal for the Lama Lama outstations of Cape York Peninsula — reducing diesel dependence while building genuine community energy self-determination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 text-xs"
          >
            {[
              { label: 'Design Area', value: '3 — Energy' },
              { label: 'Project Opportunity', value: '3.2 Microgrids & Hybrid Systems' },
              { label: 'Group', value: 'One Prompt Wonders · Tutorial 1 · Group 5' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="px-3 py-1.5 rounded-md"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span style={{ color: 'rgba(74,222,128,0.6)' }}>{label}: </span>
                <span style={{ color: 'rgba(255,255,255,0.75)' }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-8 md:px-16 py-12 max-w-3xl">

        {/* Keywords */}
        <ScrollReveal>
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--ink-faint)' }}>Keywords</p>
            <div className="flex flex-wrap gap-2">
              {KEYWORDS.map(kw => (
                <span
                  key={kw}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--ink-muted)' }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Proposal Summary */}
        <ScrollReveal delay={0.05}>
          <div className="prose mb-10">
            <h3>Proposal Summary</h3>
            <p>
              This project addresses the critical energy access failure facing Lama Lama outstations on Cape York Peninsula, where complete reliance on diesel generation leaves the community without power, refrigeration, or radio communications whenever wet season road access is cut. The project aims to eliminate this structural vulnerability through a distributed hybrid microgrid — rooftop solar panels paired with a shared lithium iron phosphate battery bank — transitioning diesel from a primary source to an emergency-only fallback over five years. The recommended design scored 72 in the group's decision matrix, against 36 and 32 for the two alternatives, as the only option that simultaneously satisfies all three design criteria.
            </p>
          </div>
        </ScrollReveal>

        {/* Overview of Design */}
        <ScrollReveal delay={0.08}>
          <div className="prose mb-10">
            <h3>Overview of Design</h3>
            <p>
              The distributed hybrid microgrid achieves reliable, renewable-primary energy supply by combining rooftop photovoltaic panels (0.5–1.5 kW per building) on existing structures with a centralised 20–30 kWh lithium iron phosphate battery bank, managed through a hybrid inverter hub that automatically coordinates solar input, battery storage, and diesel backup. The existing diesel generator is retained as an automatic fallback triggered only when battery charge drops below 20%, providing seamless continuity without requiring manual intervention. A traffic-light monitoring display — red, amber, green — makes system state legible to any community member regardless of technical background.
            </p>
            <p>The design includes the following physical components:</p>
            <ul>
              <li>Rooftop PV panels on the ranger base, communal kitchen, and residential dwellings</li>
              <li>20–30 kWh LFP battery bank (flood-safe central installation)</li>
              <li>Hybrid inverter hub managing PV, battery, diesel, and AC output</li>
              <li>Traffic-light charge-state monitoring display</li>
              <li>Wiring, distribution board, and surge protection</li>
            </ul>
            <p>
              The system is used and managed by trained Lama Lama Land and Sea Rangers, with governance held by the Yintjingga Aboriginal Corporation. The Centre for Appropriate Technology (CfAT) provides initial Bushlight-model training and ongoing remote technical support.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stats */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 gap-3 mb-10">
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

        {/* Key Considerations */}
        <ScrollReveal delay={0.12}>
          <div className="prose mb-10">
            <h3>Key Considerations</h3>
            <ul>
              <li><strong>Material sourcing:</strong> All panels, batteries, and inverter hardware are sourced externally from major urban centres and transported by light aircraft, barge, or 4WD. No components are locally available on Cape York Peninsula.</li>
              <li><strong>Maintenance requirements:</strong> Routine maintenance — panel cleaning, battery state-of-charge monitoring — is managed by trained rangers. Modular LFP battery replacement requires no specialist; CfAT provides remote technical support for faults beyond ranger capability.</li>
              <li><strong>Implementation pathway:</strong> A five-year staged diesel transition begins at the ranger base (Phase 1), expands to communal kitchen and dwellings (Phase 2), and reaches full battery autonomy with diesel in emergency-only status by Year 5. No phase begins without Yintjingga Aboriginal Corporation sign-off.</li>
              <li><strong>Further consultation required:</strong> Final panel placement and battery building location must be approved by the Yintjingga Aboriginal Corporation and relevant Elders before any construction activity. Community co-design of the traffic-light interface is recommended prior to Phase 1 installation.</li>
              <li><strong>Key assumptions:</strong> Solar generation is modelled on Bureau of Meteorology data for Cape Flattery. Wet season cloud cover is treated as the design-limiting condition for battery autonomy sizing. Diesel generator is assumed to be functional and retained as fallback.</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Proposed Materials and Cost Summary */}
        <ScrollReveal delay={0.14}>
          <div className="prose mb-12">
            <h3>Proposed Materials and Cost Summary</h3>
            <p><strong>Purchased Materials:</strong> Rooftop PV panels, LFP battery modules, hybrid inverter hub, traffic-light monitoring display, wiring and distribution hardware, cyclone-rated mounting brackets.</p>
            <p><strong>Other Materials / Labour:</strong> Licensed electrician (including remote site travel), CfAT Bushlight training program, transport by air freight and barge, 10% contingency buffer for remote deployment.</p>
            <p><strong>Estimated Total Cost (AUD):</strong> $80,000–$120,000</p>
            <p><strong>Funding pathway:</strong> ARENA Remote and Off-Grid Communities Program ($40,000–$60,000 grant, up to 50% of eligible costs) combined with Queensland Government First Nations Clean Energy Strategy funding. Bushlight community data indicates cost recovery within 15–20 years through diesel savings of approximately $5,500 per household per year.</p>
          </div>
        </ScrollReveal>

        {/* Section index grid */}
        <ScrollReveal delay={0.16}>
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
                <span className="text-xs font-medium leading-tight" style={{ color: 'var(--ink-muted)' }}>
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
