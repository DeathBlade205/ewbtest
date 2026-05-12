export default function Implementation() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 7</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Implementation Plan</h1>

      <p>
        Implementation is structured around a five-year staged diesel transition, with each phase designed to match both the logistical realities of remote deployment and the pace at which community confidence and technical capability can realistically grow. The staged approach ensures the system is never deployed beyond what the Lama Lama rangers can reliably manage at any given point — a principle drawn directly from the Bushlight program model (Centre for Appropriate Technology, n.d.) and validated by ARENA's Solar Energy Transformation Program across 25 remote Indigenous communities in the Northern Territory (Australian Renewable Energy Agency, 2025).
      </p>

      <h3>Five-Year Staged Transition</h3>

      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Period</th>
            <th>Key Activities</th>
            <th>Diesel Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phase 1</strong></td>
            <td>Year 1</td>
            <td>Pilot installation at ranger base: rooftop PV (1.5 kW), modest battery bank, hybrid inverter hub, traffic-light monitoring display. Bushlight-modelled ranger training program begins. System validated in real conditions.</td>
            <td>Full backup — activates automatically below 20%</td>
          </tr>
          <tr>
            <td><strong>Phase 2</strong></td>
            <td>Years 2–3</td>
            <td>Panel installation expands to communal kitchen and dwellings. Battery bank capacity increased. Advanced ranger training. System performance monitored and documented. Community familiarity with traffic-light display well established.</td>
            <td>Diesel use approximately halved as solar + battery meets majority of demand</td>
          </tr>
          <tr>
            <td><strong>Phase 3</strong></td>
            <td>Years 3–5</td>
            <td>Battery capacity reaches full three-day autonomy sizing. Diesel approaches emergency-only activation frequency. Consistent renewable primary supply. Community manages system independently.</td>
            <td>Emergency only — activates only in extended poor-weather events</td>
          </tr>
          <tr>
            <td><strong>Phase 4</strong></td>
            <td>Year 5+</td>
            <td>Renewable energy is primary source. Ongoing Bushlight-style community support available. Modular expansion possible as outstation grows. System fully community-governed.</td>
            <td>Emergency backup only — retained but rarely activated</td>
          </tr>
        </tbody>
      </table>

      <h3>Logistics and Transport</h3>
      <p>
        All components must be transported to the outstation by light aircraft, barge, or 4WD — the only viable options for Cape York. This directly informed the design: all components are modular, lightweight, and do not require heavy civil works or large machinery for installation. Rooftop mounting using existing building structures eliminates the need for concrete foundations or ground disturbance. Battery modules and panel sections are sized for transport within standard air freight and barge load limits.
      </p>

      <h3>Community Engagement and Training</h3>
      <p>
        The Bushlight training model is adopted as the framework for building local technical capability. Bushlight delivered hands-on training to community members in system monitoring, routine maintenance, fault identification, and component replacement at comparable remote outstations across northern Australia (Centre for Appropriate Technology, n.d.). Governance at every stage remains with the Yintjingga Aboriginal Corporation: decisions about placement, operational priorities, and future expansion are made by the community, with the engineering team in a support role rather than a decision-making role.
      </p>
      <p>
        Training in Phase 1 focuses on system monitoring using the traffic-light interface and routine cleaning of panels. Phase 2 training advances to battery state-of-charge interpretation and component inspection. Phase 3 establishes independent community operation, with CfAT or equivalent technical support available remotely and via periodic site visits.
      </p>

      <h3>Risk Management</h3>
      <table>
        <thead>
          <tr>
            <th>Risk</th>
            <th>Likelihood</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Component transport delayed by wet season</td>
            <td>High</td>
            <td>Phase 1 installation scheduled for dry season; sufficient spare components stocked at outstation before wet season onset</td>
          </tr>
          <tr>
            <td>Panel damage from cyclone</td>
            <td>Medium</td>
            <td>Low-profile rooftop mounting reduces wind load; cyclone-rated mounting hardware specified; insurance coverage included in budget</td>
          </tr>
          <tr>
            <td>Battery fault requiring specialist intervention</td>
            <td>Low</td>
            <td>LFP chemistry selected for reliability; modular battery design allows single-module replacement by trained rangers; diesel fallback ensures continuity during fault resolution</td>
          </tr>
          <tr>
            <td>Community capacity not growing as expected</td>
            <td>Low</td>
            <td>Staged transition means diesel remains available; training scope adjusted to community pace; no Phase 2 expansion without Phase 1 sign-off from Yintjingga Aboriginal Corporation</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
