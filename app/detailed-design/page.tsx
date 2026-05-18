import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function DetailedDesign() {
  return (
    <div>
      <SectionHero num="06" title="Detailed Design" subtitle="System architecture, component specifications, and community concerns for the distributed hybrid microgrid." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>System Overview</h3>
            <p>The Distributed Hybrid Microgrid is a self-contained electricity network generating, storing, and distributing power locally with no grid connection. It comprises five subsystems: distributed rooftop PV generation; a centralised LiFePO4 battery bank; a hybrid inverter-charger hub; a diesel generator repositioned as automatic fallback; and a traffic-light monitoring interface.</p>
            <div className="not-prose my-6">
              <img
                src="/fig2-block-diagram.png"
                alt="High-level functional block diagram: Ranger PV 1.5kW, Kitchen PV 1.0kW, Dwelling PV 0.5kW feeding Charge controller, Battery bank 20kWh LiFePO4, Hybrid inverter 5kW Victron MultiPlus, Distribution board, and outputs to Lighting, Refrigeration, Radio comms. Diesel generator emergency fallback at less than 20% SOC."
                className="w-full rounded-lg"
                style={{ border: '1px solid var(--border)' }}
              />
              <p className="text-xs italic mt-2 text-center" style={{ color: 'var(--ink-faint)' }}>
                FIGURE 2: High-level functional block diagram displaying how the solution works
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h3>PV Generation</h3>
            <p>Monocrystalline PV panels (400 W each) are mounted on existing outstation rooftops; total capacity across 4–6 buildings is 4.8–7.2 kW, sized with a 20% derating factor for temperature losses (Skoplaki &amp; Palyvos, 2009). Cyclone-rated steel mounting frames require no ground penetration. Panel positions are confirmed with YAC for cultural siting constraints. Panel cleaning is built into the Rangers' routine schedule to manage soiling losses of 5–25% (Mani &amp; Pillai, 2010).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Battery Storage</h3>
            <p>A centralised 20 kWh LiFePO4 battery bank provides approximately three days of autonomy for essential loads at 6–7 kWh/day. LiFePO4 is selected over lead-acid for superior thermal stability, longer cycle life, and lower maintenance requirements critical where battery replacement is logistically complex (Gaonkar et al., 2024). The enclosure is elevated above probable maximum flood level, marine-grade, and passively ventilated to limit temperature-driven cell degradation.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Hybrid Inverter Hub and Diesel Integration</h3>
            <p>A 5 kW hybrid inverter-charger (Victron MultiPlus or equivalent) prioritises battery discharge and auto-activates the diesel generator when state-of-charge drops below 20%, charging to 50% before de-activating to minimise run time. Diesel moves from primary source to emergency-only backup, consistent with ARENA's Solar Energy Transformation Program (Independent Australia, 2025).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h3>Monitoring Interface</h3>
            <p>A traffic-light display (green: state-of-charge &gt; 50%; yellow: 20–50%; red: &lt;20%) is mounted at a central community point. The interface requires no technical literacy to interpret and makes system awareness accessible to any community member. Rangers managing the system will receive additional training on the inverter's full monitoring interface, but the traffic-light display ensures the broader community can engage with system health without specialist knowledge.</p>
            <div className="not-prose my-6 flex justify-center">
              <div style={{ maxWidth: 220 }}>
                <img
                  src="/fig3-traffic-light.png"
                  alt="FIGURE 3: Traffic-light monitoring interface — green/yellow/red LED panel with percentage thresholds labelled. Only one light is displayed at a time."
                  className="w-full rounded-lg"
                  style={{ border: '1px solid var(--border)' }}
                />
                <p className="text-xs italic mt-2 text-center" style={{ color: 'var(--ink-faint)' }}>
                  FIGURE 3: Traffic-light monitoring interface green/yellow/red LED panel with percentage thresholds labelled (note only one of the lights will actually be displayed at once)
                </p>
              </div>
            </div>
            <table>
              <thead><tr><th>Light</th><th>Battery Level</th><th>Meaning</th><th>Community Action</th></tr></thead>
              <tbody>
                <tr><td>🟢 Green</td><td>Above 50%</td><td>System normal</td><td>No action needed</td></tr>
                <tr><td>🟡 Yellow</td><td>20–50%</td><td>Monitor usage</td><td>Reduce non-essential loads</td></tr>
                <tr><td>🔴 Red</td><td>Below 20%</td><td>Diesel activating</td><td>Minimise consumption</td></tr>
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <h3>Community Concerns and How They Are Addressed</h3>
            <p>Three community concerns are addressed by the design. Infrastructure damaging Country is resolved by rooftop-only mounting with no ground clearance or soil disturbance. System failure risk is mitigated by the diesel fallback, three-day battery autonomy, and distributed architecture that localises any fault to one building. Dependence on outside expertise is prevented by the Bushlight-modelled training programme and modular architecture that limits maintenance to component-level replacement.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
