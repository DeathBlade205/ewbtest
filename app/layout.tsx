import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Lama Lama Country — EWB Challenge 2025',
  description: '31265 CITP Assessment Task 3 — One Prompt Wonders',
  icons: {
    icon: '/favicon-solar.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 min-w-0 relative md:ml-56">
            {children}
            <PageNav />
          </main>
        </div>
      </body>
    </html>
  )
}
