import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Problem() {
  return (
    <div>
      <SectionHero
        num="02"
        title="Problem Description"
        subtitle="The user need statement, root causes, design criteria, and limitations of existing solutions."
      />
      <div className="px-8 md:px-16 py-12 max-w-3xl">

        <ScrollReveal>
          <div
            className="rounded-xl p-6 mb-10"
            style={{ background: 'var(--forest)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'rgba(74,222,128,0.7)' }}>
              User Need Statement
            </p>
            <p className="text-base leading-relaxed font-medium text-white italic">
              "Remote Lama Lama community members on Cape York Peninsula need a reliable, affordable, and sustainable
              energy source that supports daily living, safety, and cultural self-determination, independent of
              diesel supply chains."
            </p>
            <p className="text-xs mt-3" style={{ color: 'rgba(200,230,215,0.45)' }}>
              (Engineers Without Borders Australia, 2025; Lama Lama Land and Sea Rangers, n.d.)
            </p>
          </div>
        </ScrollReveal>

        <div className="prose">
          <ScrollReveal delay={0.06}>
            <p>
              The problem facing the Lama Lama outstations is not simply a lack of electricity — it is a structural
              dependence on an energy source entirely outside the community's control. Diesel generators currently
              provide the sole power supply, with fuel transported over roads that become impassable during the
              wet season. When supply fails, the consequences are not inconveniences: there is no refrigeration
              for food or medicine, no radio communications for safety and ranger coordination, and no lighting
              after dark. These are active safety failures, not comfort gaps.
            </p>
            <p>
              The critical dimension of the problem is self-determination. A community that cannot guarantee its
              own power supply cannot independently maintain the health, safety, and cultural activities that define
              life on Country.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Root Causes</h3>
            <p>
              Three interconnected root causes sustain the problem. First, the existing diesel supply chain is
              geographically fragile: the wet season regularly cuts road access for months, and the cost and
              logistical complexity of emergency resupply by air or barge is prohibitive. Second, the current
              infrastructure creates no local technical capacity — the community depends on outside contractors
              for generator maintenance. Third, prior solutions trialled across remote Indigenous Australia have
              generally been designed for urban or mild-climate contexts and serviced by manufacturers, meaning
              any fault requires external intervention, directly undermining community self-sufficiency
              (Australian Renewable Energy Agency, 2020).
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 id="design-criteria">2.1 Design Criteria</h3>
            <p>
              A solution must meet all three criteria simultaneously — meeting only one or two does not constitute
              a viable outcome for the Lama Lama community.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="flex flex-col gap-3 not-prose mb-8">
              {[
                {
                  n: '1',
                  title: 'Reduce Diesel Dependence',
                  body: 'Address the root cause — not merely reduce costs while leaving the community exposed to the same supply chain vulnerabilities. Diesel dependence must be systematically reduced toward elimination.',
                },
                {
                  n: '2',
                  title: 'Essential Service Reliability',
                  body: 'Lighting (safety and after-dark use), refrigeration (food and medicine), and radio communications (emergency and ranger coordination) are safety-critical services. The solution must maintain these reliably, including during extended wet season cloud cover.',
                },
                {
                  n: '3',
                  title: 'Community-Appropriate',
                  body: 'The solution must be locally manageable without specialist intervention, scalable within the community\'s growing capability, and governed by the Lama Lama people and the Yintjingga Aboriginal Corporation.',
                },
              ].map(({ n, title, body }) => (
                <div
                  key={n}
                  className="flex gap-4 rounded-lg p-5"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5"
                    style={{ background: 'var(--pine)', color: 'rgba(74,222,128,0.9)' }}
                  >
                    {n}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <h3>Existing Solutions and Their Limitations</h3>
            <table>
              <thead>
                <tr>
                  <th>Solution</th>
                  <th>Reduces Diesel</th>
                  <th>Reliable Power</th>
                  <th>Community-Appropriate</th>
                  <th>Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Commercial off-grid solar kits</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>No — manufacturer-serviced</td>
                  <td>Fails criterion 3</td>
                </tr>
                <tr>
                  <td>Hybrid diesel-solar systems</td>
                  <td>Partially</td>
                  <td>Yes</td>
                  <td>No — complex, diesel-dependent</td>
                  <td>Fails criteria 1 &amp; 3</td>
                </tr>
                <tr>
                  <td>Grid connection</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Physically impossible</td>
                </tr>
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
