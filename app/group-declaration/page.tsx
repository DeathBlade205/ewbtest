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
    <div className="prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d52] mb-1">Group Declaration</p>
      <h1 className="text-3xl font-bold text-[#1a4731] mb-6">Group Declaration</h1>

      <p className="text-sm text-gray-600 mb-8">
        The following table declares each group member's individual contribution to this project. All members confirm that the work submitted is their own, that any use of AI tools has been disclosed in Appendix C, and that all sources are cited in accordance with APA 7th edition referencing guidelines.
      </p>

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

      <div className="infobox mt-8">
        <p className="text-sm font-semibold text-[#145c3e] mb-1">Group: One Prompt Wonders</p>
        <p className="text-sm text-gray-600">
          31265 Computing and Information Technology Practice — Assessment Task 3<br />
          EWB Challenge 2025: Lama Lama Country
        </p>
      </div>
    </div>
  )
}
