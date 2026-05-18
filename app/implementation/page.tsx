import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Implementation() {
  return (
    <div>
      <SectionHero num="07" title="Implementation Plan" subtitle="Five-year staged diesel transition with community training, evaluation, and community ownership at every stage." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>Implementation follows a five-year staged transition matching remote deployment logistics and building community operational confidence alongside system capacity.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Five-Year Staged Diesel Transition</h3>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="not-prose flex flex-col gap-3 mb-8">
              {[
                {
                  phase: 'Phase 1 (Year 1)', title: 'Pilot Ranger Base',
                  body: 'Install 2 kW rooftop PV, 10 kWh battery bank, hybrid inverter hub, and monitoring display at the ranger base. Diesel remains primary source. The Bushlight-modelled training programme is delivered here covering panel cleaning, battery monitoring, inverter operation, and fault identification alongside co-development of a YAC governance framework for the energy system.',
                  diesel: 'Full backup',
                },
                {
                  phase: 'Phase 2 (Years 2–3)', title: 'Expansion to Remaining Buildings',
                  body: 'PV and battery modules are added building-by-building, growing total capacity to 4.8–7.2 kW PV and 20 kWh battery. Diesel drops to secondary source, activating only below 20% state-of-charge.',
                  diesel: 'Secondary source',
                },
                {
                  phase: 'Phases 3–5 (Years 3–5)', title: 'Diesel to Emergency-Only',
                  body: 'Battery capacity expands to cover extended wet season cloud cover. By Year 5, diesel use targets under 20% of total generation, consistent with ARENA\'s Solar Energy Transformation Program outcomes across 25 Northern Territory communities (Independent Australia, 2025).',
                  diesel: 'Emergency only (<20%)',
                },
              ].map(({ phase, title, body, diesel }) => (
                <div key={phase} className="rounded-lg p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--ochre)' }}>{phase}</p>
                      <p className="font-bold text-sm" style={{ color: 'var(--ink)' }}>{title}</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded shrink-0" style={{ background: 'rgba(46,125,82,0.1)', color: 'var(--moss)', border: '1px solid rgba(46,125,82,0.2)' }}>Diesel: {diesel}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Community Training and Capacity Building</h3>
            <p>The Bushlight training model is adopted in full: hands-on, outstation-delivered, and repeated annually with refresher components (Independent Australia, 2025). Training covers panel inspection, monitoring interface interpretation, inverter fault codes, battery management, generator operation, and cable inspection. Materials are in plain English with visual diagrams for both printed and on-device use.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h3>Evaluation</h3>
            <p>Rangers evaluate system performance quarterly using a checklist covering kWh generation, diesel activation events, battery state-of-charge, fault events, and community satisfaction. Annual YAC reviews assess diesel transition progress and identify component upgrades.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <h3>Community Ownership and Repairs</h3>
            <p>All assets are owned by YAC from installation. YAC governs expansion, modification, and end-of-life decisions. Rangers perform routine maintenance; component faults are resolved using pre-positioned spares with satellite phone support from CfAT or the installer. Emergency components can be flown in within 24–48 hours. Battery disposal is managed through a certified recycler, with logistics written into the YAC governance framework.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <h3>Impact on Future Community Workings</h3>
            <p>By Year 5, the transition fundamentally changes how the outstation functions. Ranger operations, fire management, biodiversity monitoring and emergency response become year-round rather than dry-season-only, as power is no longer dependent on fuel delivery. The removal of diesel resupply as a critical logistics constraint also reduces the community's vulnerability to wet season road closures and frees YAC's budget from recurring fuel costs, redirecting those savings toward community priorities. The governance framework co-developed in Phase 1 gives YAC a documented process for managing energy infrastructure independently, a model that can be extended to other community assets over time.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
