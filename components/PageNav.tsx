'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ORDER = [
  { href: '/acknowledgement',      label: 'Acknowledgement' },
  { href: '/group-declaration',    label: 'Group Declaration' },
  { href: '/',                     label: 'Executive Summary' },
  { href: '/project-details',      label: 'Project Details' },
  { href: '/background',           label: 'Background' },
  { href: '/problem',              label: 'Problem Description' },
  { href: '/design-options',       label: 'Design Options' },
  { href: '/design-selection',     label: 'Design Selection' },
  { href: '/detailed-design',      label: 'Detailed Design' },
  { href: '/prototyping',          label: 'Prototyping' },
  { href: '/implementation',       label: 'Implementation' },
  { href: '/cost-analysis',        label: 'Cost Analysis' },
  { href: '/other-considerations', label: 'Other Considerations' },
  { href: '/recommendations',      label: 'Recommendations' },
  { href: '/references',           label: 'References' },
  { href: '/group-charter',        label: 'Group Charter' },
  { href: '/meeting-minutes',      label: 'Meeting Minutes' },
  { href: '/ai-prompt-log',        label: 'AI Prompt Log' },
]

export default function PageNav() {
  const pathname = usePathname()
  const idx = ORDER.findIndex(n => n.href === pathname)
  if (idx === -1) return null

  const prev = idx > 0 ? ORDER[idx - 1] : null
  const next = idx < ORDER.length - 1 ? ORDER[idx + 1] : null

  return (
    <div
      className="flex items-stretch justify-between gap-3 px-8 md:px-14 py-6 mt-2"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-3 rounded-lg px-4 py-3 group transition-colors flex-1 max-w-xs"
          style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" style={{ color: 'var(--moss)' }}>
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'var(--ink-faint)' }}>Previous</p>
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--pine)' }}>{prev.label}</p>
          </div>
        </Link>
      ) : <div className="flex-1 max-w-xs" />}

      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-3 rounded-lg px-4 py-3 group transition-colors flex-1 max-w-xs justify-end ml-auto text-right"
          style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
        >
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'var(--ink-faint)' }}>Next</p>
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--pine)' }}>{next.label}</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" style={{ color: 'var(--moss)' }}>
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ) : <div className="flex-1 max-w-xs" />}
    </div>
  )
}
