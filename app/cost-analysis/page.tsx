export default function CostAnalysis() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 8</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Cost Analysis</h1>

      <h3>Installation Cost Estimate</h3>
      <p>
        The Clean Energy Council (2023) reports that off-grid rooftop solar and battery systems in remote Australia typically cost between $15,000 and $30,000 per dwelling, reflecting the significant transport, logistics, and installation premium associated with remote locations. For a four-to-six structure outstation — consistent with the scale of the Lama Lama ranger outstation — total installation cost is estimated at $80,000 to $120,000 (Australian Renewable Energy Agency, 2023).
      </p>

      <table className="matrix">
        <thead>
          <tr>
            <th>Cost Category</th>
            <th>Estimate (AUD)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rooftop PV panels (all buildings)</td>
            <td>$18,000 – $28,000</td>
            <td>0.5–1.5 kW per building; includes micro-inverters and mounting hardware</td>
          </tr>
          <tr>
            <td>LFP battery bank (20–30 kWh)</td>
            <td>$20,000 – $35,000</td>
            <td>Lithium iron phosphate; flood-safe central installation</td>
          </tr>
          <tr>
            <td>Hybrid inverter hub</td>
            <td>$8,000 – $12,000</td>
            <td>Manages PV, battery, diesel, and AC output</td>
          </tr>
          <tr>
            <td>Traffic-light monitoring display</td>
            <td>$1,000 – $2,000</td>
            <td>Simple three-state display; wired to inverter charge state signal</td>
          </tr>
          <tr>
            <td>Wiring, distribution, and installation labour</td>
            <td>$15,000 – $22,000</td>
            <td>Includes licensed electrician travel to remote site</td>
          </tr>
          <tr>
            <td>Transport (air freight, barge, 4WD)</td>
            <td>$10,000 – $15,000</td>
            <td>Components transported in modular sections within air/barge freight limits</td>
          </tr>
          <tr>
            <td>Contingency (10%)</td>
            <td>$7,000 – $11,000</td>
            <td>Remote deployment contingency for delays, damage, and unforeseen costs</td>
          </tr>
          <tr className="winner">
            <td><strong>Total Estimated Installation</strong></td>
            <td><strong>$80,000 – $120,000</strong></td>
            <td>Consistent with Clean Energy Council (2023) benchmarks for 4–6 structure remote outstations</td>
          </tr>
        </tbody>
      </table>

      <h3>Ongoing Costs</h3>
      <p>
        Ongoing costs are substantially lower than equivalent diesel operation. Panel cleaning and routine inspection can be performed by trained community members at negligible cost. Battery module replacement is expected after approximately 10 years of operation. An annual maintenance allowance of $3,000–$5,000 is recommended, including a remote technical support retainer with CfAT or equivalent and one site visit per year during the transition period.
      </p>
      <p>
        Against this, Bushlight communities reported average savings of $5,500 per household per year over diesel (Centre for Appropriate Technology, n.d.). This figure captures only direct fuel costs — it does not include the compounding costs of emergency resupply flights, generator downtime, or productivity and health losses during extended outages, all of which are real costs borne by remote communities on 100% diesel generation. The true financial advantage of the proposed system is considerably greater than the direct fuel saving alone.
      </p>

      <h3>Cost Recovery</h3>
      <p>
        At $5,500 per household per year in savings and a total installation cost of $80,000–$120,000 (before funding), cost recovery for a five-dwelling outstation is estimated at 15–20 years (Australian Renewable Energy Agency, 2023). This estimate is conservative: it uses only direct fuel savings, assumes no escalation in diesel fuel prices, and does not account for the avoided costs of emergency resupply or generator maintenance.
      </p>

      <h3>Funding Pathway</h3>
      <div className="infobox">
        <p className="text-sm font-semibold text-[#145c3e] mb-2">Available Funding Sources</p>
        <p className="text-sm mb-3">
          <strong>ARENA Remote and Off-Grid Communities Program</strong><br/>
          Estimated: $40,000–$60,000 (up to 50% of eligible project costs)<br/>
          ARENA has funded comparable installations across remote Indigenous Australia. The Yintjingga Aboriginal Corporation's governance structure and the project's alignment with demonstrated Bushlight and ARENA precedents strengthens any application considerably (Australian Renewable Energy Agency, 2020).
        </p>
        <p className="text-sm">
          <strong>Queensland Government First Nations Clean Energy Strategy</strong><br/>
          Complementary stream committing funding specifically to remote Indigenous energy projects in Cape York and the Gulf (Independent Australia, 2025). The geographic specificity of this program makes the Lama Lama outstation a strong candidate for co-funding alongside ARENA support.
        </p>
      </div>
      <p>
        Together, these two funding sources make a fully funded installation a realistic goal. With $40,000–$60,000 from ARENA covering up to half of total costs, the remaining community contribution — or Queensland Government co-funding — is a tractable gap given the strength of the project's alignment with both programs' stated objectives.
      </p>
    </div>
  )
}
