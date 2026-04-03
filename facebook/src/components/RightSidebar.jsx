import { contacts } from '../data/mockData.js'
import { SidebarSection } from './SidebarSection.jsx'
import { Avatar } from './Avatar.jsx'

function statusColor(status) {
  switch (status) {
    case 'Online':
      return '#42b72a'
    case 'Away':
      return '#f7b928'
    default:
      return '#bcc0c4'
  }
}

export function RightSidebar() {
  return (
    <div className="stack">
      <SidebarSection title="Contacts">
        <ul className="list">
          {contacts.map((c) => (
            <li key={c.id}>
              <button className="rowBtn" type="button">
                <div className="avatarWrap">
                  <Avatar name={c.name} bg="#8a8d91" size={28} />
                  <span
                    className="statusDot"
                    aria-hidden="true"
                    style={{ background: statusColor(c.status) }}
                  />
                </div>
                <div>
                  <div className="rowPrimary">{c.name}</div>
                  <div className="rowSecondary">{c.status}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </SidebarSection>
    </div>
  )
}

