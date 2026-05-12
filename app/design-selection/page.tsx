import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function DesignSelection() {
  return (
    <div>
      <SectionHero num="04" title="Design Selection" subtitle="Weighted decision matrix evaluation of the three design options against five criteria." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>The three design options were evaluated using a weighted decision matrix scored against five criteria. Each criterion was weighted to reflect its relative importance in the Lama Lama context, and each idea was scored 1–5. Viability (weight 5) and desirability (weight 4) carry the greatest influence — a system must first survive Cape York's conditions and fit the community's cultural context before anything else applies.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <table className="matrix">
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>Weight</th>
                  <th>Idea A</th>
                  <th>A×W</th>
                  <th>Idea B</th>
                  <th>B×W</th>
                  <th>Idea C</th>
                  <th>C×W</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Viability</td><td>5</td><td>3</td><td>15</td><td>5</td><td>25</td><td>3</td><td>15</td></tr>
                <tr><td>Desirability</td><td>4</td><td>1</td><td>4</td><td>3</td><td>12</td><td>1</td><td>4</td></tr>
                <tr><td>Cost</td><td>4</td><td>3</td><td>12</td><td>3</td><td>12</td><td>2</td><td>8</td></tr>
                <tr><td>Competency</td><td>3</td><td>1</td><td>3</td><td>5</td><td>15</td><td>1</td><td>3</td></tr>
                <tr><td>Alignment</td><td>2</td><td>1</td><td>2</td><td>4</td><td>8</td><td>1</td><td>2</td></tr>
                <tr className="winner"><td><strong>Total</strong></td><td>—</td><td>—</td><td><strong>36</strong></td><td>—</td><td><strong>72</strong></td><td>—</td><td><strong>32</strong></td></tr>
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Justification for Idea B</h3>
            <p>Idea B scores highest by a substantial margin (72 vs 36 and 32). On viability, Ideas A and C both score 3 — Idea A creates a single point of failure unmanageable remotely; Idea C has no wet season fallback. Idea B scores 5: rooftop distribution localises faults, the diesel fallback guarantees continuity, and the five-year staged transition ensures the system is never deployed beyond what the community can manage (Australian Renewable Energy Agency, 2025).</p>
            <p>Ideas A and C both score 1 on desirability and competency. Idea A requires vegetation clearing on Country; Idea C multiplies maintenance points beyond realistic community capacity. Idea B scores 3 on desirability (diesel retained temporarily by design) and 5 on competency, validated by the Bushlight training model at comparable remote sites (Centre for Appropriate Technology, n.d.). Its alignment score of 4 reflects the modular, scalable, co-design architecture directly matching EWB Project 3.2 requirements.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
