import { useMemo, useState } from 'react'
import { posts as initialPosts } from '../data/mockData.js'
import { PostComposer } from './PostComposer.jsx'
import { PostCard } from './PostCard.jsx'

export function Feed() {
  const [query, setQuery] = useState('')

  const visiblePosts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return initialPosts
    return initialPosts.filter(
      (p) =>
        p.author.name.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.audience.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="feed">
      <div className="feedHeader">
        <h1 className="feedTitle">Home</h1>
        <label className="feedSearch">
          <span className="feedSearchLabel">Filter</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            aria-label="Filter posts"
          />
        </label>
      </div>

      <PostComposer />

      <div className="postList" aria-live="polite">
        {visiblePosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

