export default function DesignSelection() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Section 4</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Design Selection</h1>

      <p>
        The three design options were evaluated using a weighted decision matrix scored against five criteria. Each criterion was weighted to reflect its relative importance in the Lama Lama context, and each idea was scored 1–5 against each criterion. Weighted scores (criterion weight × raw score) were summed to produce a total for each idea.
      </p>

      <h3>Criteria and Weightings</h3>
      <p>
        Viability (weight 5) and desirability (weight 4) carry the greatest influence, reflecting that a system must first survive Cape York's extreme environmental conditions and genuinely fit the community's cultural context before any other consideration applies. Cost (weight 4) captures both upfront and long-term expense relative to continued diesel dependency. Competency (weight 3) assesses the degree to which the system can be operated and maintained locally without specialist intervention. Alignment (weight 2) measures fit with the EWB Challenge Project 3.2 requirements for modular, co-designed solutions.
      </p>

      <h3>Decision Matrix</h3>
      <table className="matrix">
        <thead>
          <tr>
            <th>Criterion</th>
            <th>Weight</th>
            <th>Idea A Score</th>
            <th>Idea A Weighted</th>
            <th>Idea B Score</th>
            <th>Idea B Weighted</th>
            <th>Idea C Score</th>
            <th>Idea C Weighted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Viability</td>
            <td>5</td>
            <td>3</td>
            <td>15</td>
            <td>5</td>
            <td>25</td>
            <td>3</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Desirability</td>
            <td>4</td>
            <td>1</td>
            <td>4</td>
            <td>3</td>
            <td>12</td>
            <td>1</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>4</td>
            <td>3</td>
            <td>12</td>
            <td>3</td>
            <td>12</td>
            <td>2</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Competency</td>
            <td>3</td>
            <td>1</td>
            <td>3</td>
            <td>5</td>
            <td>15</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Alignment</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
            <td>8</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr className="winner">
            <td><strong>Total</strong></td>
            <td>—</td>
            <td>—</td>
            <td><strong>36</strong></td>
            <td>—</td>
            <td><strong>72</strong></td>
            <td>—</td>
            <td><strong>32</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Justification for Idea B</h3>
      <p>
        Idea B scores highest by a substantial margin (72 vs 36 and 32), and the spread reflects genuine and important differences rather than marginal preferences.
      </p>
      <p>
        On viability, Ideas A and C both score 3. Idea A creates a single point of failure in a location where fault resolution requires external intervention — unacceptable in an environment that may be cut off for months. Idea C provides no fallback during extended cloud cover, risking complete loss of safety-critical services. Idea B scores 5: rooftop distribution localises faults to individual buildings, the diesel fallback guarantees wet season continuity, and the five-year staged transition ensures the system is never deployed beyond what the community can reliably manage at any given point (Australian Renewable Energy Agency, 2025).
      </p>
      <p>
        On desirability and competency, Ideas A and C both score 1. Idea A requires vegetation clearing directly on Country, conflicting with the community's custodial responsibilities. Idea C multiplies maintenance points across isolated per-building systems, exceeding realistic community management capacity. Idea B scores 3 on desirability — the partial compromise of retaining diesel is offset by zero land clearing and long-term savings — and 5 on competency, with the Bushlight-proven training model confirming that communities at comparable remote sites have successfully maintained equivalent systems independently (Centre for Appropriate Technology, n.d.).
      </p>
      <p>
        On cost, Ideas A and B both score 3, reflecting that higher upfront costs are justified by demonstrated long-term savings over diesel dependency. Idea C scores 2 due to prohibitive per-building battery oversizing required in the absence of shared storage and fallback.
      </p>
      <p>
        Idea B's alignment score of 4 reflects its modular, scalable architecture and explicit co-design orientation, which directly satisfies the EWB Challenge Project 3.2 requirements.
      </p>
    </div>
  )
}
