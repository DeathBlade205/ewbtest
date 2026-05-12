export default function DesignOptions() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 3</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Design Solution Options</h1>

      <p>
        Three distinct design approaches were developed and evaluated against the criteria established in Section 2. Each approach represents a meaningfully different system architecture with different trade-offs across viability, cost, community-appropriateness, and alignment with the EWB Challenge brief.
      </p>

      <h3>Idea A — Centralised Solar Farm</h3>
      <p>
        Idea A involves a centralised, ground-mounted solar photovoltaic (PV) farm located at a single point on the outstation, feeding into a shared battery bank that distributes power across all buildings via a microgrid. This approach mirrors large-scale remote community solar installations deployed in some parts of regional Australia.
      </p>
      <div className="infobox">
        <p className="text-sm font-semibold mb-2">Idea A — At a Glance</p>
        <ul className="text-sm">
          <li><strong>Approach:</strong> Centralised ground-mounted PV array with shared battery and distribution network</li>
          <li><strong>Key advantage:</strong> Economies of scale; single installation point; higher total generation potential</li>
          <li><strong>Key limitations:</strong> Requires vegetation clearing on Country; creates a single point of failure; centralised faults require specialist intervention; does not align with custodial responsibilities; civil works raise upfront costs significantly</li>
        </ul>
      </div>
      <p>
        The primary disqualifying issue for Idea A in the Lama Lama context is land clearing. Ground-mounting a solar farm of meaningful scale requires removal of vegetation, which directly conflicts with the community's custodial relationship with Country. Beyond the cultural dimension, a centralised installation creates a single point of failure — any fault in the central array or battery bank removes power from the entire outstation, with no distributed redundancy (Roy &amp; Pearce, 2024). Remote fault resolution would require outside technicians, undermining local manageability.
      </p>

      <h3>Idea B — Distributed Rooftop Solar with Shared Battery and Diesel Fallback</h3>
      <p>
        Idea B is the group's proposed solution: rooftop PV panels distributed across existing buildings at the outstation (ranger base, communal kitchen, and dwellings), each rated 0.5–1.5 kW, feeding into a central shared 20–30 kWh lithium iron phosphate (LFP) battery bank and hybrid inverter hub. The existing diesel generator is retained as an automatic fallback, activating only when battery charge falls below 20%. A traffic-light monitoring display provides at-a-glance system status to community members.
      </p>
      <div className="infobox">
        <p className="text-sm font-semibold mb-2">Idea B — At a Glance</p>
        <ul className="text-sm">
          <li><strong>Approach:</strong> Distributed rooftop PV, shared LFP battery bank, hybrid inverter hub, diesel fallback</li>
          <li><strong>Key advantages:</strong> No land clearing; distributed faults; community-operable; modular and scalable; Bushlight training model proven at comparable sites; staged diesel transition preserves safety net</li>
          <li><strong>Key limitation:</strong> Higher upfront cost than Idea C for individual buildings; retains diesel temporarily (by design)</li>
        </ul>
      </div>
      <p>
        Micro-inverters on each building handle partial shading and soiling independently, preventing one underperforming panel from affecting the whole network. The LFP battery chemistry was selected for its superior thermal stability and safety in tropical conditions compared to lithium-ion alternatives (Australian Renewable Energy Agency, 2023). The modular architecture means expanding capacity requires adding panels and battery modules — not redesigning or replacing the core system — which is critical in a remote context where large-scale reinstallation is logistically prohibitive.
      </p>

      <h3>Idea C — Standalone Per-Building System</h3>
      <p>
        Idea C involves fully independent solar-plus-battery systems at each building, with no shared infrastructure and no diesel component. Each building would generate, store, and consume its own power in complete isolation.
      </p>
      <div className="infobox">
        <p className="text-sm font-semibold mb-2">Idea C — At a Glance</p>
        <ul className="text-sm">
          <li><strong>Approach:</strong> Standalone solar and battery at each building, no shared network, no diesel</li>
          <li><strong>Key advantage:</strong> Complete fault isolation between buildings; no shared infrastructure dependencies</li>
          <li><strong>Key limitations:</strong> Multiplies maintenance points beyond community capacity; no fallback during extended cloud cover; battery oversizing required per building drives costs up significantly; no shared load balancing</li>
        </ul>
      </div>
      <p>
        The critical failure of Idea C is the absence of any fallback mechanism during the wet season, when extended cloud cover can reduce solar generation for days at a time. Without a shared battery or diesel backup, safety-critical services at any building become vulnerable to outage during precisely the period of greatest need. Additionally, maintaining independent systems across multiple isolated buildings exceeds what a small ranger community can realistically manage, multiplying fault points without the benefit of centralised oversight (Centre for Appropriate Technology, n.d.).
      </p>
    </div>
  )
}
