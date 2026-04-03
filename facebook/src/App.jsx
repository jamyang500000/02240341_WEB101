import './styles/app.css'
import { TopNav } from './components/TopNav.jsx'
import { LeftSidebar } from './components/LeftSidebar.jsx'
import { RightSidebar } from './components/RightSidebar.jsx'
import { Feed } from './components/Feed.jsx'

function App() {
  return (
    <div className="appShell">
      <TopNav />

      <main className="layout" role="main">
        <aside className="col colLeft" aria-label="Shortcuts">
          <LeftSidebar />
        </aside>

        <section className="col colCenter" aria-label="Feed">
          <Feed />
        </section>

        <aside className="col colRight" aria-label="Contacts">
          <RightSidebar />
        </aside>
      </main>
    </div>
  )
}

export default App
