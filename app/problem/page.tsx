import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Problem() {
  return (
    <div>
      <SectionHero num="02" title="Problem Description" subtitle="The user need statement, root causes, and five design criteria developed from community context, environmental conditions, and technical requirements." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">

        <ScrollReveal>
          <div className="rounded-xl p-6 mb-8" style={{ background: 'var(--forest)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'rgba(74,222,128,0.7)' }}>User Need Statement</p>
            <p className="text-base leading-relaxed font-medium text-white italic">
              "Lama Lama outstations urgently need a reliable, affordable, and community-governed energy source to replace total dependence on externally supplied diesel generators, which fail unpredictably, cut safety-critical services during wet season supply disruptions, and undermine the community's self-determination on Country."
            </p>
          </div>
        </ScrollReveal>

        <div className="prose">
          <ScrollReveal delay={0.05}>
            <p>
              The root cause is not merely a lack of electricity but a supply chain entirely outside community control. The ideal outcome is a system providing three or more days of battery autonomy for essential services, expandable by the community, cheaper over its lifecycle than diesel, and governed by the Lama Lama people as an expression of sovereignty over Country.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>3.1 Design Criteria</h3>
            <p>Five criteria were developed through synthesis of community context, environmental conditions, and technical requirements.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="not-prose flex flex-col gap-3 mb-8">
              {[
                {
                  n: '1',
                  title: 'Climatic Viability',
                  body: 'The system must operate reliably in a tropical cyclone zone with temperatures regularly exceeding 35°C, seasonal flooding, and high humidity. All structural components must meet cyclone Category 4 wind loading standards and battery enclosures must incorporate thermal management to limit capacity loss (Bureau of Meteorology, 2024; Gaonkar et al., 2024).',
                  just: 'Lama Lama Country\'s climate is among the most demanding in Australia for electrical infrastructure. A system that cannot survive the wet season or that degrades rapidly in heat replicates diesel\'s unreliability without reducing it.',
                },
                {
                  n: '2',
                  title: 'Safety-Critical Service Continuity',
                  body: 'The system must maintain power to lighting, refrigeration, and radio communications for a minimum of three consecutive days without solar input, covering extended wet season cloud-cover periods. Refrigeration covers both food and medical supplies. Three days of battery autonomy prevents diesel activation during the worst cloud-cover events (EWB, 2025b).',
                  just: '',
                },
                {
                  n: '3',
                  title: 'Community Operability',
                  body: 'The system must be operable and maintainable by trained community members without specialist technicians for routine tasks. System status must be readable without technical background. A system requiring manufacturer servicing for any fault replicates diesel dependency; genuine self-determination requires genuine operational capacity, directly reflecting YAC\'s governance mandate (Independent Australia, 2025).',
                  just: '',
                },
                {
                  n: '4',
                  title: 'Ecological and Cultural Non-Disturbance',
                  body: 'Installation must not require vegetation clearance, soil disturbance, or alteration beyond existing building footprints. Siting must avoid culturally significant areas and habitats for protected fauna (Lama Lama Aboriginal Corporation, 2024; EWB, 2025b). Infrastructure damaging Country is incompatible with community values and would undermine project support; the design must meet obligations under the Native Title Act.',
                  just: '',
                },
                {
                  n: '5',
                  title: 'Lifecycle Cost Efficiency',
                  body: 'The total 20-year cost including capital, freight, maintenance, and end-of-life disposal must be demonstrably lower than a diesel-only arrangement, or achievable at a realistic net community outlay after grants. Capital cost must not be prohibitive prior to grant application (ARENA, 2023; Australian Energy Regulator, 2023). Cost efficiency over the full lifecycle — not just upfront cost — determines lasting benefit.',
                  just: '',
                },
              ].map(({ n, title, body, just }) => (
                <div key={n} className="flex gap-4 rounded-lg p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5" style={{ background: 'var(--pine)', color: 'rgba(74,222,128,0.9)' }}>{n}</div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: 'var(--ink)' }}>{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{body}</p>
                    {just && <p className="text-sm leading-relaxed mt-1 italic" style={{ color: 'var(--ink-faint)' }}>Justification: {just}</p>}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
