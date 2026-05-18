import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function ProjectDetails() {
  return (
    <div>
      <SectionHero num="01" title="Project Details" subtitle="Context, design area and project opportunity, and the user needs statement framing the project." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <h3>Context</h3>
            <p>Lama Lama Country occupies the eastern side of Cape York Peninsula in Far North Queensland. The Lama Lama People are the Traditional Custodians of lands extending several hundred kilometres around Princess Charlotte Bay, encompassing coastal habitats, wetlands, riverine systems, and Sea Country (Lama Lama Aboriginal Corporation, 2024). Since the 1970s outstation movement, Lama Lama people have progressively reclaimed connections to Country through small, decentralised communities such as Port Stewart (Yintjingga), operating primarily during the dry season.</p>
            <p>Lama Lama Rangers manage Country through fire management, biodiversity monitoring, and cultural heritage protection. These outstations rely entirely on diesel generators; wet season road floods cut communities off for months, leaving them without power when fuel runs out (EWB, 2025a; Bureau of Meteorology, 2024).</p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Design Area and Project Opportunity</h3>
            <p>This project addresses Design Area 3: Energy, specifically Project Opportunity 3.2: Microgrids and hybrid systems for outstations. The focus is designing modular solar-storage systems that can scale, be repaired, and operate safely in heat, humidity, and pest pressure at the ranger bases and outstations of Lama Lama Country.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3>Needs Statement</h3>
            <div className="infobox">
              <p className="text-base leading-relaxed font-medium italic" style={{ color: 'var(--pine)' }}>
                How might we provide reliable, culturally appropriate, and community-governed energy for Lama Lama outstations so that Rangers and Elders can maintain safety-critical services and self-determination on Country?
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
