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
        <img
          src="/ewbwebsitefavicon.png"
          alt="EWB One Prompt Wonders logo"
          className="w-8 h-8 shrink-0"
        />
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
