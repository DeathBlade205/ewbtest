'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6"
      style={{
        height: 56,
        background: '#ffffff',
        borderBottom: '3px solid var(--moss)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
      }}
    >
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'var(--pine)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 13 Q9 5 15 13" stroke="rgba(74,222,128,0.9)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <circle cx="9" cy="13" r="2" fill="rgba(74,222,128,0.85)" />
            <line x1="9" y1="5.5" x2="9" y2="8" stroke="rgba(74,222,128,0.55)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="5" y1="8" x2="6.4" y2="9.4" stroke="rgba(74,222,128,0.45)" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="13" y1="8" x2="11.6" y2="9.4" stroke="rgba(74,222,128,0.45)" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-sm leading-tight" style={{ color: 'var(--forest)' }}>
            Lama Lama Country
          </p>
          <p className="text-xs leading-tight" style={{ color: 'var(--ink-faint)' }}>
            EWB Challenge 2025 · One Prompt Wonders
          </p>
        </div>
      </Link>

      <div
        className="hidden sm:block text-xs font-medium px-3 py-1 rounded"
        style={{ background: 'var(--surface-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }}
      >
        31265 CITP · Task 3
      </div>
    </header>
  )
}
