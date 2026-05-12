import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'EWB Challenge — Group Project',
  description: 'CITP Assessment Task 3 Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f5f7f5]">
        <header className="bg-[#1a4731] text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2e7d52] flex items-center justify-center font-bold text-sm">EW</div>
            <span className="font-semibold text-sm tracking-wide">EWB Challenge — CITP Task 3</span>
          </div>
          <span className="text-xs text-green-200 hidden sm:block">31265 Computing and Information Technology Practice</span>
        </header>

        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 min-w-0 px-6 py-8 md:px-12 md:py-10">
            <div className="max-w-3xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
