export default function ExecutiveSummary() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">EWB Challenge 2025 — One Prompt Wonders</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-1">Executive Summary</h1>
      <p className="text-sm text-gray-500 mb-8">31265 Computing and Information Technology Practice — Assessment Task 3</p>

      <div className="infobox mb-8">
        <p className="text-sm font-semibold text-[#145c3e] mb-2">Project Details</p>
        <table className="text-sm w-full">
          <tbody>
            <tr><td className="pr-4 text-gray-500 py-0.5 w-36">Group</td><td>One Prompt Wonders</td></tr>
            <tr><td className="pr-4 text-gray-500 py-0.5">Subject</td><td>31265 Computing and Information Technology Practice</td></tr>
            <tr><td className="pr-4 text-gray-500 py-0.5">EWB Challenge</td><td>Lama Lama Country — Microgrids and hybrid systems for outstations</td></tr>
            <tr><td className="pr-4 text-gray-500 py-0.5">Community Partner</td><td>Yintjingga Aboriginal Corporation / Lama Lama Land and Sea Rangers</td></tr>
          </tbody>
        </table>
      </div>

      <p>
        This report presents the findings and design recommendation of One Prompt Wonders for the Engineers Without Borders (EWB) Challenge 2025, focused on the Lama Lama community of Cape York Peninsula, Queensland. The project addresses a persistent and critical energy access problem: the outstations of Lama Lama Country are entirely dependent on diesel-powered generation, leaving communities vulnerable to supply disruption during the wet season when road access is cut off for months at a time.
      </p>

      <p>
        The group identified three non-negotiable criteria a viable solution must satisfy simultaneously: reducing or eliminating diesel dependence, reliably powering safety-critical services (lighting, refrigeration, and radio communications), and being community-appropriate — locally manageable and governed by the Lama Lama people themselves. Existing alternatives — commercial off-grid solar kits, hybrid diesel-solar systems, and grid connection — each fail on at least one of these criteria under the specific conditions of Lama Lama Country.
      </p>

      <p>
        The recommended design solution is a distributed hybrid microgrid: rooftop solar panels (0.5–1.5 kW) mounted on existing buildings across the outstation, feeding into a shared 20–30 kWh lithium iron phosphate battery bank and hybrid inverter hub. The existing diesel generator is retained but repositioned as an automatic fallback, activating only when battery charge drops below 20%. A simple traffic-light monitoring display makes system status accessible to any community member without technical training.
      </p>

      <p>
        Implementation follows a staged five-year transition beginning with a pilot at the ranger base, progressively expanding across all outstation buildings and reducing diesel reliance as community confidence and battery capacity grow. Total installation cost is estimated at $80,000–$120,000, with $40,000–$60,000 potentially available through ARENA's Remote and Off-Grid Communities program and complementary funding from the Queensland Government's First Nations Clean Energy Strategy. Based on Bushlight community data, annual savings of $5,500 per household over diesel suggest cost recovery within 15–20 years.
      </p>

      <p>
        The design directly strengthens Lama Lama self-determination: governance at every stage remains with the Yintjingga Aboriginal Corporation, no land clearing is required, and the Bushlight-modelled training program builds genuine local capability that accumulates within the community over time.
      </p>
    </div>
  )
}
