export default function Prototyping() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 6</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Prototyping</h1>

      <p>
        Given the remote and logistically constrained nature of the Lama Lama outstations, physical construction of a full-scale prototype was not feasible within the scope of this project. Prototyping was instead conducted through two complementary methods: a systems architecture schematic validated against published technical specifications, and a reference case analysis of comparable real-world deployments.
      </p>

      <h3>System Architecture Schematic</h3>
      <p>
        A detailed system architecture diagram was developed mapping the full power flow from each generation point through to end-use loads. The schematic confirms the integration logic between all four system components:
      </p>
      <ul>
        <li>Rooftop PV panels at each building (ranger base 1.5 kW, communal kitchen 1.0 kW, dwellings 0.5 kW) output solar DC independently via micro-inverters.</li>
        <li>Solar DC feeds into the hybrid inverter hub, which manages charge state and converts to AC output.</li>
        <li>The LFP battery bank charges from solar surplus and discharges to supply loads when generation is insufficient.</li>
        <li>The charge state signal drives the traffic-light monitoring display and triggers diesel generator activation below 20% battery charge.</li>
        <li>The battery discharges 240 V AC to the outstation, powering lighting, refrigeration, and radio communications as essential services.</li>
      </ul>
      <p>
        The schematic was reviewed against manufacturer specifications for commercially available hybrid inverter systems and LFP battery banks used in comparable Australian off-grid deployments, confirming the integration approach is technically sound and consistent with current industry practice (Australian Renewable Energy Agency, 2023).
      </p>

      <h3>Reference Case: The Bushlight Program</h3>
      <p>
        The primary real-world prototype reference is the Bushlight program, operated by the Centre for Appropriate Technology (CfAT) across remote Indigenous communities in northern and central Australia. Bushlight installed and maintained off-grid solar and battery systems at over 180 remote outstations, specifically including communities in Cape York and Queensland's Gulf Country — environments directly comparable to Lama Lama Country in climate, remoteness, and governance structure.
      </p>
      <p>
        Bushlight demonstrated that community-managed off-grid solar systems can reliably power essential services — lighting, refrigeration, and communications — at remote outstations without ongoing external technical support, provided the training program is comprehensive and locally owned (Centre for Appropriate Technology, n.d.). The program reported average annual savings of $5,500 per household over diesel, with communities sustaining system operation independently for extended periods. These outcomes directly validate the three key claims of the proposed design: that essential service reliability is achievable, that community manageability is realistic with appropriate training, and that the financial case for transition is strong.
      </p>

      <h3>Validation Against Design Criteria</h3>
      <p>
        The schematic and reference case together provide confidence across all three design criteria:
      </p>
      <ul>
        <li><strong>Diesel dependence:</strong> The Bushlight reference confirms that communities at comparable sites have successfully reduced diesel to emergency-only status over a staged transition period, consistent with the five-year pathway proposed here.</li>
        <li><strong>Essential service reliability:</strong> A 20–30 kWh LFP battery sized for three days autonomy is consistent with battery sizing at Bushlight outstations serving comparable load profiles, and covers the wet season cloud cover periods documented in Bureau of Meteorology data for Cape York (Bureau of Meteorology, 2024).</li>
        <li><strong>Community-appropriateness:</strong> The traffic-light monitoring interface and Bushlight training model have both been validated at communities with similar governance structures and technical capacity profiles to the Lama Lama rangers.</li>
      </ul>

      <h3>ARENA Precedent</h3>
      <p>
        ARENA's Solar Energy Transformation Program (ARENA, 2025) provides a further reference case: 25 remote Indigenous communities in the Northern Territory transitioned from diesel primary generation to solar-plus-battery hybrid systems through a staged process directly analogous to the five-year transition proposed here. These communities achieved diesel reduction to emergency-only status while maintaining essential service reliability throughout the transition — demonstrating at scale that the proposed approach is not experimental but proven.
      </p>
    </div>
  )
}
