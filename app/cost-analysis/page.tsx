import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function CostAnalysis() {
  return (
    <div>
      <SectionHero num="08" title="Cost Analysis" subtitle="Full bill of materials, funding pathway, and lifecycle savings. All costs in AUD. Phase 1, 4–6 buildings." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>All costs are in Australian dollars (AUD). The outstation is assumed to contain 4–6 buildings. Prices are sourced from the Clean Energy Council (2023), ARENA (2023), and industry supplier estimates as cited.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="not-prose overflow-x-auto mb-2">
              <table className="matrix" style={{ minWidth: 500 }}>
                <thead>
                  <tr><th>Item</th><th>Qty / Unit</th><th>AUD (est.)</th><th>Notes / Source</th></tr>
                </thead>
                <tbody>
                  <tr><td>Monocrystalline PV panels (400 W each, 12 panels total 4.8 kW)</td><td>12 panels</td><td>$6,000–$8,400</td><td>Clean Energy Council, 2023</td></tr>
                  <tr><td>LiFePO4 battery bank (20 kWh usable, 3-day autonomy)</td><td>1 system</td><td>$18,000–$24,000</td><td>ARENA, 2023</td></tr>
                  <tr><td>Hybrid inverter-charger (5 kW, Victron MultiPlus or equiv.)</td><td>1 unit</td><td>$3,500–$5,000</td><td>Supplier quote</td></tr>
                  <tr><td>Rooftop mounting hardware (cyclone-rated, marine grade)</td><td>Lump sum</td><td>$4,000–$6,000</td><td>EWB, 2025b</td></tr>
                  <tr><td>Traffic-light monitoring display unit</td><td>1 unit</td><td>$800–$1,200</td><td>Custom / off-shelf</td></tr>
                  <tr><td>Cabling, conduit, circuit protection (marine grade)</td><td>Lump sum</td><td>$3,000–$5,000</td><td>EWB, 2025e; Gaonkar et al., 2024</td></tr>
                  <tr><td>Battery enclosure with passive ventilation</td><td>1 unit</td><td>$2,000–$3,500</td><td>Gaonkar et al., 2024</td></tr>
                  <tr><td>Freight (light aircraft / barge / 4WD logistics)</td><td>Lump sum</td><td>$8,000–$15,000</td><td>EWB, 2025</td></tr>
                  <tr><td>Installation labour (certified sparky + community)</td><td>10–15 days</td><td>$12,000–$18,000</td><td>Industry estimate</td></tr>
                  <tr><td>Bushlight-model training programme (Year 1)</td><td>Per program</td><td>$5,000–$8,000</td><td>Independent Australia, 2025</td></tr>
                  <tr><td>Annual maintenance (Years 2–5)</td><td>Per annum</td><td>$3,000–$5,000</td><td>ARENA, 2023</td></tr>
                  <tr><td>Battery replacement (Year 10–15 estimate)</td><td>1 system</td><td>$15,000–$20,000</td><td>Gaonkar et al., 2024</td></tr>
                  <tr className="winner"><td><strong>TOTAL INSTALLATION (Phase 1)</strong></td><td>—</td><td><strong>$62,300–$94,100</strong></td><td>—</td></tr>
                  <tr><td>Less ARENA grant (up to 50% eligible costs)</td><td>—</td><td>–$31,000–$47,000</td><td>ARENA Remote Off-Grid Program</td></tr>
                  <tr><td>Less Qld First Nations Clean Energy Strategy</td><td>—</td><td>–$10,000–$20,000</td><td>Qld Govt, 2024</td></tr>
                  <tr className="winner"><td><strong>NET COMMUNITY OUTLAY (est.)</strong></td><td>—</td><td><strong>$5,300–$27,100</strong></td><td>Subject to application success</td></tr>
                </tbody>
              </table>
              <p className="text-xs italic mt-2" style={{ color: 'var(--ink-faint)' }}>Table 4: Bill of Materials and cost estimate for Phase 1 installation. All prices AUD. Sources cited in final column.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Lifecycle Savings</h3>
            <p>Bushlight communities reported $5,500/household/year in fuel savings (Independent Australia, 2025), totalling approximately $440,000 over 20 years for a four-building outstation. ARENA grants can cover up to 50% of eligible costs and the Queensland First Nations Clean Energy Strategy targets Cape York specifically (Queensland Government, 2024), reducing net community outlay to $5,300–$27,100.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
