'use client'

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

export default function ExecutiveSummary() {
  return (
    <div>
      {/* ── Landscape hero ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(175deg, #c27a08 0%, #e8a520 55%, #d48f10 100%)' }} />
        <div className="absolute rounded-full" style={{ width: 160, height: 160, top: -40, right: 80, background: 'rgba(255,255,255,0.18)' }} />
        <div className="absolute rounded-full" style={{ width: 90, height: 90, top: 4, right: 125, background: 'rgba(255,255,255,0.28)' }} />
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 90" preserveAspectRatio="none" fill="var(--forest)">
          <path d="M0 90 L0 60 Q40 45 80 58 Q100 42 120 55 Q140 38 160 54 Q185 46 210 58 Q240 40 270 55 Q295 44 320 57 Q345 38 375 54 Q400 48 425 60 Q450 40 480 54 Q510 44 535 58 Q560 36 590 52 Q620 46 645 60 Q670 38 700 54 Q730 44 755 58 Q780 36 810 54 Q840 48 865 60 Q890 40 920 55 Q950 44 975 58 Q1000 36 1030 52 Q1060 46 1090 60 Q1110 42 1140 56 Q1160 44 1200 58 L1200 90 Z" />
        </svg>
        <div className="relative z-10 px-8 md:px-14 pt-10 pb-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] mb-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Executive Summary · EWB Challenge 2025
          </p>
          <h1 className="font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(26px, 4.5vw, 54px)', letterSpacing: '-0.03em' }}>
            Powering Country
          </h1>
          <p className="font-semibold text-white mb-3" style={{ fontSize: 'clamp(14px, 2vw, 20px)', opacity: 0.85 }}>
            A Distributed Hybrid Microgrid for Lama Lama Outstations
          </p>
          <p className="text-sm max-w-lg mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
            A modular, community-governed solar-battery-diesel hybrid energy system for remote ranger bases and outstations on Lama Lama Country, Cape York Peninsula.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { label: 'Design Area', value: '3.3 — Energy' },
              { label: 'Project Opportunity', value: '3.2 Microgrids & Hybrid Systems' },
              { label: 'Tutorial', value: 'Tutorial 5 — Mohammed Kassira' },
              { label: 'Group', value: 'One Prompt Wonders' },
            ].map(({ label, value }) => (
              <div key={label} className="px-3 py-1.5 rounded" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}>
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{label}: </span>{value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ background: '#ffffff' }}>
        <div className="px-8 md:px-14 py-12 max-w-3xl">

          <ScrollReveal>
            <div className="rounded-lg p-4 mb-8 text-sm" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderLeft: '3px solid var(--moss)' }}>
              <span className="font-semibold" style={{ color: 'var(--pine)' }}>How Might We: </span>
              <span style={{ color: 'var(--ink-muted)' }}>How might we provide reliable, culturally appropriate, and community-governed energy for Lama Lama outstations so that Rangers and Elders can maintain safety-critical services and self-determination on Country?</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.04}>
            <h2 className="font-black mb-3" style={{ fontSize: '1.4rem', color: 'var(--forest)', letterSpacing: '-0.02em' }}>Proposal Summary</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--ink-muted)' }}>
              The project aims to eliminate the Lama Lama outstations' dependence on diesel generators through a distributed hybrid microgrid combining rooftop solar panels, a shared battery bank, a hybrid inverter hub, and an automatically activated diesel fallback. The system is designed to be expanded, repaired, and governed entirely by the Yintjingga Aboriginal Corporation (YAC) and the Lama Lama community, achieving energy sovereignty alongside energy security. A five-year staged diesel transition ensures the community is never left exposed to any risks during implementation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { val: '$62,300–$94,100', label: 'Phase 1 install (before grants)' },
                { val: '$5,300–$27,100', label: 'Net outlay after grants' },
                { val: '3 Days', label: 'Battery autonomy' },
              ].map(({ val, label }) => (
                <div key={label} className="rounded-lg p-4 text-center" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <p className="font-black text-base leading-snug mb-1" style={{ color: 'var(--pine)' }}>{val}</p>
                  <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="font-black mb-3" style={{ fontSize: '1.4rem', color: 'var(--forest)', letterSpacing: '-0.02em' }}>Overview of Design</h2>
            <ul className="text-sm space-y-2 mb-8" style={{ listStyle: 'none', padding: 0 }}>
              {[
                'The distributed hybrid microgrid generates 0.5–1.5 kW per building via rooftop mounted PV panels on existing structures (ranger base, communal kitchen, dwellings), feeding a shared 20 kWh LiFePO4 battery bank and hybrid inverter hub.',
                'The existing diesel generator is retained as an automatic fallback, activating only when battery charge drops below 20%, and is progressively decommissioned over five years as battery capacity grows.',
                'A traffic light monitoring display (green > 50%, yellow 20–50%, red < 20%) at a central point provides accessible real-time system status without requiring technical literacy.',
                'Physical components include: monocrystalline PV panels, lithium iron phosphate battery modules, hybrid inverter-charger, cyclone-rated rooftop mounting frames, marine-grade cabling and conduit, thermally ventilated battery enclosure, and a monitoring display unit.',
                'The Yintjingga Aboriginal Corporation (YAC) and Lama Lama Rangers are the primary operators and owners; a Bushlight-modelled training program builds local maintenance capacity from Phase 1.',
                'Governance remains with YAC at every stage; rooftop-only mounting avoids land clearance, respecting the community\'s custodial responsibility to Country.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2" style={{ color: 'var(--ink-muted)' }}>
                  <span style={{ color: 'var(--moss)', fontWeight: 700, marginTop: 2, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-black mb-3" style={{ fontSize: '1.4rem', color: 'var(--forest)', letterSpacing: '-0.02em' }}>Key Considerations</h2>
            <ul className="text-sm space-y-2 mb-8" style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Materials must be sourced for delivery by light aircraft, barge, or 4WD during the dry season; lightweight and modular packaging is essential.',
                'All structural components must be cyclone rated (minimum Category 4) and constructed from marine grade or UV-stabilised materials to withstand Lama Lama Country\'s tropical environment.',
                'Battery sizing must incorporate a minimum 20% derating factor to account for PV output losses from high ambient temperatures (Skoplaki & Palyvos, 2009).',
                'The Bushlight modelled training program must be co-designed with YAC before installation commences to ensure genuine local capability.',
                'ARENA\'s Remote and Off-Grid Communities grant program and the Queensland Government\'s First Nations Clean Energy Strategy offer combined grant potential of $41,000–$67,000.',
                'Further community consultation is required to confirm building layouts, culturally significant site restrictions, and occupancy demand profiles before finalising panel placement.',
                'End-of-life battery disposal must be planned through a certified recycler and written into the YAC governance framework at project outset.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2" style={{ color: 'var(--ink-muted)' }}>
                  <span style={{ color: 'var(--moss)', fontWeight: 700, marginTop: 2, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h2 className="font-black mb-3" style={{ fontSize: '1.4rem', color: 'var(--forest)', letterSpacing: '-0.02em' }}>Proposed Materials and Cost Summary</h2>
            <div className="text-sm mb-10 space-y-1" style={{ color: 'var(--ink-muted)' }}>
              <p><strong style={{ color: 'var(--ink)' }}>Purchased materials:</strong> 12 × 400 W monocrystalline PV panels; 20 kWh LiFePO4 battery system; 5 kW hybrid inverter-charger; cyclone-rated mounting hardware; traffic-light monitoring unit; marine-grade cabling and conduit; ventilated battery enclosure.</p>
              <p><strong style={{ color: 'var(--ink)' }}>Other materials/services:</strong> Certified electrical installation labour; light aircraft/barge/4WD freight; Bushlight-model training program.</p>
              <p><strong style={{ color: 'var(--ink)' }}>Estimated total installation cost (Phase 1, 4–6 buildings):</strong> AUD $62,300–$94,100 before grants.</p>
              <p><strong style={{ color: 'var(--ink)' }}>Estimated net community outlay after available grants:</strong> AUD $5,300–$27,100.</p>
              <p><strong style={{ color: 'var(--ink)' }}>Estimated long-term savings:</strong> ~AUD $5,500 per household per year over diesel (Independent Australia, 2025).</p>
              <p>Full Bill of Materials with sourced pricing is provided in the Cost Analysis section.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <h2 className="font-black mb-4" style={{ fontSize: '1.4rem', color: 'var(--forest)', letterSpacing: '-0.02em' }}>Report Sections</h2>
            <div className="grid grid-cols-2 gap-2">
              {SECTIONS.map(({ num, title, href }) => (
                <Link key={href} href={href} className="flex items-center gap-3 rounded-md px-4 py-3 group transition-colors" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <span className="text-[0.6rem] font-black tabular-nums w-5 shrink-0" style={{ color: 'var(--moss)' }}>{num}</span>
                  <span className="text-xs font-medium leading-tight" style={{ color: 'var(--ink-muted)' }}>{title}</span>
                  <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="var(--moss)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
