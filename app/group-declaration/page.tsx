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
          <ScrollReveal>
            <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
              The following table declares each group member's individual contribution to this project. All members confirm that the work submitted is their own, that any use of AI tools has been disclosed in Appendix C, and that all sources are cited in accordance with APA 7th edition referencing guidelines.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
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
                EWB Challenge 2025: Lama Lama Country
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
