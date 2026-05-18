import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Appendices() {
  return (
    <div>
      <SectionHero title="Supporting Documentation" subtitle="Group charter, meeting minutes, and AI prompt log." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">

          {/* ── Appendix 1: Group Charter ── */}
          <ScrollReveal>
            <h3>Appendix 1: Group Charter</h3>
            <p><strong>Group Name:</strong> One Prompt Wonders</p>
          </ScrollReveal>

          <ScrollReveal delay={0.04}>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="matrix" style={{ minWidth: 400 }}>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: 'top', width: '50%' }}>
                      <strong>Our ground rules:</strong>
                      <br /><br />
                      <em>When will we meet (other than class)?</em><br />
                      Once a week at 11am when everyone is available
                      <br /><br />
                      <em>How long should meetings be?</em><br />
                      30–60 minutes
                      <br /><br />
                      <em>Where will meetings take place?</em><br />
                      At UTS
                      <br /><br />
                      <em>How do we inform each other when we can't attend or are running late?</em><br />
                      Instagram group chat
                      <br /><br />
                      <em>What does "on time" mean?</em><br />
                      Arrive at the specified time
                      <br /><br />
                      <em>How will we deal with lateness?</em><br />
                      Communicate with others and reschedule following meetings if required
                      <br /><br />
                      <em>How do we deal with members who don't participate enough or distract the group?</em><br />
                      We will respectfully address the issue and agree on adjustments to keep the group productive.
                      <br /><br />
                      <em>What will we do if a group member's work doesn't meet our standards?</em><br />
                      We will give clear feedback and ask for revisions by an agreed-upon deadline.
                      <br /><br />
                      <em>How are we going to make decisions?</em><br />
                      Making sure each group member has a say and each decision is a joint one.
                    </td>
                    <td style={{ verticalAlign: 'top', width: '50%' }}>
                      <strong>Our goals:</strong>
                      <br /><br />
                      <em>What is our group trying to accomplish?</em><br />
                      Leadership
                      <br /><br />
                      <em>Will we appoint a leader? Who?</em><br />
                      Yes — Ronit Jain
                      <br /><br />
                      <em>What are their responsibilities?</em><br />
                      Organise meetings and make sure the project is progressing at an acceptable pace
                      <br /><br />
                      <strong>Our commitment to the charter:</strong><br />
                      We, the group named, agree with the answers in our charter and will try our best to uphold them.
                      <br /><br />
                      <strong>Signatories:</strong><br />
                      Ronit Jain · Sadat Sagar · Mitchell Harris · Luc LeMoenic · Alexander Chen · Khushi Sharma
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── Appendix 2: Meeting Minutes ── */}
          <ScrollReveal delay={0.06}>
            <h3>Appendix 2: Meeting Minutes</h3>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h4>27/4/2026 — First Prototype Testing Meeting (45 minutes)</h4>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="matrix" style={{ minWidth: 400 }}>
                <tbody>
                  <tr><td><strong>Date and Time</strong></td><td>27/4/2026 – 1:00pm, UTS Building 2</td></tr>
                  <tr><td><strong>Present</strong></td><td>Luc, Ronit, Khushi, Alex, Sadat, Mitch</td></tr>
                  <tr><td><strong>Organiser</strong></td><td>Alex</td></tr>
                  <tr><td><strong>Minute Taker</strong></td><td>Alex</td></tr>
                  <tr><td><strong>Next Meeting</strong></td><td>4/5/2026 – 1:00pm, UTS Building 2</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Agenda:</strong> Review Version 1 of the system architecture prototype · Assess prototype against design criteria · Allocate revisions for Version 2</p>
            <p><strong>Prototype Review:</strong> The group reviewed Version 1 of the system architecture diagram. Members agreed that the rooftop PV distribution and shared battery layout were communicated clearly, but raised concerns about how the diesel generator was represented. The generator was currently drawn upstream of the inverter hub, which visually implied it was a primary energy source rather than a fallback. Members agreed this conflicted with the staged diesel transition described in the Implementation Plan and needed to be corrected before the next review.</p>
            <p><strong>Design Criteria Check:</strong> The group walked the diagram through the five design criteria from Section 3.1. The Safety-Critical Service Continuity and Community Operability criteria were noted as not yet visually reinforced by the current layout.</p>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="matrix" style={{ minWidth: 400 }}>
                <thead><tr><th>Action Item</th><th>Responsible</th><th>Due</th></tr></thead>
                <tbody>
                  <tr><td>Reposition diesel generator alongside the inverter hub with a Backup AC arrow flowing inward</td><td>Alex</td><td>3/5</td></tr>
                  <tr><td>Update Section 5 figure caption to reflect new layout</td><td>Khushi</td><td>3/5</td></tr>
                  <tr><td>Prepare Version 2 for next review</td><td>Alex</td><td>4/5</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Other Items:</strong> The group agreed that all prototype revisions should be reviewed against the design criteria at each iteration.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h4>4/5/2026 — Second Prototype Testing Meeting (45 minutes)</h4>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="matrix" style={{ minWidth: 400 }}>
                <tbody>
                  <tr><td><strong>Date and Time</strong></td><td>4/5/2026 – 1:00pm, UTS Building 2</td></tr>
                  <tr><td><strong>Present</strong></td><td>Luc, Ronit, Khushi, Alex, Sadat, Mitch</td></tr>
                  <tr><td><strong>Organiser</strong></td><td>Alex</td></tr>
                  <tr><td><strong>Minute Taker</strong></td><td>Alex</td></tr>
                  <tr><td><strong>Next Meeting</strong></td><td>11/5/2026 – 11:00am, UTS Building 2</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Agenda:</strong> Review Version 2 of the system architecture prototype · Confirm diesel generator repositioning · Allocate revisions for Version 3</p>
            <p><strong>Prototype Review:</strong> The group reviewed Version 2 of the diagram. Members confirmed that the diesel generator had been repositioned correctly and that its role as fallback was now visually clear. Discussion then turned to the traffic-light monitoring display. While the display was shown on the diagram, the threshold values (&gt;50%, 20–50%, &lt;20%) were not visible, which weakened the demonstration of the Community Operability criterion. Members agreed the legend needed to be added directly to the display block so that the diagram could be read without reference to the report text.</p>
            <p><strong>Design Criteria Check:</strong> The Safety-Critical Service Continuity criterion was now visually reinforced by the revised diesel routing. The Community Operability criterion remained partially addressed pending the threshold legend update.</p>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="matrix" style={{ minWidth: 400 }}>
                <thead><tr><th>Action Item</th><th>Responsible</th><th>Due</th></tr></thead>
                <tbody>
                  <tr><td>Add &gt;50% / 20–50% / &lt;20% legend to the traffic-light display block</td><td>Alex</td><td>10/5</td></tr>
                  <tr><td>Cross-check threshold values against Section 5 description</td><td>Khushi</td><td>10/5</td></tr>
                  <tr><td>Prepare Version 3 for next review</td><td>Alex</td><td>11/5</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Other Items:</strong> The group agreed that visual consistency between the prototype diagram and Figure 3 (traffic-light mock-up) should be maintained. Members discussed whether to add a simple animation of energy flow on the website, to be considered at a later stage.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h4>11/5/2026 — Final Meeting (60 minutes)</h4>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="matrix" style={{ minWidth: 400 }}>
                <tbody>
                  <tr><td><strong>Date and Time</strong></td><td>11/5/2026 – 11:00am, UTS Building 2</td></tr>
                  <tr><td><strong>Present</strong></td><td>Luc, Ronit, Khushi, Alex, Sadat, Mitch</td></tr>
                  <tr><td><strong>Organiser</strong></td><td>Ronit Jain</td></tr>
                  <tr><td><strong>Minute Taker</strong></td><td>Luc LeMoenic</td></tr>
                  <tr><td><strong>Next Meeting</strong></td><td>N/A</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Agenda:</strong> Review final feedback from presentation · Discuss improvements for the final website and report submission · Confirm remaining edits and corrections · Allocate final submission tasks</p>
            <p><strong>Feedback Review:</strong> The group discussed feedback received after the presentation. Members agreed that the project concept and community-focused design were communicated clearly, particularly the staged diesel transition and distributed rooftop solar system. Some feedback suggested simplifying a few technical explanations and improving the clarity of diagrams and implementation visuals on the website.</p>
            <p><strong>Website and Report Improvements:</strong> The group reviewed the current status of the project website and wrote a report. Sadat demonstrated the updated website structure, including the navigation layout for the Project Details, Design Solution, Implementation Plan, and Cost Analysis pages. Members agreed that the overall structure was clear and professional, but several sections still required polishing and consistency in formatting. The group decided to maintain the same visual theme across all pages using green and dark blue colours to reflect sustainability and reliability.</p>
            <p><strong>Prototype and Visual Content:</strong> The group conducted the third prototype review session, assessing Version 3 of the system architecture diagram against the design criteria. Members confirmed that the traffic-light threshold legend added in the previous iteration was working as intended, but agreed that the rooftop solar arrangement and shared battery storage were still not immediately clear to a non-technical reader. Several diagram labels and layout details were refined during the meeting, and the group agreed these changes would be finalised in Version 4 for inclusion in the website.</p>
            <p><strong>References and Final Checks:</strong> Luc and Mitch reviewed the references section and confirmed that duplicated citations still needed to be removed. The group also agreed to complete one final proofread to ensure consistency between the website and written report.</p>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="matrix" style={{ minWidth: 400 }}>
                <thead><tr><th>Action Item</th><th>Responsible</th><th>Due</th></tr></thead>
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
            </div>
            <p><strong>Other Items:</strong> The group agreed to maintain regular communication through Instagram and shared Google Drive updates. Members confirmed that all final edits must be completed before the rehearsal meeting. The team discussed possibly adding a simple animation showing the energy flow between solar panels, battery storage, and diesel backup on the website homepage. The group acknowledged that the project should continue emphasising community ownership and culturally respectful design choices throughout all deliverables.</p>
          </ScrollReveal>

          {/* ── Appendix 3: AI Prompt Log ── */}
          <ScrollReveal delay={0.14}>
            <h3>Appendix 3: AI Prompt Log</h3>
            <p>This document was drafted with the assistance of Claude (Anthropic, claude-sonnet-4-6) acting as a synthesis and drafting tool. The following prompts were submitted:</p>

            <p><strong>Prompt 1:</strong> "Reword the following background section to ensure the key points are communicated clearly and the flow is readable." <em>(Section covered: Energy Access in Remote Australia, Environmental Challenges, Significance to the Lama Lama Community, Existing Solutions and Their Limitations.)</em></p>
            <ul>
              <li>Response summary: The AI restructured and reworded the four background subsections, improving sentence flow, strengthening the logical progression between paragraphs, and making the core arguments more explicit. The revised version was used as the basis for the final background section of the website, with minor edits made by the group to maintain our own voice and ensure consistency with other sections.</li>
            </ul>

            <p><strong>Prompt 2:</strong> "Based on the research you have done along with mine, output what you view the problem currently being in this community in terms of dependence on current energy sources."</p>
            <ul>
              <li>Response summary: The AI synthesised the background research and community context to produce a problem description identifying diesel dependency, energy unreliability, safety consequences, cost burden, climate-related system underperformance, and the lack of community governance over infrastructure as the core issues facing the Lama Lama community. This response was reviewed and edited by the group, then used as the foundation for the Problem Description section of the website.</li>
            </ul>

            <p><strong>Prompt 3:</strong> "How do you recommend solving the issue specified above and critically evaluate the options."</p>
            <ul>
              <li>Response summary: The AI produced a critical evaluation of three design options: a hybrid solar-battery-diesel system, a standalone solar-battery system with no diesel, and a shared microgrid across outstations. Each option was assessed for strengths and weaknesses in the Lama Lama context, with the hybrid system recommended as the most appropriate solution based on reliability, safety, and community manageability. The group used this evaluation as the basis for the Design Options and Design Selection sections, cross-checking the AI's reasoning against our own research before finalising the content.</li>
            </ul>

            <p>All AI-generated content was reviewed, edited, and verified by group members against the original source documents. The group takes full responsibility for the accuracy and academic integrity of the final submitted content.</p>
          </ScrollReveal>

        </div>
      </div>
    </div>
  )
}
