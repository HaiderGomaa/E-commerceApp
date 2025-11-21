# E-commerceApp

A small e-commerce frontend built with React and Vite. This repo contains a component-based UI for browsing products, viewing details, and a simple cart/checkout flow — built as a learning/demo project.

Contents
- Source: `src/` — React components, contexts and assets
- Config: `vite.config.js`, ESLint rules
- Public: static assets in `public/`

Quick start

1. Install dependencies

```powershell
cd 'D:\\ITC\\E-commerce\\E-commerce\\e-commerceApp'
npm install
```

2. Start development server

```powershell
npm run dev
```

Open the app at the URL printed by Vite (for example `http://localhost:5174/`). If port 5173 is in use, Vite will pick the next available port.

Build and preview

```powershell
npm run build
npm run preview
```

What you'll find here
- Component structure under `src/component/` (Navbar, Products, ProductDetails, Cart, Checkout, Orders)
- Context providers in `src/context/` for user, cart, and counters
- Styling with local CSS modules alongside components

Notes and recommendations
- The project is intended for local development and learning. It contains example data fetching with `axios` and client-side routing with `react-router-dom`.
- `npm audit` shows some vulnerabilities in dependencies; consider running `npm audit fix` if you plan to deploy.
- To expose the dev server on your LAN, run: `npm run dev -- --host`

Author
- HaiderGomaa

License
- This repository is provided as-is for demonstration and learning.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
