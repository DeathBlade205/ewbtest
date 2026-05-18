import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function DesignOptions() {
  return (
    <div>
      <SectionHero num="04" title="Design Solution Options" subtitle="Three distinct system architectures evaluated against the needs of Lama Lama Country." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>Three distinct design options were developed, all addressing the same core problem — replacing diesel as the primary energy source — but through fundamentally different architectures.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Design Option A: Centralised Ground-Mounted Solar Farm with Shared Battery</h3>
            <p>A single centralised ground-mounted PV array of approximately 5–8 kW, located adjacent to the ranger base, paired with a shared battery bank and connected to all outstation buildings via a buried distribution network. The centralised architecture simplifies maintenance but requires vegetation clearance and soil disturbance over approximately 30–50 square metres, directly conflicting with the community's custodial responsibilities to Country (EWB, 2025b; Lama Lama Aboriginal Corporation, 2024). A centralised array also creates a single point of failure — if the array or distribution cable is damaged by cyclone or flooding, the entire outstation loses power simultaneously. Flood-proofed foundations partially address wet season risk, but the land-clearance requirement is irresolvable against the design criteria.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Design Option B: Distributed Rooftop Solar with Shared Battery and Diesel Fallback <span style={{ fontWeight: 400, fontSize: '0.85em' }}>(Proposed Solution)</span></h3>
            <p>PV arrays of 0.5–1.5 kW are distributed across the rooftops of existing outstation buildings — the ranger base, communal kitchen, and dwellings — with a shared central LiFePO4 battery bank and hybrid inverter hub located in a ventilated enclosure adjacent to the ranger base, connected to each building via above-ground marine-grade cabling. The existing diesel generator is repositioned as automatic fallback, activating only when battery charge falls below 20%. A traffic-light monitoring display provides system-wide status visibility without technical training. This architecture is directly modelled on the Bushlight Project's distributed standalone system design, which demonstrated successful deployment across over 130 remote Indigenous homelands (Independent Australia, 2025). Rooftop mounting requires no land clearance and no soil disturbance. The modular architecture allows capacity to be added building-by-building, and the retained diesel generator ensures wet season cloud-cover periods never result in complete outage.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Design Option C: Fully Standalone Per-Building Solar and Battery with No Diesel</h3>
            <p>Each building operates its own independent solar-battery system with no interconnection and no diesel fallback. Maximally decentralised, but each building requires 8–10 kWh of storage for three-day autonomy at prohibitive per-unit cost (ARENA, 2023). The absence of any fallback risks complete outage of safety-critical services during extended cloud cover, and multiplying independent fault points across buildings exceeds realistic community management capacity.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
