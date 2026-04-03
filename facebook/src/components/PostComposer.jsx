import { Avatar } from './Avatar.jsx'
import { currentUser } from '../data/mockData.js'

export function PostComposer() {
  return (
    <section className="card composer">
      <div className="composerTop">
        <Avatar name={currentUser.name} bg={currentUser.avatarBg} size={40} />
        <button type="button" className="composerInput" aria-label="What's on your mind?">
          What&apos;s on your mind, {currentUser.name.split(' ')[0]}?
        </button>
      </div>
      <div className="composerActions" role="group" aria-label="Quick actions">
        <button type="button" className="pill">
          Live video
        </button>
        <button type="button" className="pill">
          Photo/video
        </button>
        <button type="button" className="pill">
          Feeling/activity
        </button>
      </div>
    </section>
  )
}

