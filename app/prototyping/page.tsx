import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Prototyping() {
  return (
    <div>
      <SectionHero num="06" title="Prototyping" subtitle="Systems architecture schematic validation and reference case analysis via the Bushlight program and ARENA precedents." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal><p>Physical construction of a full-scale prototype was not feasible within the scope of this project given the remote and logistically constrained nature of the Lama Lama outstations. Prototyping was instead conducted through two complementary methods: a systems architecture schematic validated against published technical specifications, and a reference case analysis of comparable real-world deployments.</p></ScrollReveal>
          <ScrollReveal delay={0.06}><h3>System Architecture Schematic</h3><p>A detailed system architecture diagram was developed mapping the full power flow from each generation point through to end-use loads. Solar DC from each building's rooftop PV (ranger base 1.5 kW, communal kitchen 1.0 kW, dwellings 0.5 kW) feeds into the hybrid inverter hub, which manages charge state and converts to AC output. The LFP battery bank charges from solar surplus and discharges to supply loads. The charge state signal drives the traffic-light display and triggers diesel activation below 20%. The schematic was reviewed against manufacturer specifications for commercially available hybrid inverter systems and LFP battery banks used in comparable Australian off-grid deployments, confirming the integration approach is technically sound (Australian Renewable Energy Agency, 2023).</p></ScrollReveal>
          <ScrollReveal delay={0.08}><h3>Reference Case: The Bushlight Program</h3><p>The primary real-world reference is the Bushlight program, operated by the Centre for Appropriate Technology across remote Indigenous communities in northern and central Australia. Bushlight installed and maintained off-grid solar and battery systems at over 180 remote outstations, specifically including communities in Cape York and Queensland's Gulf Country — environments directly comparable to Lama Lama Country in climate, remoteness, and governance structure. Bushlight demonstrated that community-managed off-grid solar systems can reliably power essential services without ongoing external technical support, provided the training program is comprehensive and locally owned (Centre for Appropriate Technology, n.d.). Average annual savings of $5,500 per household over diesel were reported.</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h3>ARENA Precedent</h3><p>ARENA's Solar Energy Transformation Program provides a further reference case: 25 remote Indigenous communities in the Northern Territory transitioned from diesel primary generation to solar-plus-battery hybrid systems through a staged process directly analogous to the five-year transition proposed here — demonstrating at scale that the proposed approach is not experimental but proven (Australian Renewable Energy Agency, 2025).</p></ScrollReveal>
        </div>
      </div>
    </div>
  )
}
