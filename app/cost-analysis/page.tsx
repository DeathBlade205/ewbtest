import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function CostAnalysis() {
  return (
    <div>
      <SectionHero num="08" title="Cost Analysis" subtitle="Installation estimates, annual savings over diesel, and the funding pathway through ARENA and Queensland Government." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal><p>The Clean Energy Council (2023) reports that off-grid rooftop solar and battery systems in remote Australia typically cost $15,000–$30,000 per dwelling. For a four-to-six structure outstation, total installation is estimated at $80,000–$120,000 (Australian Renewable Energy Agency, 2023).</p></ScrollReveal>
          <ScrollReveal delay={0.06}>
            <table className="matrix">
              <thead><tr><th>Cost Category</th><th>Estimate (AUD)</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Rooftop PV panels (all buildings)</td><td>$18,000–$28,000</td><td>0.5–1.5 kW per building; micro-inverters and mounting hardware</td></tr>
                <tr><td>LFP battery bank (20–30 kWh)</td><td>$20,000–$35,000</td><td>Flood-safe central installation</td></tr>
                <tr><td>Hybrid inverter hub</td><td>$8,000–$12,000</td><td>Manages PV, battery, diesel and AC output</td></tr>
                <tr><td>Traffic-light monitoring display</td><td>$1,000–$2,000</td><td>Wired to inverter charge state signal</td></tr>
                <tr><td>Wiring, distribution, labour</td><td>$15,000–$22,000</td><td>Licensed electrician remote site travel included</td></tr>
                <tr><td>Transport (air, barge, 4WD)</td><td>$10,000–$15,000</td><td>Modular components sized within freight limits</td></tr>
                <tr><td>Contingency (10%)</td><td>$7,000–$11,000</td><td>Remote deployment buffer</td></tr>
                <tr className="winner"><td><strong>Total</strong></td><td><strong>$80,000–$120,000</strong></td><td>Consistent with CEC benchmarks for 4–6 structure remote outstations</td></tr>
              </tbody>
            </table>
          </ScrollReveal>
          <ScrollReveal delay={0.08}><h3>Savings and Cost Recovery</h3><p>Bushlight communities reported average savings of $5,500 per household per year over diesel (Centre for Appropriate Technology, n.d.) — capturing only direct fuel costs. The compounding costs of emergency resupply flights, generator downtime, and extended outage productivity losses mean the true financial advantage is considerably greater. Cost recovery is estimated within 15–20 years (Australian Renewable Energy Agency, 2023).</p></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3>Funding Pathway</h3>
            <div className="infobox">
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--pine)' }}>ARENA Remote and Off-Grid Communities Program — $40,000–$60,000</p>
              <p className="text-sm mb-3" style={{ color: 'var(--ink-muted)' }}>Up to 50% of eligible project costs. Well-precedented across remote Indigenous Australia. The Yintjingga Aboriginal Corporation's governance structure strengthens any application considerably (Australian Renewable Energy Agency, 2020).</p>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--pine)' }}>QLD First Nations Clean Energy Strategy — Complementary</p>
              <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>Commits funding specifically to remote Indigenous energy projects in Cape York and the Gulf (Independent Australia, 2025).</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
