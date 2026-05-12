import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function References() {
  const refs = [
    'Australian Renewable Energy Agency. (2020). Renewable energy solutions for remote and regional communities. https://arena.gov.au/renewable-energy/off-grid/',
    'Australian Renewable Energy Agency. (2023). Microgrids: Cheaper, cleaner, reliable energy for remote communities. ARENA Wire. https://arena.gov.au/blog/microgrids-cheaper-cleaner-reliable-energy-for-remote-communities/',
    'Australian Renewable Energy Agency. (2025, August 15). Empowering First Nations communities with ARENA backed microgrids. https://arena.gov.au/news/empowering-first-nations-communities-with-arena-backed-microgrids/',
    'Australian Renewable Energy Agency. (n.d.). NT Solar Energy Transformation Program. https://arena.gov.au/projects/northern-territory-solar-energy-transformation-program/',
    'Bureau of Meteorology. (2024). Climate statistics for Australian locations: Cape Flattery. Australian Government. http://www.bom.gov.au/climate/averages/tables/cw_031213.shtml',
    'Cape York Partnership. (2022, March 22). E20 Cape York hydrogen. https://capeyorkpartnership.org.au/e20-cape-york-hydrogen-the-project-bringing-green-hydrogen-to-cape-yorks-indigenous-communities-for-a-greener-future/',
    'Centre for Appropriate Technology. (2009). Community planning with the Lama Lama people. https://www.cfat.org.au/community-planning-with-the-lama-lama-people',
    'Centre for Appropriate Technology. (n.d.). Training and technology with Bushlight. https://www.cfat.org.au/training-and-technology-with-bushlight',
    'Clean Energy Council. (2023). Clean Energy Australia report 2023. https://assets.cleanenergycouncil.org.au/documents/Clean-Energy-Australia-Report-2023.pdf',
    'Engineers Without Borders Australia. (2025). EWB Challenge design brief: Lama Lama — about tropical north Queensland. https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-tropical-north-queensland/',
    'Independent Australia. (2025, June 20). How renewable energy is empowering remote Indigenous communities in Australia. https://independentaustralia.net/about-ia/sponsored-display/how-renewable-energy-is-empowering-remote-indigenous-communities-in-australia,19855',
    'Lama Lama Land and Sea Rangers. (n.d.). Lama Lama country. https://www.lamalama.org.au',
    'Martire, J. L. (2020, April 20). Powering Indigenous communities with renewables. Renew Magazine. https://renew.org.au/renew-magazine/solar-batteries/powering-indigenous-communities-with-renewables/',
    'Roy, R., & Pearce, J. M. (2024). Is small or big solar better for the environment? The International Journal of Life Cycle Assessment, 29(3), 516–536. https://doi.org/10.1007/s11367-023-02254-x',
    'Yintjingga Aboriginal Corporation. (n.d.). About us. Lama Lama. https://www.lamalama.org.au/about-us/',
  ]

  return (
    <div>
      <SectionHero title="References" subtitle="All sources formatted in APA 7th edition." />
      <div className="px-8 md:px-16 py-12 max-w-3xl">
        <div className="flex flex-col gap-3">
          {refs.map((ref, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div
                className="flex gap-4 rounded-lg p-4"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
              >
                <span
                  className="text-[0.6rem] font-black tabular-nums w-5 shrink-0 mt-1"
                  style={{ color: 'var(--moss)' }}
                >
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
