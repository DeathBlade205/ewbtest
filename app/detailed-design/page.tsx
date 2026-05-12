export default function DetailedDesign() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 5</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Detailed Design</h1>

      <p>
        The proposed solution is a distributed hybrid microgrid: a small, self-contained electricity network that generates, stores, and distributes power locally, with no connection to the national grid required. The architecture has four integrated components: distributed rooftop solar generation, a shared central battery bank, a hybrid inverter hub, and a diesel fallback generator. A traffic-light monitoring interface makes system status accessible to the whole community without technical training.
      </p>

      <h3>Component 1 — Distributed Rooftop Solar Generation</h3>
      <p>
        Rather than a single large solar installation requiring land clearing, panels are mounted on existing buildings across the outstation: the ranger base (1.5 kW), communal kitchen (1.0 kW), and dwellings (0.5 kW each). Micro-inverters are installed at each building, converting DC output to AC independently. This means partial shading, soiling, or a panel fault on one building has no effect on the rest of the network — each building generates independently and contributes to the shared battery. No new structures or ground disturbance are required. Rooftop mounting also reduces bird strike risk and maintains unobstructed cultural corridors across Country.
      </p>

      <h3>Component 2 — Shared LFP Battery Bank</h3>
      <p>
        Solar DC output from all buildings feeds into a central shared lithium iron phosphate (LFP) battery bank, sized at 20–30 kWh and located in a flood-safe central point at the outstation. LFP chemistry was selected specifically for tropical deployment conditions: it offers superior thermal stability compared to standard lithium-ion, tolerates higher ambient temperatures without significant degradation, and presents no thermal runaway risk — a critical safety consideration in a remote location without fire response capability (Australian Renewable Energy Agency, 2023). The battery is sized to provide three days of autonomy covering essential services (lighting, refrigeration, and radio communications) without any solar input — providing a buffer that covers extended wet season cloud cover in all but the most extreme conditions.
      </p>

      <h3>Component 3 — Hybrid Inverter Hub</h3>
      <p>
        A central hybrid inverter hub manages the flow of power between the solar array, battery bank, diesel generator, and outstation loads. The inverter performs four functions: it converts solar DC to AC for distribution; it manages battery charge and discharge state; it coordinates the automatic activation of the diesel generator when battery charge falls below 20%; and it outputs 240 V AC for distribution across the outstation to power essential services. The hybrid inverter is a commercially proven technology widely deployed in comparable off-grid remote community installations across northern Australia (Australian Renewable Energy Agency, 2020).
      </p>

      <h3>Component 4 — Diesel Fallback Generator</h3>
      <p>
        The existing diesel generator is retained but repositioned: rather than operating as the primary power source, it functions as an automatic fallback activated by the hybrid inverter only when battery charge falls below 20%. This preserves the community's immediate safety net while the transition to renewable primary generation proceeds. The generator is phased to emergency-only status by Year 5 of the staged implementation, consistent with the pathway demonstrated by ARENA's Solar Energy Transformation Program across 25 remote Indigenous communities in the Northern Territory (Australian Renewable Energy Agency, 2025).
      </p>

      <h3>Traffic-Light Monitoring Interface</h3>
      <p>
        The system is monitored through a simple three-state traffic-light display mounted at a visible central point — the ranger base common area — accessible to all community members at all times.
      </p>

      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Battery Level</th>
            <th>Meaning</th>
            <th>Community Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🟢 Green</td>
            <td>Above 50%</td>
            <td>All systems normal</td>
            <td>No action needed</td>
          </tr>
          <tr>
            <td>🟡 Yellow</td>
            <td>20–50%</td>
            <td>Monitor usage</td>
            <td>Reduce non-essential loads</td>
          </tr>
          <tr>
            <td>🔴 Red</td>
            <td>Below 20%</td>
            <td>Diesel activating</td>
            <td>Minimise consumption</td>
          </tr>
        </tbody>
      </table>

      <p>
        This interface keeps system awareness accessible to any community member without requiring technical training to interpret. Visibility from the common area means the whole community benefits from shared awareness, supporting collective load management.
      </p>

      <h3>Modular Architecture</h3>
      <p>
        The system is explicitly designed for incremental expansion. Adding a new building to the outstation, or increasing capacity as community demand grows, requires adding rooftop panels and battery modules — not redesigning or replacing the hybrid inverter or distribution network. This modularity is essential in a remote context where large-scale reinstallation would require logistically complex and expensive component transport by air or barge. It also means the system can grow as community confidence in renewable operation increases, rather than requiring the community to commit to a larger system than it is ready to manage from day one.
      </p>
    </div>
  )
}
