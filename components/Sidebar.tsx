'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const NAV = [
  { href: '/acknowledgement',     label: 'Acknowledgement',       num: null },
  { href: '/group-declaration',   label: 'Group Declaration',     num: null },
  { href: '/',                    label: 'Executive Summary',     num: null },
  { href: '/background',          label: 'Background',            num: '01' },
  { href: '/problem',             label: 'Problem Description',   num: '02' },
  { href: '/design-options',      label: 'Design Options',        num: '03' },
  { href: '/design-selection',    label: 'Design Selection',      num: '04' },
  { href: '/detailed-design',     label: 'Detailed Design',       num: '05' },
  { href: '/prototyping',         label: 'Prototyping',           num: '06' },
  { href: '/implementation',      label: 'Implementation',        num: '07' },
  { href: '/cost-analysis',       label: 'Cost Analysis',         num: '08' },
  { href: '/other-considerations',label: 'Other Considerations',  num: '09' },
  { href: '/recommendations',     label: 'Recommendations',       num: '10' },
  { href: '/references',          label: 'References',            num: null },
  { href: '/appendices',          label: 'Appendices',            num: null },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="hidden md:flex flex-col w-52 shrink-0 sticky overflow-y-auto"
      style={{
        top: 52,
        height: 'calc(100vh - 52px)',
        background: 'var(--surface)',
        borderRight: '1px solid var(--border)',
      }}
    >
      <div className="px-4 pt-5 pb-2">
        <p
          className="text-[0.58rem] font-bold uppercase tracking-[0.2em]"
          style={{ color: 'var(--ink-faint)' }}
        >
          Contents
        </p>
      </div>

      <nav className="flex flex-col px-2 pb-8 gap-0.5">
        {NAV.map(({ href, label, num }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`nav-link group${isActive ? ' active' : ''}`}
            >
              {num ? (
                <span
                  className="text-[0.6rem] font-bold w-5 shrink-0 tabular-nums"
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
      </nav>

      {/* Bottom accent */}
      <div className="mt-auto px-4 pb-6">
        <div
          className="rounded-md p-3 text-center"
          style={{ background: 'rgba(46,125,82,0.08)', border: '1px solid rgba(46,125,82,0.15)' }}
        >
          <p className="text-[0.58rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--moss)' }}>
            EWB Challenge
          </p>
          <p className="text-[0.7rem] mt-0.5" style={{ color: 'var(--ink-faint)' }}>
            Lama Lama Country
          </p>
        </div>
      </div>
    </aside>
  )
}
