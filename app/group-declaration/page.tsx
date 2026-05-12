import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function GroupDeclaration() {
  const members = [
    {
      name: 'Luc Le Moenic',
      contribution: 'Identified the problem statement and investigated the project context and possible opportunities for solution designs.',
    },
    {
      name: 'Mitchell Harris',
      contribution: 'Investigated the economic factors impacting energy systems at the outstations.',
    },
    {
      name: 'Ronit Jain',
      contribution: 'Identified the design criteria based on the user needs and problem statement.',
    },
    {
      name: 'Alex Chen',
      contribution: 'Designed the solution architecture and researched appropriate technology for deployment in Lama Lama Country.',
    },
    {
      name: 'Sadat Sagar',
      contribution: 'Identified and formatted the user needs and defined what a viable solution must look like.',
    },
    {
      name: 'Khushi Sharma',
      contribution: 'Developed the design justification and phased implementation timeline, ensuring the system aligns with all design criteria.',
    },
  ]

  return (
    <div>
      <SectionHero title="Group Declaration" subtitle="Individual contributions and academic integrity declaration for One Prompt Wonders." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">

          {/* Project header fields */}
          <ScrollReveal>
            <div className="not-prose mb-10">
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                {[
                  { label: 'Title', value: 'Microgrids & Hybrid Systems for Lama Lama Outstations' },
                  { label: 'Design Area', value: '3 — Energy' },
                  { label: 'Project Opportunity', value: '3.2 Microgrids and hybrid systems for outstations' },
                  { label: 'How Might We Statement', value: 'How might we provide remote Lama Lama community members with reliable, affordable, and culturally appropriate energy that reduces diesel supply chain dependence and supports community self-determination?' },
                  { label: 'Tutorial Number & Zone', value: 'Tutorial 1 — Group 5' },
                  { label: 'Group Name', value: 'One Prompt Wonders' },
                ].map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="flex gap-4 px-5 py-3.5"
                    style={{
                      background: i % 2 === 0 ? 'var(--surface-2)' : 'var(--surface)',
                      borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span className="text-xs font-semibold shrink-0 w-44" style={{ color: 'var(--moss)' }}>{label}</span>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
              The following table declares each group member's individual contribution to this project. All members confirm that the work submitted is their own, that any use of AI tools has been disclosed in Appendix C, and that all sources are cited in accordance with APA 7th edition referencing guidelines.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contribution</th>
                </tr>
              </thead>
              <tbody>
                {members.map(m => (
                  <tr key={m.name}>
                    <td className="font-semibold whitespace-nowrap">{m.name}</td>
                    <td>{m.contribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="infobox mt-8">
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--pine)' }}>Group: One Prompt Wonders</p>
              <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                31265 Computing and Information Technology Practice — Assessment Task 3<br />
                EWB Challenge 2025: Lama Lama Country · Tutorial 1 · Group 5
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
