import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Background() {
  return (
    <div>
      <SectionHero
        num="01"
        title="Background"
        subtitle="Environmental, sociocultural, and economic context of Lama Lama Country and the EWB Challenge 2025."
      />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p>
              Lama Lama Country sits on the eastern side of Cape York Peninsula in far north Queensland — one of the most
              remote regions in Australia. The Lama Lama people, governed through the Yintjingga Aboriginal Corporation,
              use a network of semi-permanent outstations for land management activities, ranger operations, and cultural
              practices (Yintjingga Aboriginal Corporation, n.d.). Understanding why energy access is a persistent and
              unresolved challenge at these outstations requires examining three intersecting dimensions: environmental,
              sociocultural, and economic.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h3>Environmental Context</h3>
            <p>
              The climate of Cape York Peninsula is tropical and unforgiving. Temperatures regularly exceed 35°C,
              humidity is high year-round, and the region sits within an active cyclone zone (Bureau of Meteorology,
              2024). The wet season — typically November through April — floods roads for months at a time, cutting
              communities off entirely from resupply and outside assistance. Any infrastructure deployed in this
              environment must be capable of surviving sustained heat, high moisture, and pest exposure without requiring
              external intervention during the period of greatest need. These conditions directly rule out solutions
              that depend on off-site servicing or regular resupply logistics.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Sociocultural Context</h3>
            <p>
              The outstations are not permanent settlements but semi-permanent camps used by Rangers and Elders for
              land management and cultural activities central to Lama Lama identity and practice (Lama Lama Land and
              Sea Rangers, n.d.). The Yintjingga Aboriginal Corporation holds governance authority over these sites,
              and decisions about infrastructure on Country belong to the community. This is not merely a procedural
              requirement — there is a well-documented history of outside solutions being imposed on Indigenous
              communities in Australia without meaningful consultation, producing systems that fail to last because
              they do not fit community needs or governance structures (Centre for Appropriate Technology, 2009).
              Any engineering solution developed for Lama Lama Country must be designed with, not for, the community.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Economic Context</h3>
            <p>
              The outstations currently depend entirely on diesel generators for electricity, with fuel transported
              over roads that become impassable during the wet season (Engineers Without Borders Australia, 2025).
              This supply chain is expensive under normal conditions and collapses entirely when roads wash out,
              leaving communities without power indefinitely. The Clean Energy Council (2023) notes that remote
              off-grid communities in Australia typically pay several times the urban electricity rate when diesel
              fuel costs, transport, and generator maintenance are factored in. The economic case for transitioning
              to renewable generation is therefore strong, but the specific logistical constraints of Cape York —
              where light aircraft, barge, and 4WD are the only viable transport options for components — must shape
              every aspect of a proposed solution's design and deployment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h3>The EWB Challenge</h3>
            <p>
              Engineers Without Borders Australia facilitates the annual EWB Challenge, through which university
              student groups engage with real community partners to develop engineering design solutions to genuine,
              complex problems. The 2025 brief for Lama Lama Country identifies energy access at remote outstations
              as the primary design challenge, framing it within the broader context of energy sovereignty and
              community self-determination (Engineers Without Borders Australia, 2025). The EWB Challenge
              Project 3.2 specifically calls for modular, co-designed solutions appropriate to remote Indigenous
              contexts — criteria that directly shaped the design approach taken in this report.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
