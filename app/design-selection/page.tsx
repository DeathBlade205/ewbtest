import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function DesignSelection() {
  return (
    <div>
      <SectionHero num="04" title="Design Selection" subtitle="Weighted decision matrix comparing three design options against five criteria. Ratings 1–5 (5 = optimal). Distributed Rooftop selected." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>Three options were evaluated against the five weighted design criteria using a decision matrix. Ratings are on a scale of 1–5, where 5 is optimal performance against the criterion and 1 is poor performance. Weighted scores are the product of the raw rating and the criterion weight.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="matrix" style={{ minWidth: 600 }}>
                <thead>
                  <tr>
                    <th>Criterion (Weight)</th>
                    <th>Weight</th>
                    <th>Centralised Ground-Mount Raw</th>
                    <th>Wtd</th>
                    <th>Distributed Rooftop Raw</th>
                    <th>Wtd</th>
                    <th>Per-Building Standalone Raw</th>
                    <th>Wtd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Viability (climate + reliability)</td><td>5</td><td>3</td><td>15</td><td>5</td><td>25</td><td>3</td><td>15</td></tr>
                  <tr><td>Desirability (cultural fit)</td><td>4</td><td>1</td><td>4</td><td>3</td><td>12</td><td>1</td><td>4</td></tr>
                  <tr><td>Cost (upfront + long-term)</td><td>4</td><td>3</td><td>12</td><td>3</td><td>12</td><td>2</td><td>8</td></tr>
                  <tr><td>Competency (local maintainability)</td><td>3</td><td>1</td><td>3</td><td>5</td><td>15</td><td>1</td><td>3</td></tr>
                  <tr><td>Alignment (modular, co-design)</td><td>2</td><td>3</td><td>6</td><td>4</td><td>8</td><td>3</td><td>6</td></tr>
                  <tr className="winner"><td><strong>TOTAL</strong></td><td>—</td><td>—</td><td><strong>40</strong></td><td>—</td><td><strong>72</strong></td><td>—</td><td><strong>36</strong></td></tr>
                </tbody>
              </table>
              <p className="text-xs italic mt-2" style={{ color: 'var(--ink-faint)' }}>Table 1: Decision matrix comparing three design options against five weighted criteria (1 = poor, 5 = optimal). Distributed Rooftop selected.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>4.4 Justification for Distributed Rooftop (Option B)</h3>
            <p>The Distributed Rooftop option scores 5 on both Viability and Competency: rooftop distribution localises faults, diesel fallback guarantees wet season continuity, and the Bushlight-proven training model confirms local maintainability (Independent Australia, 2025). With a weighted score of 72 against 40 and 36, the Distributed Rooftop with Shared Battery and Diesel Fallback is selected as the only option satisfying all five criteria simultaneously.</p>
            <p>Option A (Centralised Ground-Mount) scores 1 on Desirability and Competency — it requires vegetation clearance on Country (irresolvable against Criterion 4) and creates a single point of failure. Option C (Per-Building Standalone) scores 1 on Desirability and Competency — no fallback during extended cloud cover risks safety-critical outages, and multiple independent fault points exceed realistic community management capacity.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
