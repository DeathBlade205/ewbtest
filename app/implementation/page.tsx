import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Implementation() {
  return (
    <div>
      <SectionHero num="07" title="Implementation Plan" subtitle="Five-year staged diesel transition with logistics, community training, and risk management." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal><p>Implementation is structured around a five-year staged diesel transition designed to match the logistical realities of remote deployment and the pace at which community confidence and technical capability can grow. The staged approach ensures the system is never deployed beyond what the Lama Lama rangers can reliably manage at any given point (Centre for Appropriate Technology, n.d.; Australian Renewable Energy Agency, 2025).</p></ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Five-Year Staged Transition</h3>
            <table>
              <thead><tr><th>Phase</th><th>Period</th><th>Activities</th><th>Diesel Role</th></tr></thead>
              <tbody>
                <tr><td><strong>Phase 1</strong></td><td>Year 1</td><td>Pilot at ranger base: rooftop PV, battery bank, hybrid inverter hub, traffic-light display. Bushlight training begins.</td><td>Full backup</td></tr>
                <tr><td><strong>Phase 2</strong></td><td>Years 2–3</td><td>Panels expand to communal kitchen and dwellings. Battery capacity increases. Advanced ranger training. Performance monitored.</td><td>Use halved</td></tr>
                <tr><td><strong>Phase 3</strong></td><td>Years 3–5</td><td>Full three-day battery autonomy. Consistent renewable primary supply. Community manages independently.</td><td>Emergency only</td></tr>
                <tr><td><strong>Phase 4</strong></td><td>Year 5+</td><td>Renewable primary source. Ongoing CfAT support available. Modular expansion possible.</td><td>Rarely activated</td></tr>
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal delay={0.08}><h3>Logistics</h3><p>All components must be transported by light aircraft, barge, or 4WD — the only viable options for Cape York. This directly informed the design: all components are modular, lightweight, and require no heavy civil works. Rooftop mounting uses existing building structures, eliminating the need for concrete foundations. Battery modules and panel sections are sized for standard air freight and barge load limits.</p></ScrollReveal>

          <ScrollReveal delay={0.1}><h3>Community Engagement and Training</h3><p>The Bushlight training model is adopted as the framework for building local technical capability. Governance remains with the Yintjingga Aboriginal Corporation at every stage. Phase 1 training focuses on traffic-light interface monitoring and routine panel cleaning. Phase 2 advances to battery state-of-charge interpretation and component inspection. Phase 3 establishes fully independent community operation, with CfAT technical support available remotely and via periodic site visits.</p></ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h3>Risk Management</h3>
            <table>
              <thead><tr><th>Risk</th><th>Likelihood</th><th>Mitigation</th></tr></thead>
              <tbody>
                <tr><td>Transport delayed by wet season</td><td>High</td><td>Phase 1 scheduled for dry season; spare components stocked before wet season onset</td></tr>
                <tr><td>Cyclone panel damage</td><td>Medium</td><td>Low-profile rooftop mounting; cyclone-rated hardware; insurance in budget</td></tr>
                <tr><td>Battery fault requiring specialist</td><td>Low</td><td>LFP reliability; modular replacement by trained rangers; diesel fallback during resolution</td></tr>
                <tr><td>Community capacity below expected</td><td>Low</td><td>Staged transition; diesel available; no Phase 2 without Yintjingga Aboriginal Corporation sign-off</td></tr>
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
