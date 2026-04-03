import { Avatar } from './Avatar.jsx'

function LikeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 21H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4v11Zm2 0h6.2a2 2 0 0 0 1.97-1.67l1.33-8A2 2 0 0 0 18.53 9H14V6.5A3.5 3.5 0 0 0 10.5 3L11 9H9v12Z"
      />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Z"
      />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18 8a3 3 0 1 0-2.82-4H15a3 3 0 0 0 .18 1L8.9 8.2a3 3 0 0 0-1.9-.7a3 3 0 1 0 0 6c.7 0 1.34-.24 1.85-.64l6.32 3.1A3 3 0 0 0 15 17a3 3 0 1 0 3-3c-.63 0-1.2.2-1.67.53l-6.4-3.14c.05-.22.07-.45.07-.69c0-.25-.03-.49-.08-.72l6.33-3.2c.47.37 1.06.6 1.75.6Z"
      />
    </svg>
  )
}

export function PostCard({ post }) {
  return (
    <article className="card post">
      <header className="postHeader">
        <Avatar name={post.author.name} bg={post.author.avatarBg} size={40} />
        <div className="postMeta">
          <div className="postAuthor">{post.author.name}</div>
          <div className="postSub">
            {post.time} · {post.audience}
          </div>
        </div>
        <button type="button" className="dotsBtn" aria-label="Post options">
          ···
        </button>
      </header>

      <div className="postBody">{post.content}</div>

      <footer className="postFooter">
        <div className="postStats" aria-label="Post statistics">
          <span>{post.stats.likes} likes</span>
          <span>
            {post.stats.comments} comments · {post.stats.shares} shares
          </span>
        </div>

        <div className="postActions" role="group" aria-label="Post actions">
          <button type="button" className="actionBtn">
            <LikeIcon /> Like
          </button>
          <button type="button" className="actionBtn">
            <CommentIcon /> Comment
          </button>
          <button type="button" className="actionBtn">
            <ShareIcon /> Share
          </button>
        </div>
      </footer>
    </article>
  )
}

