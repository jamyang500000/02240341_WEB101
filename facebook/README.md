# WEB101 Practical Assignment 1 — Facebook Page Recreation (React)

This project recreates a **single Facebook-like “Home / Feed” page** using **React (Vite)** with a **component-based architecture**, reusable UI components, and responsive layout for **mobile, tablet, and desktop** screens.

## Functionality implemented

- Top navigation bar (brand, search input, action buttons)
- Responsive 3-column layout:
  - Left: menu/shortcuts
  - Center: feed (composer + posts)
  - Right: contacts list (hidden on smaller screens)
- Feed filtering (type in “Filter posts…” to filter the rendered posts)
- Reusable `PostCard` component powered by a local data source

## Component structure

```
App
├─ TopNav
├─ LeftSidebar
│  └─ SidebarSection
├─ Feed
│  ├─ PostComposer
│  └─ PostCard (reusable)
└─ RightSidebar
   └─ SidebarSection
```

## Data source (reusable components)

All feed/side content is driven from:

- `src/data/mockData.js` (posts, contacts, shortcuts, current user)

The `PostCard` renders each post from `posts[]`, demonstrating reusable component + external data.

## Responsive design notes

- Desktop: 3 columns (left / center / right)
- Tablet: 2 columns (left + center), right sidebar hidden
- Mobile: 1 column (center), both sidebars hidden; nav search collapses

Breakpoints are implemented in:

- `src/styles/app.css`

## How to run

In the project folder:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
