import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Prototyping() {
  return (
    <div>
      <SectionHero num="07" title="Prototyping" subtitle="A labelled system architecture diagram built in Canva, tested through three internal group review sessions." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">

          <ScrollReveal>
            <h3>Identifying What to Prototype</h3>
            <p>A working physical prototype of the full microgrid was not feasible within the project scope or geography, and the individual components (monocrystalline PV panels, LiFePO4 batteries, hybrid inverters) are commercially mature and already proven in remote Australian deployments through ARENA's SETuP program and CfAT's Bushlight Project (Independent Australia, 2025). The aspect of the design that required prototyping was the system architecture: how the five subsystems connect, where power and signal flow, and where the community-facing interface sits in relation to the back-end equipment. This is also the artefact that will be presented to YAC during co-design consultation, so it needed to be readable by stakeholders without an engineering background.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Construction and Function</h3>
            <p>The prototype was constructed as a labelled diagram made with Canva and their in-built elements. Each subsystem is represented at its real-world location, arrows are annotated with the form and direction of flow (<em>Solar DC</em>, <em>Backup AC</em>, <em>Charge / Discharge</em>, <em>Charge state signal</em>, <em>240 V AC to Outstation</em>), and capacity figures appear directly on the components so the diagram doubles as a high-level specification. The full prototype is shown below in Figure 4, complemented by Figure 2 (functional block diagram) and Figure 3 (traffic-light interface mock-up). Table 2 maps the visual elements to the design decisions they communicate.</p>

            <div className="not-prose overflow-x-auto mb-6">
              <table className="matrix" style={{ minWidth: 500 }}>
                <thead>
                  <tr><th>Visual element</th><th>Design decision communicated</th><th>Criterion addressed</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Three rooftop PV blocks on building outlines</td>
                    <td>No ground footprint or vegetation clearance</td>
                    <td>Ecological and Cultural Non-Disturbance</td>
                  </tr>
                  <tr>
                    <td>Battery, inverter and generator co-located</td>
                    <td>Centralised maintenance and fault diagnosis</td>
                    <td>Community Operability</td>
                  </tr>
                  <tr>
                    <td>Diesel generator drawn to the side with <em>Backup AC</em> arrow flowing inward</td>
                    <td>Diesel repositioned as fallback, not primary</td>
                    <td>Safety-Critical Service Continuity</td>
                  </tr>
                  <tr>
                    <td>Traffic-light block with thresholds labelled</td>
                    <td>At-a-glance status without technical literacy</td>
                    <td>Community Operability</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs italic mt-2" style={{ color: 'var(--ink-faint)' }}>Table 2: Mapping of prototype visual elements to design decisions and criteria.</p>
            </div>

            <div className="not-prose my-6">
              <img
                src="/fig1-system-architecture.png"
                alt="FIGURE 4: System architecture block diagram — distributed rooftop PV panels on Ranger Base, Communal Kitchen, and Dwelling feeding shared battery bank, hybrid inverter hub, diesel fallback and traffic-light monitoring display"
                className="w-full rounded-lg"
                style={{ border: '1px solid var(--border)' }}
              />
              <p className="text-xs italic mt-2 text-center" style={{ color: 'var(--ink-faint)' }}>
                FIGURE 4: System architecture block diagram distributed rooftop PV panels feeding shared battery bank and hybrid inverter hub with diesel fallback and monitoring display
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Testing Through Internal Group Review</h3>
            <p>Testing consisted of structured internal group review across three working sessions, with each revision assessed against the five design criteria from Section 3.1 and against the readability standard that a non-technical viewer should be able to interpret the diagram unaided. Each session produced a list of changes, which were implemented before the next review. Table 3 records the iteration history.</p>

            <div className="not-prose overflow-x-auto mb-2">
              <table className="matrix" style={{ minWidth: 500 }}>
                <thead>
                  <tr><th>Iteration</th><th>Issue identified in review</th><th>Change implemented</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Version 1 → Version 2</td>
                    <td>Diesel generator drawn upstream of the inverter hub, implying it was a primary source</td>
                    <td>Repositioned alongside the hub with a <em>Backup AC</em> arrow flowing inward only</td>
                  </tr>
                  <tr>
                    <td>Version 2 → Version 3</td>
                    <td>Threshold values for the traffic-light display were not visible on the diagram</td>
                    <td>Added the &gt;50% / 20–50% / &lt;20% legend directly to the display block</td>
                  </tr>
                  <tr>
                    <td>Version 3 → Version 4</td>
                    <td>Rooftop solar arrangement and battery layout not immediately clear to a non-technical reader</td>
                    <td>Added clearer labels and captions, agreed at the 11/5/2026 team meeting (Appendix 2)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs italic mt-2" style={{ color: 'var(--ink-faint)' }}>Table 3: Prototype iteration history from internal group review.</p>
            </div>

            <p>By v4, the group agreed the prototype satisfied all five design criteria visually and was ready to support a future YAC consultation. The earlier-iteration draft images are provided in Appendix 2 for reference.</p>
          </ScrollReveal>

        </div>
      </div>
    </div>
  )
}
