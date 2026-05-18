'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/acknowledgement',      label: 'Acknowledgement',       num: null,  group: 'Preface' },
  { href: '/group-declaration',    label: 'Group Declaration',     num: null,  group: 'Preface' },
  { href: '/',                     label: 'Executive Summary',     num: null,  group: 'Preface' },
  { href: '/project-details',      label: 'Project Details',       num: '01',  group: 'Report' },
  { href: '/background',           label: 'Background',            num: '02',  group: 'Report' },
  { href: '/problem',              label: 'Problem Description',   num: '03',  group: 'Report' },
  { href: '/design-options',       label: 'Design Options',        num: '04',  group: 'Report' },
  { href: '/design-selection',     label: 'Design Selection',      num: '05',  group: 'Report' },
  { href: '/detailed-design',      label: 'Detailed Design',       num: '06',  group: 'Report' },
  { href: '/prototyping',          label: 'Prototyping',           num: '07',  group: 'Report' },
  { href: '/implementation',       label: 'Implementation',        num: '08',  group: 'Report' },
  { href: '/cost-analysis',        label: 'Cost Analysis',         num: '09',  group: 'Report' },
  { href: '/other-considerations', label: 'Other Considerations',  num: '10',  group: 'Report' },
  { href: '/recommendations',      label: 'Recommendations',       num: '11',  group: 'Report' },
  { href: '/references',           label: 'References',            num: null,  group: 'End Matter' },
  { href: '/group-charter',        label: 'Appendix 1: Group Charter',    num: null,  group: 'End Matter' },
  { href: '/meeting-minutes',      label: 'Appendix 2: Meeting Minutes',  num: null,  group: 'End Matter' },
  { href: '/ai-prompt-log',        label: 'Appendix 3: AI Prompt Log',    num: null,  group: 'End Matter' },
]

export default function Sidebar() {
  const pathname = usePathname()

  const groups = ['Preface', 'Report', 'End Matter'] as const
  const grouped = groups.map(g => ({
    group: g,
    items: NAV.filter(n => n.group === g),
  }))

  return (
    <aside
      className="hidden md:flex flex-col"
      style={{
        position: 'fixed',
        top: 56,
        left: 0,
        width: 224,
        bottom: 0,
        overflowY: 'auto',
        background: '#ffffff',
        borderRight: '1px solid var(--border)',
        zIndex: 40,
      }}
    >
      <nav className="flex flex-col py-4 gap-5">
        {grouped.map(({ group, items }) => (
          <div key={group}>
            <p
              className="px-4 pb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em]"
              style={{ color: 'var(--ink-faint)' }}
            >
              {group}
            </p>
            <div className="flex flex-col">
              {items.map(({ href, label, num }) => {
                const isActive = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2.5 py-2 text-xs transition-colors"
                    style={
                      isActive
                        ? {
                            background: 'rgba(46,125,82,0.1)',
                            borderLeft: '3px solid var(--moss)',
                            paddingLeft: 'calc(1rem - 3px)',
                            paddingRight: '1rem',
                            color: 'var(--pine)',
                            fontWeight: 700,
                          }
                        : {
                            color: 'var(--ink-muted)',
                            borderLeft: '3px solid transparent',
                            paddingLeft: 'calc(1rem - 3px)',
                            paddingRight: '1rem',
                          }
                    }
                  >
                    {num ? (
                      <span
                        className="text-[0.6rem] font-bold tabular-nums w-5 shrink-0"
                        style={{ color: isActive ? 'var(--moss)' : 'var(--ink-faint)' }}
                      >
                        {num}
                      </span>
                    ) : (
                      <span className="w-5 shrink-0" />
                    )}
                    <span className="leading-tight">{label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto px-4 pb-5">
        <div
          className="rounded-md px-3 py-2.5 text-center"
          style={{ background: 'rgba(46,125,82,0.07)', border: '1px solid rgba(46,125,82,0.15)' }}
        >
          <p className="text-[0.58rem] font-bold uppercase tracking-widest" style={{ color: 'var(--moss)' }}>
            EWB Challenge 2025
          </p>
          <p className="text-[0.65rem] mt-0.5" style={{ color: 'var(--ink-faint)' }}>
            Lama Lama Country
          </p>
        </div>
      </div>
    </aside>
  )
}
