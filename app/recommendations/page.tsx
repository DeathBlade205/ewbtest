import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Recommendations() {
  return (
    <div>
      <SectionHero num="10" title="Recommendations" subtitle="Actions for the Yintjingga Aboriginal Corporation, EWB, and further research required before implementation." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>For the Yintjingga Aboriginal Corporation and EWB</h3>
            <ol>
              <li><strong>Initiate a formal co-design consultation</strong> with YAC and community Elders and Rangers to confirm outstation building layouts, culturally significant siting constraints, occupancy demand profiles, and any governance structures that need to be in place before installation commences. This consultation should be structured around Free, Prior and Informed Consent principles.</li>
              <li><strong>Engage CfAT's Queensland team early</strong> as the training programme delivery partner, given their existing relationship with the Lama Lama community and their institutional expertise in the Bushlight model.</li>
              <li><strong>Prepare and submit a joint ARENA Remote and Off-Grid Communities grant application</strong> and Queensland First Nations Clean Energy Strategy expression of interest; YAC's governance role as owner will strengthen both applications.</li>
              <li><strong>Commission a formal site assessment</strong> of outstation buildings to confirm roof structural ratings for the proposed panel loads and cyclone-force wind uplift requirements before finalising component specifications.</li>
              <li><strong>Engage a certified electrical contractor</strong> experienced in remote Cape York installations with a knowledge-transfer commitment rather than proprietary lock-in.</li>
            </ol>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Further Research Needed</h3>
            <ol>
              <li>Detailed energy demand profiling per building, including seasonal occupancy variation and medical refrigeration requirements.</li>
              <li>Hydrological mapping of probable maximum flood levels to confirm battery enclosure and mounting heights.</li>
              <li>Cultural heritage and ecological sensitivity assessment conducted with Elders and Rangers to identify panel siting restrictions not visible from desktop research.</li>
              <li>Long-term performance data from ARENA's Northern Territory Solar Energy Transformation Program communities to refine battery sizing and diesel reduction projections for Cape York's specific climate profile.</li>
            </ol>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
