import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Recommendations() {
  return (
    <div>
      <SectionHero num="11" title="Recommendations" subtitle="Actions for the Yintjingga Aboriginal Corporation, EWB, and further research required before implementation." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>For the Yintjingga Aboriginal Corporation and EWB</h3>
            <ul>
              <li>Conduct a formal co-design consultation with YAC, Rangers, and Elders to confirm siting constraints, occupancy demand, governance requirements, and cultural considerations before installation.</li>
              <li>Engage CfAT and an experienced remote-area electrical contractor to deliver installation and Bushlight-modelled training with a strong knowledge-transfer focus.</li>
              <li>Prepare joint funding applications through ARENA and the Queensland First Nations Clean Energy Strategy to reduce upfront community costs.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Further Research Needed</h3>
            <p>Additional work is required to refine seasonal energy demand profiles, confirm flood-safe battery enclosure heights, assess culturally sensitive siting constraints, and evaluate long-term battery performance under Cape York climatic conditions.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
