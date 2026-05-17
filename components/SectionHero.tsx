interface Props {
  num?: string
  label?: string
  title: string
  subtitle?: string
}

export default function SectionHero({ num, title, subtitle }: Props) {
  return (
    <div
      className="relative px-8 md:px-14 pt-10 pb-8 overflow-hidden"
      style={{ borderBottom: '1px solid var(--border)', background: '#ffffff' }}
    >
      {/* Faded background number */}
      {num && (
        <div
          className="absolute right-6 top-0 font-black select-none pointer-events-none leading-none"
          style={{
            fontSize: 'clamp(100px, 18vw, 200px)',
            color: 'rgba(194,122,8,0.06)',
            letterSpacing: '-0.04em',
          }}
        >
          {num}
        </div>
      )}

      <div className="relative">
        {num && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--ochre)' }}>
            Section {num}
          </p>
        )}
        <h1
          className="font-black leading-none mb-3"
          style={{
            fontSize: 'clamp(30px, 5.5vw, 56px)',
            color: 'var(--forest)',
            letterSpacing: '-0.025em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
