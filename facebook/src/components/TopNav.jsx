import { IconButton } from './IconButton.jsx'

function FacebookMark() {
  return (
    <div className="fbMark" aria-hidden="true">
      f
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 4a6 6 0 1 1 3.67 10.75l5.29 5.3-1.42 1.41-5.3-5.29A6 6 0 0 1 10 4Zm0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
      />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 1 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2Z"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
    </svg>
  )
}

export function TopNav() {
  return (
    <header className="topNav" role="banner">
      <div className="topNavInner">
        <div className="topNavLeft">
          <FacebookMark />
          <div className="searchWrap">
            <span className="searchIcon" aria-hidden="true">
              <SearchIcon />
            </span>
            <input className="searchInput" placeholder="Search Facebook" aria-label="Search" />
          </div>
        </div>

        <div className="topNavRight">
          <IconButton label="Menu">
            <MenuIcon />
          </IconButton>
          <IconButton label="Notifications">
            <BellIcon />
          </IconButton>
          <div className="meDot" title="Profile" aria-hidden="true">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}

