import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Appendices() {
  return (
    <div>
      <SectionHero title="Appendices" subtitle="Group charter, meeting minutes, and AI prompt log for academic integrity compliance." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>Appendix A — Group Charter</h3>
            <div className="placeholder">
              Paste or link to the group charter here. The charter should include group member names,
              roles, expected contributions, communication agreements, and how disputes will be resolved.
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Appendix B — Meeting Minutes</h3>
            <div className="placeholder">
              Include minutes from all group meetings. Each set of minutes should record: date, attendees,
              agenda items discussed, decisions made, and action items with owners and due dates.
            </div>
            <div className="infobox">
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--pine)' }}>Meeting — [Date]</p>
              <p className="text-sm mb-2" style={{ color: 'var(--ink-muted)' }}>Attendees: [Names]</p>
              <ul className="text-sm">
                <li><strong>Discussed:</strong> [placeholder]</li>
                <li><strong>Decided:</strong> [placeholder]</li>
                <li><strong>Action items:</strong> [placeholder]</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Appendix C — AI Prompt Log</h3>
            <div className="placeholder">
              If generative AI tools were used in preparing this report, include a log of all prompts
              submitted and the responses received, as required by UTS academic integrity policy.
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
