export default function Appendices() {
  return (
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Appendices</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Appendices</h1>

      <h3>Appendix A — Group Charter</h3>
      <div className="placeholder">
        Paste or link to the group charter here. The charter should include group member names,
        roles, expected contributions, communication agreements, and how disputes will be resolved.
      </div>

      <h3>Appendix B — Meeting Minutes</h3>
      <div className="placeholder">
        Include minutes from all group meetings. Each set of minutes should record: date, attendees,
        agenda items discussed, decisions made, and action items with owners and due dates.
      </div>

      <div className="infobox">
        <p className="text-sm font-semibold mb-1">Meeting — [Date]</p>
        <p className="text-sm text-gray-500 mb-2">Attendees: [Names]</p>
        <ul className="text-sm">
          <li><strong>Discussed:</strong> [placeholder]</li>
          <li><strong>Decided:</strong> [placeholder]</li>
          <li><strong>Action items:</strong> [placeholder]</li>
        </ul>
      </div>

      <h3>Appendix C — AI Prompt Log</h3>
      <div className="placeholder">
        If generative AI tools were used in preparing this report, include a log of all prompts
        submitted and the responses received, as required by UTS academic integrity policy.
      </div>
    </div>
  )
}
