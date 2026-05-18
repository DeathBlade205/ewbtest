import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function OtherConsiderations() {
  return (
    <div>
      <SectionHero num="10" title="Other Considerations" subtitle="Community reaction, journey map, and the anticipated arc from cautious interest to confident ownership." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>Community Reaction and Journey Map</h3>
            <p>The expected community reaction follows an arc from cautious interest to confident ownership. In Phase 1, community members with prior experience of infrastructure failures may approach the pilot cautiously; Rangers completing training are expected to become internal advocates (CfAT, n.d.). By Phases 2–3, growing evidence of reliability and independently resolved faults shift Rangers from observers to owners. By Phase 5, YAC governs upgrades without reference to external providers, consistent with ARENA's Northern Territory program outcomes (Independent Australia, 2025). Pain points — unfamiliar technology, historical distrust, and language accessibility — are addressed respectively by the Bushlight training model, the pilot-first approach, and plain-English visual materials co-designed with YAC.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Community Adoption Pathway</h3>
            <p>Initial community reaction is expected to be cautious due to past experiences with unreliable infrastructure. The staged pilot-first rollout allows Rangers to build confidence in the system before expansion to additional buildings. As training progresses and diesel use declines, Rangers transition from users to operators of the system, strengthening local ownership and governance capacity. By Year 5, YAC is expected to independently manage upgrades and maintenance decisions, supporting long-term energy sovereignty on Country.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
