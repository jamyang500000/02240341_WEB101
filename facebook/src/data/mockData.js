export const currentUser = {
  id: 'u_me',
  name: 'Jamyang Dorji',
  avatarBg: '#1877f2',
}

export const shortcuts = [
  { id: 's1', label: 'Friends', emoji: '👥' },
  { id: 's2', label: 'Groups', emoji: '👪' },
  { id: 's3', label: 'Marketplace', emoji: '🛒' },
  { id: 's4', label: 'Memories', emoji: '🕘' },
  { id: 's5', label: 'Saved', emoji: '🔖' },
]

export const contacts = [
  { id: 'c1', name: 'Pema', status: 'Online' },
  { id: 'c2', name: 'Sonam', status: 'Online' },
  { id: 'c3', name: 'Tshering', status: 'Away' },
  { id: 'c4', name: 'Karma', status: 'Offline' },
  { id: 'c5', name: 'Choden', status: 'Online' },
]

export const posts = [
  {
    id: 'p1',
    author: { name: 'Pema', avatarBg: '#42b72a' },
    time: '2h',
    audience: 'Public',
    content:
      'Built my first React component hierarchy today. Reusable cards make everything cleaner.',
    stats: { likes: 132, comments: 24, shares: 9 },
  },
  {
    id: 'p2',
    author: { name: 'Sonam', avatarBg: '#f02849' },
    time: '5h',
    audience: 'Friends',
    content:
      'Responsive layout check: mobile, tablet, desktop — all working nicely with CSS grid.',
    stats: { likes: 89, comments: 11, shares: 3 },
  },
  {
    id: 'p3',
    author: { name: 'Tshering', avatarBg: '#ffba00' },
    time: '1d',
    audience: 'Public',
    content:
      'Single responsibility principle is underrated. Tiny components are so much easier to test and reuse.',
    stats: { likes: 203, comments: 41, shares: 17 },
  },
]

