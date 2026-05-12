import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function DetailedDesign() {
  return (
    <div>
      <SectionHero num="05" title="Detailed Design" subtitle="System architecture, components, and the traffic-light monitoring interface of the distributed hybrid microgrid." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>The proposed solution is a distributed hybrid microgrid: a self-contained electricity network that generates, stores, and distributes power locally with no connection to the national grid required. The architecture has four integrated components: distributed rooftop solar generation, a shared central LFP battery bank, a hybrid inverter hub, and a diesel fallback generator — plus a traffic-light monitoring interface accessible to the whole community.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}><h3>Component 1 — Distributed Rooftop Solar Generation</h3><p>Panels are mounted on existing buildings: ranger base (1.5 kW), communal kitchen (1.0 kW), and dwellings (0.5 kW each). Micro-inverters at each building convert DC output to AC independently — a fault on one building's panels has no effect on the rest of the network. No new structures or ground disturbance are required. Rooftop mounting also reduces bird strike risk and preserves cultural corridors across Country.</p></ScrollReveal>

          <ScrollReveal delay={0.08}><h3>Component 2 — Shared LFP Battery Bank (20–30 kWh)</h3><p>Solar DC output from all buildings feeds into a central lithium iron phosphate (LFP) battery bank located in a flood-safe central point. LFP chemistry was selected specifically for tropical deployment: it offers superior thermal stability, tolerates high ambient temperatures without significant degradation, and presents no thermal runaway risk — critical in a remote location without fire response capability (Australian Renewable Energy Agency, 2023). The battery is sized for three days of autonomy covering essential services without any solar input.</p></ScrollReveal>

          <ScrollReveal delay={0.1}><h3>Component 3 — Hybrid Inverter Hub</h3><p>A central hybrid inverter manages power flow between the solar array, battery bank, diesel generator, and outstation loads. It converts solar DC to AC for distribution, manages battery charge/discharge state, triggers automatic diesel activation below 20% battery charge, and outputs 240 V AC across the outstation to power essential services (Australian Renewable Energy Agency, 2020).</p></ScrollReveal>

          <ScrollReveal delay={0.12}><h3>Component 4 — Diesel Fallback Generator</h3><p>The existing diesel generator is retained but repositioned as automatic fallback only. It activates when battery charge falls below 20% and is phased to emergency-only status by Year 5, consistent with the pathway demonstrated by ARENA's Solar Energy Transformation Program across 25 remote Indigenous communities in the Northern Territory (Australian Renewable Energy Agency, 2025).</p></ScrollReveal>

          <ScrollReveal delay={0.14}>
            <h3>Traffic-Light Monitoring Interface</h3>
            <table>
              <thead><tr><th>State</th><th>Battery Level</th><th>Meaning</th><th>Community Action</th></tr></thead>
              <tbody>
                <tr><td>🟢 Green</td><td>Above 50%</td><td>All systems normal</td><td>No action needed</td></tr>
                <tr><td>🟡 Yellow</td><td>20–50%</td><td>Monitor usage</td><td>Reduce non-essential loads</td></tr>
                <tr><td>🔴 Red</td><td>Below 20%</td><td>Diesel activating</td><td>Minimise consumption</td></tr>
              </tbody>
            </table>
            <p>Mounted in the ranger base common area and visible at all times, the display keeps system awareness accessible to any community member without technical training — enabling collective load management across the outstation.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}><h3>Modular Architecture</h3><p>Adding a new building or expanding capacity requires adding rooftop panels and battery modules — not redesigning or replacing the hybrid inverter or distribution network. This is essential in a remote context where large-scale reinstallation requires logistically complex and expensive component transport by air or barge.</p></ScrollReveal>
        </div>
      </div>
    </div>
  )
}
