import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Recommendations() {
  return (
    <div>
      <SectionHero num="10" title="Recommendations" subtitle="Primary recommendation and five supporting actions for implementation, funding, and community partnership." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <div className="infobox">
              <p className="text-sm font-semibold" style={{ color: 'var(--pine)' }}>Primary Recommendation</p>
              <p className="text-sm mt-1" style={{ color: 'var(--ink-muted)' }}>The Yintjingga Aboriginal Corporation and Lama Lama Land and Sea Rangers, in partnership with an appropriate technical delivery partner (such as the Centre for Appropriate Technology), should proceed with implementation of a distributed hybrid microgrid at the Lama Lama outstation, following the five-year staged diesel transition plan outlined in Section 7.</p>
            </div>
            <p>This recommendation is supported by the decision matrix result (Idea B total: 72, vs 36 and 32 for alternatives), the Bushlight and ARENA precedent at comparable remote Indigenous sites, and strong alignment with ARENA funding criteria and the Queensland Government's First Nations Clean Energy Strategy. It is the only evaluated option that satisfies all three design criteria simultaneously.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Supporting Recommendations</h3>
            <ol>
              <li><strong>Apply for ARENA Remote and Off-Grid Communities program funding immediately.</strong> Grants of up to 50% of eligible project costs ($40,000–$60,000) are available and have been awarded to comparable projects (Australian Renewable Energy Agency, 2020). Application should begin in parallel with technical design finalisation.</li>
              <li><strong>Engage the Centre for Appropriate Technology as technical delivery and training partner.</strong> CfAT's Bushlight program has previously worked with Lama Lama community members (Centre for Appropriate Technology, 2009), providing an existing relationship that reduces engagement overhead.</li>
              <li><strong>Begin Phase 1 installation during the next dry season.</strong> Phase 1 at the ranger base should be completed before the following wet season to validate the system in real conditions during the period of greatest need.</li>
              <li><strong>Document Phase 1 performance to support Phase 2 funding applications.</strong> Real performance data — generation output, diesel activation frequency, battery autonomy during cloud cover — significantly strengthens subsequent ARENA and Queensland Government applications.</li>
              <li><strong>Explore Queensland Government First Nations Clean Energy Strategy funding.</strong> This stream specifically targets remote Indigenous energy projects in Cape York and the Gulf, making it an ideal complement to ARENA support (Independent Australia, 2025).</li>
            </ol>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
