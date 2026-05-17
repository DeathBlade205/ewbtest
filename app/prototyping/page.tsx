import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Prototyping() {
  return (
    <div>
      <SectionHero num="06" title="Prototyping" subtitle="A 1:50 scale physical model validating the distributed rooftop PV layout across three building types." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>What Was Prototyped and Why</h3>
            <p>The energy system's distributed rooftop PV arrangement was prioritised for prototyping, as roof geometry, panel orientation, and spatial fit across three different building types were the primary unknowns in the design. A physical 1:50 scale model was chosen over digital rendering because it can be handled and understood without technical literacy, making it appropriate for direct presentation to the YAC and Rangers during community consultation.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Construction</h3>
            <p>The model was constructed at 1:50 scale using laser-cut cardboard for building forms and 3D-printed components for panel modules and mounting brackets, representing the three building types present at the outstation.</p>
            <table>
              <thead><tr><th>Building</th><th>Roof Type</th><th>PV Capacity</th><th>Model Material</th></tr></thead>
              <tbody>
                <tr><td>Ranger Base</td><td>Sloped corrugated-iron</td><td>1.5 kW</td><td>Laser-cut cardboard + 3D-printed panels</td></tr>
                <tr><td>Communal Kitchen</td><td>Flat concrete slab</td><td>1.0 kW</td><td>Laser-cut cardboard + 3D-printed panels</td></tr>
                <tr><td>Dwelling</td><td>Sheltered carport</td><td>0.5 kW</td><td>Laser-cut cardboard + 3D-printed panels</td></tr>
              </tbody>
            </table>
            <p className="fig-caption">Table 2: Each building type and their components used</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Testing and Results</h3>
            <p>The model was tested by physically orienting each building form toward true north and assessing panel placement for shading conflicts, tilt suitability, and spatial clearance. Results are summarised below.</p>
            <table>
              <thead><tr><th>Test</th><th>What Was Checked</th><th>Result</th></tr></thead>
              <tbody>
                <tr><td>Roof area adequacy</td><td>Sufficient panel footprint on each roof</td><td>✓ Confirmed across all three buildings</td></tr>
                <tr><td>North-facing orientation</td><td>Panel alignment toward true north</td><td>✓ Confirmed across all three buildings</td></tr>
                <tr><td>Tilt angle suitability</td><td>Angle of slope on corrugated-iron roof</td><td>✓ Suitable — no ridgeline or structural obstruction</td></tr>
                <tr><td>Shading conflicts</td><td>Adjacent structures blocking panel exposure</td><td>✓ None identified</td></tr>
                <tr><td>Battery enclosure fit</td><td>Space available adjacent to Ranger Base</td><td>✓ Confirmed — sufficient sheltered clearance</td></tr>
                <tr><td>Roof geometry compatibility</td><td>Any irregular forms preventing panel mounting</td><td>✓ No incompatible geometries found</td></tr>
              </tbody>
            </table>
            <p className="fig-caption">Table 3: Results of testing the model types and how each test was checked</p>
            <p>All tests passed without requiring design modifications. The prototype successfully validated the rooftop PV layout prior to finalising the system design. Full testing notes and additional photographs of the model are provided in Appendix 2 for reference.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>What Remains to Be Tested</h3>
            <div className="placeholder">Full electrical system integration testing — including real inverter-battery-PV interaction under tropical load conditions — requires on-site installation and cannot be completed within the scope of this project. This testing should be conducted during Phase 1 installation at the ranger base.</div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
