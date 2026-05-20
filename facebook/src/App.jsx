import './styles/app.css'

import { TopNav } from './components/TopNav.jsx'
import { LeftSidebar } from './components/LeftSidebar.jsx'
import { RightSidebar } from './components/RightSidebar.jsx'
import { Feed } from './components/Feed.jsx'

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <TopNav />

      {/* MAIN LAYOUT */}
      <main className="main-layout">

        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <LeftSidebar />
        </aside>

        {/* CENTER FEED */}
        <section className="feed">
          <Feed />
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="rightbar">
          <RightSidebar />
        </aside>

      </main>
    </div>
  )
}

export default App