# Sun & Moon Tracker (World Time Windows)

[![Live on Vercel](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel)](https://sun-moon-tracker-a27p.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-razazaheer12%2FSun_Moon-Tracker-181717?style=for-the-badge&logo=github)](https://github.com/razazaheer12/Sun_Moon-Tracker)

A modern **React + Vite + TypeScript** app that helps you visualize **world time windows** for selected cities (time zone aware), including a **sky-style time background** and an at-a-glance time display.

> Built with a clean UI using **Tailwind CSS** and **shadcn/ui-style components**.

---

## ✨ Features

- **Search & add locations** (city-based)
- **Time zone aware live clock** (updates every second)
- **Sortable cards** (move up/down)
- **Delete locations**
- **Theme toggle** (light/dark)
- **Sky background** that reacts to the selected time (visual day progress)

---

## 🖥️ Live Demo

Check it out here:
- https://sun-moon-tracker-a27p.vercel.app/

---

## 🚀 Getting Started (Local Development)

### 1) Requirements

- Node.js (LTS recommended)
- npm

### 2) Install dependencies

From the project directory:

```bash
cd "d:/Code Playground/sunmoon-tracker/sunmoon-tracker"
npm i --legacy-peer-deps
```

> Note: This repo had a peer-dependency conflict during install. `--legacy-peer-deps` resolves it.

### 3) Run in development mode (with auto-reload)

```bash
npx nodemon --exec 'npm run dev'
```

Then open the URL shown in the terminal (Vite dev server).

---

## 🧱 Build for Production

```bash
npm run build
```

---

## 📦 Project Stack

- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI** (component primitives)
- **date-fns** (date/time utilities)

---

## 🌐 Deployment (Vercel)

### What to configure

This app does not require custom environment variables for runtime because it uses only local/browser time and built-in data.

### Typical Vercel setup

- Framework preset: **Vite**
- Build command:
  - `npm run build`
- Output directory:
  - `dist`

If you do get an env-var error from Vercel, it will show the missing variable name(s) in the build logs—add them to **Vercel → Settings → Environment Variables** as needed.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 🛡️ License

MIT (or your preferred license—update if the repo has a specific license file).


