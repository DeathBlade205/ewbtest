import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Appendices() {
  return (
    <div>
      <SectionHero title="Supporting Documentation" subtitle="Group charter, prototype test logs, meeting minutes, and AI prompt log." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>Appendix 1: Group Charter</h3>
            <div className="placeholder">Insert group charter here.</div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Appendix 2: Prototype Test Logs and Additional Images</h3>
            <div className="placeholder">Insert full prototype test logs, additional photographs, and evaluation results here.</div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Appendix 3: Meeting Minutes</h3>
            <div className="placeholder">Insert meeting minutes here.</div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Appendix 4: AI Prompt Log</h3>
            <p>This document was drafted with the assistance of Claude (Anthropic, claude-sonnet-4-6) acting as a synthesis and drafting tool. The following prompts were submitted:</p>
            <div className="placeholder">Insert each prompt submitted to the AI tool and a summary of how the response was used or edited in the final report.</div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
