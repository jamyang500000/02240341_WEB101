export function IconButton({ label, children, onClick }) {
  return (
    <button className="iconBtn" type="button" onClick={onClick} aria-label={label}>
      {children}
    </button>
  )
}

