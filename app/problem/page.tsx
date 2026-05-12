export default function Problem() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 2</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Problem Description</h1>

      <h3>User Need Statement</h3>
      <div className="infobox">
        <p className="text-sm italic text-[#145c3e]">
          Remote Lama Lama community members on Cape York Peninsula need a reliable, affordable, and sustainable energy source that supports daily living, safety, and cultural self-determination, independent of diesel supply chains.
        </p>
        <p className="text-xs text-gray-500 mt-2">(Engineers Without Borders Australia, 2025; Lama Lama Land and Sea Rangers, n.d.)</p>
      </div>

      <p>
        The problem facing the Lama Lama outstations is not simply a lack of electricity — it is a structural dependence on an energy source entirely outside the community's control. Diesel generators currently provide the sole power supply, with fuel transported over roads that become impassable during the wet season. When supply fails, the consequences are not inconveniences: there is no refrigeration for food or medicine, no radio communications for safety and ranger coordination, and no lighting after dark. These are active safety failures, not comfort gaps.
      </p>

      <p>
        The critical dimension of the problem is self-determination. A community that cannot guarantee its own power supply cannot independently maintain the health, safety, and cultural activities that define life on Country. Any solution that reduces diesel costs while leaving control of the energy system outside community hands does not address the root cause of the problem.
      </p>

      <h3>Root Causes</h3>
      <p>
        Three interconnected root causes sustain the problem. First, the existing diesel supply chain is geographically fragile: the wet season regularly cuts road access for months, and the cost and logistical complexity of emergency resupply by air or barge is prohibitive. Second, the current infrastructure creates no local technical capacity — the community depends on outside contractors for generator maintenance and cannot address faults independently. Third, prior solutions trialled across remote Indigenous Australia have generally been designed for urban or mild-climate contexts and serviced by manufacturers, meaning any fault requires external intervention, directly undermining community self-sufficiency (Australian Renewable Energy Agency, 2020).
      </p>

      <h3 id="design-criteria">2.1 Design Criteria</h3>
      <p>
        The following three criteria were identified as necessary and sufficient for a viable solution. A solution must meet all three simultaneously — meeting only one or two does not constitute a viable outcome for the Lama Lama community.
      </p>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Criterion</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>Reduce Diesel Dependence</strong></td>
            <td>The solution must address the root cause — not merely reduce costs while leaving the community exposed to the same supply chain vulnerabilities. Diesel dependence must be systematically reduced toward elimination.</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Essential Service Reliability</strong></td>
            <td>Lighting (safety and after-dark use), refrigeration (food and medicine), and radio communications (emergency and ranger coordination) are safety-critical services. The solution must maintain these reliably, including during extended wet season cloud cover.</td>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Community-Appropriate</strong></td>
            <td>The solution must be locally manageable without specialist intervention, scalable within the community's growing capability, and governed by the Lama Lama people and the Yintjingga Aboriginal Corporation — producing energy sovereignty, not dependency.</td>
          </tr>
        </tbody>
      </table>

      <h3>Existing Solutions and Their Limitations</h3>
      <p>
        Three existing solution types were reviewed against these criteria (Engineers Without Borders Australia, 2025):
      </p>

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

      <p>
        None of the existing solutions satisfy all three criteria simultaneously under the specific conditions of Lama Lama Country. This gap defines the design space that the proposed solution addresses.
      </p>
    </div>
  )
}
