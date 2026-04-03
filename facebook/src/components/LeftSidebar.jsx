import { shortcuts, currentUser } from '../data/mockData.js'
import { SidebarSection } from './SidebarSection.jsx'
import { Avatar } from './Avatar.jsx'

export function LeftSidebar() {
  return (
    <div className="stack">
      <SidebarSection title="Menu">
        <ul className="list">
          <li>
            <button className="rowBtn" type="button">
              <Avatar name={currentUser.name} bg={currentUser.avatarBg} size={28} />
              <div>
                <div className="rowPrimary">{currentUser.name}</div>
                <div className="rowSecondary">See your profile</div>
              </div>
            </button>
          </li>
          {shortcuts.map((s) => (
            <li key={s.id}>
              <button className="rowBtn" type="button">
                <div className="emojiDot" aria-hidden="true">
                  {s.emoji}
                </div>
                <div className="rowPrimary">{s.label}</div>
              </button>
            </li>
          ))}
        </ul>
      </SidebarSection>
    </div>
  )
}

