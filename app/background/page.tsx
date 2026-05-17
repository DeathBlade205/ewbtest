import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Background() {
  return (
    <div>
      <SectionHero num="01" title="Background" subtitle="Energy access, environmental challenges, significance to the Lama Lama community, and limitations of existing solutions." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>Lama Lama Country occupies the eastern side of Cape York Peninsula in Far North Queensland. The Lama Lama People are the Traditional Custodians of lands extending several hundred kilometres around Princess Charlotte Bay, encompassing coastal habitats, wetlands, riverine systems, and Sea Country (Lama Lama Aboriginal Corporation, 2024). Since the 1970s outstation movement, Lama Lama people have progressively reclaimed connections to Country through small, decentralised communities such as Port Stewart (Yintjingga), operating primarily during the dry season. Lama Lama Rangers manage Country through fire management, biodiversity monitoring, and cultural heritage protection. These outstations rely entirely on diesel generators; wet season road floods cut communities off for months, leaving them without power when fuel runs out (EWB, 2025a; Bureau of Meteorology, 2024).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Energy Access in Remote Australia</h3>
            <p>Remote communities across northern Australia rely almost entirely on diesel generators, pushing electricity costs above $0.50/kWh versus urban grid costs of $0.25–$0.35/kWh (Australian Energy Regulator, 2023). Solar PV with battery storage now delivers competitive or lower costs in remote contexts, and Cape York's 5.5+ peak sun hours per day make the financial case especially strong (ARENA, 2023).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Environmental Challenges of the Lama Lama Context</h3>
            <p>Lama Lama Country's tropical climate creates significant technical challenges. Mean monthly rainfall of 265–372 mm from January to March creates flooding risks, and the region sits within Australia's cyclone zone (Bureau of Meteorology, 2024; EWB, 2025e). High ambient temperatures regularly exceeding 35°C reduce PV output by approximately 17–23% relative to nameplate ratings (Skoplaki &amp; Palyvos, 2009). Soiling from dry season dust can reduce PV output by a further 5–25% depending on cleaning frequency (Mani &amp; Pillai, 2010), and thermal stress accelerates battery cell degradation in the absence of appropriate thermal management (Gaonkar et al., 2024).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Significance to the Lama Lama Community</h3>
            <p>For the Lama Lama People, Country is central to cultural identity and traditional practice (EWB, 2025a). Power failures are direct safety failures: without power, refrigerated medical and food supplies fail, radio communications go dark, and Rangers cannot respond to emergencies. The community's history of top-down infrastructure imposed without consultation makes community governance and self-determination core design requirements (EWB, 2025b).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h3>Existing Solutions and Their Limitations</h3>
            <p>Grid extension is infeasible at Cape York distances. Diesel-only generation is collapse-prone during wet season disruptions. Off-grid solar products designed for mild climates perform poorly here and require manufacturer servicing, undermining local manageability (EWB, 2025b). The Bushlight Project (2002–2013) demonstrated a better model — community consultation, customised solar-battery-generator systems achieving $5,500/household/year savings over diesel (Independent Australia, 2025). No equivalent program has reached Lama Lama outstations.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
