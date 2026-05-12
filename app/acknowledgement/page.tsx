import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Acknowledgement() {
  return (
    <div>
      <SectionHero title="Acknowledgement of Country" subtitle="Acknowledging the Gadigal people and the Lama Lama Traditional Custodians of Cape York Peninsula." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <div className="infobox">
              <p className="text-base leading-relaxed italic" style={{ color: 'var(--pine)' }}>
                The group acknowledges the Gadigal people of the Eora Nation, upon whose ancestral lands the UTS City campus now stands. The group pays respect to the Elders both past and present, acknowledging them as the traditional custodians of knowledge for this land.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p>
              This project concerns the Lama Lama people of Cape York Peninsula in Queensland. The group acknowledges the Lama Lama people as the Traditional Custodians of the Country on which this project's community partner, the Yintjingga Aboriginal Corporation, holds governance authority. The group pays respect to Lama Lama Elders past, present, and emerging.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>
              The group further acknowledges that the design work presented in this report has been developed in response to a community-defined challenge, and that the Lama Lama people's sovereignty over their Country — including decisions about what infrastructure is placed upon it — must be respected at every stage of any implementation process. The proposed solution has been designed with this principle as a non-negotiable constraint, not an aspiration.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p>
              The EWB Challenge framework within which this project was conducted acknowledges the importance of meaningful community partnership and co-design. The group recognises that genuine partnership requires ongoing relationship, not a single project engagement, and that the recommendations in this report represent a starting point for community-led decision-making, not a conclusion.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
