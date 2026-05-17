import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Acknowledgement() {
  return (
    <div>
      <SectionHero title="Team Acknowledgement" subtitle="Acknowledging the Lama Lama People as Traditional Custodians of Lama Lama Country." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <div className="infobox">
              <p className="text-base leading-relaxed italic" style={{ color: 'var(--pine)' }}>
                The team respectfully acknowledges the Lama Lama People as the Traditional Custodians of the lands and waters of Lama Lama Country, extending several hundred kilometres around Princess Charlotte Bay on the eastern Cape York Peninsula. The team pays respect to Lama Lama Elders past, present, and emerging, and recognises their enduring sovereignty, spiritual connection, and custodial responsibility to Country — including its lands, rivers, wetlands, and Sea Country.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p>
              The Yintjingga Aboriginal Corporation (YAC) and the Lama Lama Land Trust hold governance authority over Lama Lama Country, and the team acknowledges that decisions regarding infrastructure on Country belong to the Lama Lama community. This project sits within a broader history in which infrastructure decisions have too often been made for, rather than with, remote Indigenous communities. The team has endeavoured throughout this work to centre the needs, values, and governance structures of the Lama Lama people, and acknowledges that further direct consultation with YAC is an essential next step before any design is implemented.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
