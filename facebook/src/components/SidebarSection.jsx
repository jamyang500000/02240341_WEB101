export function SidebarSection({ title, children }) {
  return (
    <section className="card cardPad">
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  )
}

