import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function AIPromptLog() {
  return (
    <div>
      <SectionHero title="AI Prompt Log" subtitle="Disclosure of AI-assisted drafting prompts submitted during the project, with summaries of how responses were used and edited." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>This document was drafted with the assistance of Claude (Anthropic, claude-sonnet-4-6) acting as a synthesis and drafting tool. The following prompts were submitted:</p>
          </ScrollReveal>

          <ScrollReveal delay={0.04}>
            <h3>Prompt 1</h3>
            <p><em>"Reword the following background section to ensure the key points are communicated clearly and the flow is readable."</em> (Section covered: Energy Access in Remote Australia, Environmental Challenges, Significance to the Lama Lama Community, Existing Solutions and Their Limitations.)</p>
            <p><strong>Response summary:</strong> The AI restructured and reworded the four background subsections, improving sentence flow, strengthening the logical progression between paragraphs, and making the core arguments more explicit. The revised version was used as the basis for the final background section of the website, with minor edits made by the group to maintain our own voice and ensure consistency with other sections.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Prompt 2</h3>
            <p><em>"Based on the research you have done along with mine, output what you view the problem currently being in this community in terms of dependence on current energy sources."</em></p>
            <p><strong>Response summary:</strong> The AI synthesised the background research and community context to produce a problem description identifying diesel dependency, energy unreliability, safety consequences, cost burden, climate-related system underperformance, and the lack of community governance over infrastructure as the core issues facing the Lama Lama community. This response was reviewed and edited by the group, then used as the foundation for the Problem Description section of the website.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Prompt 3</h3>
            <p><em>"How do you recommend solving the issue specified above and critically evaluate the options."</em></p>
            <p><strong>Response summary:</strong> The AI produced a critical evaluation of three design options: a hybrid solar-battery-diesel system, a standalone solar-battery system with no diesel, and a shared microgrid across outstations. Each option was assessed for strengths and weaknesses in the Lama Lama context, with the hybrid system recommended as the most appropriate solution based on reliability, safety, and community manageability. The group used this evaluation as the basis for the Design Options and Design Selection sections, cross-checking the AI's reasoning against our own research before finalising the content.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>All AI-generated content was reviewed, edited, and verified by group members against the original source documents. The group takes full responsibility for the accuracy and academic integrity of the final submitted content.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
