'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/acknowledgement',     label: 'Acknowledgement' },
  { href: '/group-declaration',   label: 'Group Declaration' },
  { href: '/',                    label: 'Executive Summary' },
  { href: '/background',          label: '1. Background' },
  { href: '/problem',             label: '2. Problem Description',
    sub: [{ href: '/problem#design-criteria', label: '2.1 Design Criteria' }] },
  { href: '/design-options',      label: '3. Design Options' },
  { href: '/design-selection',    label: '4. Design Selection' },
  { href: '/detailed-design',     label: '5. Detailed Design' },
  { href: '/prototyping',         label: '6. Prototyping' },
  { href: '/implementation',      label: '7. Implementation Plan' },
  { href: '/cost-analysis',       label: '8. Cost Analysis' },
  { href: '/other-considerations',label: '9. Other Considerations' },
  { href: '/recommendations',     label: '10. Recommendations' },
  { href: '/references',          label: 'References' },
  { href: '/appendices',          label: 'Appendices' },
] as const

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-gray-200 bg-white pt-6 pb-10 overflow-y-auto sticky top-[52px] h-[calc(100vh-52px)]">
      <p className="px-4 mb-3 text-[0.6rem] font-semibold uppercase tracking-widest text-gray-400">
        Contents
      </p>
      <nav className="flex flex-col gap-0.5">
        {NAV.map(({ href, label, ...rest }) => {
          const sub = (rest as { sub?: { href: string; label: string }[] }).sub
          const isActive = pathname === href
          return (
            <div key={href}>
              <Link
                href={href}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </Link>
              {sub && isActive && sub.map(s => (
                <Link key={s.href} href={s.href} className="nav-sub">
                  {s.label}
                </Link>
              ))}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
