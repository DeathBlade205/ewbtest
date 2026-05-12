import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function DesignOptions() {
  return (
    <div>
      <SectionHero num="03" title="Design Options" subtitle="Three distinct system architectures evaluated against the needs of Lama Lama Country." />
      <div className="px-8 md:px-16 py-12 max-w-3xl prose">
        <ScrollReveal><p>Three distinct design approaches were developed and evaluated against the criteria established in Section 2. Each represents a meaningfully different system architecture with different trade-offs across viability, cost, community-appropriateness, and EWB alignment.</p></ScrollReveal>
        <ScrollReveal delay={0.06}><h3>Idea A — Centralised Solar Farm</h3><p>A centralised, ground-mounted solar PV farm located at a single point on the outstation, feeding into a shared battery bank that distributes power across all buildings via a microgrid. The primary disqualifying issue for the Lama Lama context is land clearing — ground-mounting requires removal of vegetation, which directly conflicts with the community's custodial relationship with Country. Additionally, a centralised installation creates a single point of failure: any fault in the central array removes power from the entire outstation (Roy &amp; Pearce, 2024).</p></ScrollReveal>
        <ScrollReveal delay={0.08}><h3>Idea B — Distributed Rooftop Solar (Proposed Solution)</h3><p>Rooftop PV panels distributed across existing buildings (ranger base 1.5 kW, communal kitchen 1.0 kW, dwellings 0.5 kW), feeding into a shared 20–30 kWh LFP battery bank and hybrid inverter hub. The existing diesel generator is retained as automatic fallback below 20% battery charge. Micro-inverters at each building handle shading and soiling independently. No land clearing required. The architecture is modular — adding capacity means adding panels and battery modules without redesigning the core system. The Bushlight-proven training model confirms local maintainability at comparable remote sites (Centre for Appropriate Technology, n.d.).</p></ScrollReveal>
        <ScrollReveal delay={0.1}><h3>Idea C — Per-Building Standalone System</h3><p>Fully independent solar-plus-battery systems at each building, with no shared infrastructure and no diesel component. The critical failure is the absence of any fallback during extended cloud cover — without shared storage or diesel, safety-critical services become vulnerable to outage during precisely the period of greatest need. Maintaining independent systems across multiple isolated buildings also exceeds realistic community management capacity, multiplying fault points without the benefit of centralised oversight (Centre for Appropriate Technology, n.d.).</p></ScrollReveal>
      </div>
    </div>
  )
}
