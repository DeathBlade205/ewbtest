import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function MeetingMinutes() {
  return (
    <div>
      <SectionHero title="Meeting Minutes" subtitle="Three structured prototype-review sessions tracking iteration of the system architecture diagram from Version 1 to Version 4." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>27/4/2026 — First Prototype Testing Meeting (45 minutes)</h3>
            <table>
              <tbody>
                <tr><td><strong>Date and Time</strong></td><td>27/4/2026 — 1:00pm, UTS Building 2</td></tr>
                <tr><td><strong>Present</strong></td><td>Luc, Ronit, Khushi, Alex, Sadat, Mitch</td></tr>
                <tr><td><strong>Organiser</strong></td><td>Alex</td></tr>
                <tr><td><strong>Minute Taker</strong></td><td>Alex</td></tr>
                <tr><td><strong>Next Meeting</strong></td><td>4/5/2026 — 1:00pm, UTS Building 2</td></tr>
              </tbody>
            </table>
            <p><strong>Agenda</strong></p>
            <ul>
              <li>Review Version 1 of the system architecture prototype</li>
              <li>Assess prototype against design criteria</li>
              <li>Allocate revisions for Version 2</li>
            </ul>
            <p><strong>Discussion Summary</strong></p>
            <p><strong>Prototype Review.</strong> The group reviewed Version 1 of the system architecture diagram. Members agreed that the rooftop PV distribution and shared battery layout were communicated clearly, but raised concerns about how the diesel generator was represented. The generator was currently drawn upstream of the inverter hub, which visually implied it was a primary energy source rather than a fallback. Members agreed this conflicted with the staged diesel transition described in the Implementation Plan and needed to be corrected before the next review.</p>
            <p><strong>Design Criteria Check.</strong> The group walked the diagram through the five design criteria. The Safety-Critical Service Continuity and Community Operability criteria were noted as not yet visually reinforced by the current layout.</p>
            <p><strong>Action Items</strong></p>
            <table>
              <thead><tr><th>Action Item</th><th>Responsible Person</th><th>Due Date</th></tr></thead>
              <tbody>
                <tr><td>Reposition diesel generator alongside the inverter hub with a Backup AC arrow flowing inward</td><td>Alex</td><td>3/5</td></tr>
                <tr><td>Update Section 5 figure caption to reflect new layout</td><td>Khushi</td><td>3/5</td></tr>
                <tr><td>Prepare Version 2 for next review</td><td>Alex</td><td>4/5</td></tr>
              </tbody>
            </table>
            <p><strong>Other Items.</strong> The group agreed that all prototype revisions should be reviewed against the design criteria at each iteration.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>4/5/2026 — Second Prototype Testing Meeting (45 minutes)</h3>
            <table>
              <tbody>
                <tr><td><strong>Date and Time</strong></td><td>4/5/2026 — 1:00pm, UTS Building 2</td></tr>
                <tr><td><strong>Present</strong></td><td>Luc, Ronit, Khushi, Alex, Sadat, Mitch</td></tr>
                <tr><td><strong>Organiser</strong></td><td>Alex</td></tr>
                <tr><td><strong>Minute Taker</strong></td><td>Alex</td></tr>
                <tr><td><strong>Next Meeting</strong></td><td>11/5/2026 — 11:00am, UTS Building 2</td></tr>
              </tbody>
            </table>
            <p><strong>Agenda</strong></p>
            <ul>
              <li>Review Version 2 of the system architecture prototype</li>
              <li>Confirm diesel generator repositioning</li>
              <li>Allocate revisions for Version 3</li>
            </ul>
            <p><strong>Discussion Summary</strong></p>
            <p><strong>Prototype Review.</strong> The group reviewed Version 2 of the diagram. Members confirmed that the diesel generator had been repositioned correctly and that its role as fallback was now visually clear. Discussion then turned to the traffic-light monitoring display. While the display was shown on the diagram, the threshold values (&gt;50%, 20–50%, &lt;20%) were not visible, which weakened the demonstration of the Community Operability criterion. Members agreed the legend needed to be added directly to the display block so that the diagram could be read without reference to the report text.</p>
            <p><strong>Design Criteria Check.</strong> The Safety-Critical Service Continuity criterion was now visually reinforced by the revised diesel routing. The Community Operability criterion remained partially addressed pending the threshold legend update.</p>
            <p><strong>Action Items</strong></p>
            <table>
              <thead><tr><th>Action Item</th><th>Responsible Person</th><th>Due Date</th></tr></thead>
              <tbody>
                <tr><td>Add &gt;50% / 20–50% / &lt;20% legend to the traffic-light display block</td><td>Alex</td><td>10/5</td></tr>
                <tr><td>Cross-check threshold values against Section 5 description</td><td>Khushi</td><td>10/5</td></tr>
                <tr><td>Prepare Version 3 for next review</td><td>Alex</td><td>11/5</td></tr>
              </tbody>
            </table>
            <p><strong>Other Items.</strong> The group agreed that visual consistency between the prototype diagram and Figure 3 (traffic-light mock-up) should be maintained. Members discussed whether to add a simple animation of energy flow on the website, to be considered at a later stage.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>11/5/2026 — Final Meeting (60 minutes)</h3>
            <table>
              <tbody>
                <tr><td><strong>Date and Time</strong></td><td>11/5/2026 — 11:00am, UTS Building 2</td></tr>
                <tr><td><strong>Present</strong></td><td>Luc, Ronit, Khushi, Alex, Sadat, Mitch</td></tr>
                <tr><td><strong>Organiser</strong></td><td>Ronit Jain</td></tr>
                <tr><td><strong>Minute Taker</strong></td><td>Luc Le Moenic</td></tr>
                <tr><td><strong>Next Meeting</strong></td><td>N/A</td></tr>
              </tbody>
            </table>
            <p><strong>Agenda</strong></p>
            <ul>
              <li>Review final feedback from presentation</li>
              <li>Discuss improvements for the final website and report submission</li>
              <li>Confirm remaining edits and corrections</li>
              <li>Allocate final submission tasks</li>
            </ul>
            <p><strong>Discussion Summary</strong></p>
            <p><strong>Feedback Review.</strong> The group discussed feedback received after the presentation. Members agreed that the project concept and community-focused design were communicated clearly, particularly the staged diesel transition and distributed rooftop solar system. Some feedback suggested simplifying a few technical explanations and improving the clarity of diagrams and implementation visuals on the website.</p>
            <p><strong>Website and Report Improvements.</strong> The group reviewed the current status of the project website and written report. Sadat demonstrated the updated website structure, including the navigation layout for the Project Details, Design Solution, Implementation Plan, and Cost Analysis pages. Members agreed that the overall structure was clear and professional, but several sections still required polishing and consistency in formatting. The group decided to maintain the same visual theme across all pages using green and dark blue colours to reflect sustainability and reliability.</p>
            <p><strong>Prototype and Visual Content.</strong> The group conducted the third prototype review session, assessing Version 3 of the system architecture diagram against the design criteria. Members confirmed that the traffic-light threshold legend added in the previous iteration was working as intended, but agreed that the rooftop solar arrangement and shared battery storage were still not immediately clear to a non-technical reader. Several diagram labels and layout details were refined during the meeting, and the group agreed these changes would be finalised in Version 4 for inclusion in the website.</p>
            <p><strong>References and Final Checks.</strong> Luc and Mitch reviewed the references section and confirmed that duplicated citations still needed to be removed. The group also agreed to complete one final proofread to ensure consistency between the website and written report.</p>
            <p><strong>Action Items</strong></p>
            <table>
              <thead><tr><th>Action Item</th><th>Responsible Person</th><th>Due Date</th></tr></thead>
              <tbody>
                <tr><td>Rewrite executive summary for clarity</td><td>Ronit</td><td>14/5</td></tr>
                <tr><td>Finalise Version 4 of the prototype diagram with refined labels and captions</td><td>Khushi + Alex</td><td>13/5</td></tr>
                <tr><td>Complete website elements</td><td>Sadat</td><td>14/5</td></tr>
                <tr><td>Review and correct APA references</td><td>Mitch</td><td>13/5</td></tr>
                <tr><td>Edit report for grammar and consistency</td><td>Alex</td><td>15/5</td></tr>
                <tr><td>Final proofreading of report sections</td><td>Luc</td><td>14/5</td></tr>
                <tr><td>Check consistency between website and report content</td><td>Entire Team</td><td>15/5</td></tr>
              </tbody>
            </table>
            <p><strong>Other Items.</strong> The group agreed to maintain regular communication through Instagram and shared Google Drive updates. Members confirmed that all final edits must be completed before the rehearsal meeting. The team discussed possibly adding a simple animation showing the energy flow between solar panels, battery storage, and diesel backup on the website homepage. The group acknowledged that the project should continue emphasising community ownership and culturally respectful design choices throughout all deliverables.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
