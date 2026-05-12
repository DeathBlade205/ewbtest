import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function OtherConsiderations() {
  return (
    <div>
      <SectionHero num="09" title="Other Considerations" subtitle="Cultural governance, environmental respect, social co-benefits, and long-term sustainability of the design." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal><h3>Cultural and Governance Alignment</h3><p>Governance remains with the Yintjingga Aboriginal Corporation at every stage — placement decisions, operational priorities, and upgrade decisions belong to the community, not the engineering team. The training model builds genuine local technical capability that accumulates within the community over time. The five-year staged transition means the community's confidence and capacity grow in parallel with the system's deployment — never asked to manage a system larger than it is ready for (Yintjingga Aboriginal Corporation, n.d.). The design actively strengthens Lama Lama self-determination rather than merely solving an energy problem.</p></ScrollReveal>
          <ScrollReveal delay={0.06}><h3>Environmental Respect</h3><p>Rooftop mounting eliminates any vegetation clearing, soil disturbance, or land use change. Sacred sites, traditional pathways, and cultural corridors across the outstation are fully preserved (Centre for Appropriate Technology, 2009). Low-profile panel mounting reduces bird strike risk. The diesel site is remediated and landscape restored as diesel phases to emergency-only status by Year 5. A comparative life cycle assessment by Roy and Pearce (2024) confirms distributed rooftop PV has a lower environmental footprint than equivalent ground-mounted systems across land use, biodiversity impact, and embodied carbon.</p></ScrollReveal>
          <ScrollReveal delay={0.08}><h3>Social Co-Benefits</h3><p>Reliable energy access has direct and significant social co-benefits beyond the energy problem itself. Refrigeration supports health outcomes for rangers and Elders on extended outstation stays. Reliable lighting extends working and cultural days and reduces after-dark safety risks. Communications continuity — particularly radio — supports safety coordination for ranger operations across Country. These outcomes compound the direct economic benefits and together constitute a material improvement in quality of life for Lama Lama community members (Lama Lama Land and Sea Rangers, n.d.).</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h3>Long-Term Sustainability</h3><p>Technical sustainability rests on the modular architecture using standard commercially available components, with no dependence on any single manufacturer. Operational sustainability is ensured by the Bushlight training model and Yintjingga Aboriginal Corporation governance. Financial sustainability is driven by $5,500/household/year savings over diesel, which compound as diesel prices escalate and battery technology costs continue to decline (Martire, 2020). The Cape York Partnership's broader clean energy work — including hydrogen pilot projects — provides a longer-term context in which this microgrid infrastructure could serve as a backbone for further integration (Cape York Partnership, 2022).</p></ScrollReveal>
        </div>
      </div>
    </div>
  )
}
