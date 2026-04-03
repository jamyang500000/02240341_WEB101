export function Avatar({ name, bg = '#1877f2', size = 36 }) {
  const initials = (name || '?')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')

  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: bg,
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        fontWeight: 800,
        fontSize: Math.max(12, Math.round(size * 0.36)),
        flex: '0 0 auto',
      }}
      title={name}
    >
      {initials}
    </div>
  )
}

