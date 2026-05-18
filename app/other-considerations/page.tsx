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

          <ScrollReveal delay={0.04}>
            <h3>Community Adoption Pathway</h3>
            <p>Initial community reaction is expected to be cautious due to past experiences with unreliable infrastructure. The staged pilot-first rollout allows Rangers to build confidence in the system before expansion to additional buildings. As training progresses and diesel use declines, Rangers transition from users to operators of the system, strengthening local ownership and governance capacity. By Year 5, YAC is expected to independently manage upgrades and maintenance decisions, supporting long-term energy sovereignty on Country.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="not-prose flex flex-col gap-3 mb-6">
              {[
                {
                  phase: 'Phase 1 (Year 1–2)',
                  title: 'Scepticism and First Evidence',
                  body: 'Community members with prior experience of infrastructure failures may approach the pilot cautiously. The pilot at the ranger base — the most operationally critical and trust-invested location — is designed to build visible early evidence of reliability before any expansion. Rangers completing the Bushlight training programme are expected to become internal advocates. Key milestone: first wet season in which the outstation does not lose power.',
                },
                {
                  phase: 'Phase 2 (Years 2–3)',
                  title: 'Growing Confidence',
                  body: 'As panels are added building-by-building and diesel use visibly declines, community confidence in the system\'s reliability grows. Rangers begin diagnosing and resolving faults independently, shifting from observers to owners of the system. Key milestone: first time Rangers independently resolve a fault without external assistance.',
                },
                {
                  phase: 'Phases 3–5 (Years 3–5)',
                  title: 'Energy Sovereignty',
                  body: 'Diesel use drops below 50% then approaches emergency-only status. YAC governs system upgrades through its own frameworks without reference to external providers. Key milestone: first year in which diesel use falls below 20%, consistent with ARENA\'s Northern Territory program outcomes (Independent Australia, 2025).',
                },
              ].map(({ phase, title, body }) => (
                <div key={phase} className="rounded-lg p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--ochre)' }}>{phase}</p>
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--ink)' }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
