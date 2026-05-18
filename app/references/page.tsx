import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function References() {
  const refs = [
    'Australian Energy Regulator. (2023, October). State of the energy market 2023. Australian Energy Regulator. https://www.aer.gov.au/publications/reports/performance/state-energy-market-2023',
    'Australian Renewable Energy Agency. (2020). Renewable energy solutions for remote and regional communities. ARENA. https://arena.gov.au/renewable-energy/off-grid/',
    'Australian Renewable Energy Agency. (2023, August). Microgrids: Cheaper, cleaner, reliable energy for remote communities. ARENA. https://arena.gov.au/blog/microgrids-cheaper-cleaner-reliable-energy-for-remote-communities/',
    'Australian Renewable Energy Agency. (2025). Empowering First Nations communities with ARENA-backed microgrids. ARENA. https://arena.gov.au/news/empowering-first-nations-communities-with-arena-backed-microgrids/',
    'Bureau of Meteorology. (2024). Climate statistics for Australian locations: Cape Flattery. Australian Government Bureau of Meteorology. http://www.bom.gov.au/climate/averages/tables/cw_031213.shtml',
    'Centre for Appropriate Technology. (n.d.). Community planning with the Lama Lama people. CfAT. https://www.cfat.org.au/community-planning-with-the-lama-lama-people',
    'Clean Energy Council. (2023). Off-grid solar and battery systems in remote Australia: Cost benchmarks 2023. Clean Energy Council. https://www.cleanenergycouncil.org.au',
    'Engineers Without Borders Australia. (2019, October 18). Announcing our 2020 EWB Challenge community partner. EWB Blog. https://ewb.org.au/blog/2019/10/18/announcing-our-2020-ewb-challenge-community-partner/',
    'Engineers Without Borders Australia. (2025a). About Lama Lama Country. EWB Challenge. https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-lama-lama-country/',
    'Engineers Without Borders Australia. (2025b). Lama Lama Country a look at the sacred places, sea country, ranger bases, existing amenities and infrastructure. EWB Challenge. https://ewbchallenge.org/challenge/port-stewart-lama-lama/lama-lama-country-a-look-at-the-sacred-places/',
    'Engineers Without Borders Australia. (2025c). Design considerations for Port Stewart, Lama Lama. EWB Challenge. https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-considerations',
    'Engineers Without Borders Australia. (2025d). About tropical north Queensland. EWB Challenge. https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-tropical-north-queensland/',
    'Gaonkar, A., Bharathraj, R., Kulkarni, P., & Rao, B. N. (2024). Life cycle testing and reliability analysis of prismatic lithium-iron-phosphate cells. International Journal of Sustainable Energy, 43(1), Article 2337439. https://doi.org/10.1080/14786451.2024.2337439',
    'Hoicka, C. E., Savic, K., & Campney, A. (2021). Reconciliation through renewable energy? A survey of Indigenous communities, involvement, and peoples in Canada. Energy Research & Social Science, 74, 101967. https://doi.org/10.1016/j.erss.2020.101897',
    'Independent Australia. (2025, June 20). How renewable energy is empowering remote Indigenous communities in Australia. Independent Australia. https://independentaustralia.net/about-ia/sponsored-display/how-renewable-energy-is-empowering-remote-indigenous-communities-in-australia,19855',
    'Indigenous Climate Hub. (2024, October). Renewable energy projects in Indigenous communities: Balancing tradition and innovation. Indigenous Climate Hub. https://indigenousClimatehub.ca/2024/10/renewable-energy-projects-in-indigenous-communities-balancing-tradition-and-innovation/',
    'International Energy Agency. (2022). Off-grid renewable energy systems for remote communities. IEA. https://www.iea.org',
    'Lama Lama Aboriginal Corporation. (2024). Lama Lama Country: Our land, our culture. https://www.lamalama.org.au',
    'Mahmud, M. A., & Roy, T. K. (2025). Electricity supply systems for First Nations communities in remote Australia: Evidence, consumer protections and pathways to energy equity. Energies, 18(19), Article 5130. https://doi.org/10.3390/en18195130',
    'Mani, M., & Pillai, R. (2010). Impact of dust on solar photovoltaic (PV) performance: Research status, challenges and recommendations. Renewable and Sustainable Energy Reviews, 14(9), 3124–3131. https://doi.org/10.1016/j.rser.2010.07.052',
    'Queensland Government. (2024). First Nations clean energy strategy. Department of Energy and Public Works. https://www.energyandclimate.qld.gov.au',
    'Queensland Government. (2026). Cape York Peninsula (CYP) bioregion: Facts and maps. Department of the Environment, Tourism, Science and Innovation. https://wetlandinfo.detsi.qld.gov.au/wetlands/facts-maps/bioregion-cape-york-peninsula-cyp/',
    'Skoplaki, E., & Palyvos, J. A. (2009). On the temperature dependence of photovoltaic module electrical performance: A review of efficiency/power correlations. Solar Energy, 83(5), 614–624. https://doi.org/10.1016/j.solener.2008.10.008',
    'Sustainability Directory. (2025, December). How can renewable energy projects engage Indigenous communities? Sustainability Directory. https://energy.sustainability-directory.com/question/how-can-renewable-energy-projects-engage-indigenous-communities/',
  ]

  return (
    <div>
      <SectionHero title="References" subtitle="All sources formatted in APA 7th edition." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="flex flex-col gap-3">
          {refs.map((ref, i) => (
            <ScrollReveal key={i} delay={i * 0.02}>
              <div className="flex gap-4 rounded-lg p-4" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <span className="text-[0.6rem] font-black tabular-nums w-6 shrink-0 mt-1" style={{ color: 'var(--moss)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{ref}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
