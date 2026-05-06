# 🌙☀️ Sun & Moon Tracker — World Time Windows

[![Live on Vercel](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel)](https://sun-moon-tracker-a27p.vercel.app/)

A beautiful **React + Vite + TypeScript** app that lets you explore the world through **time-zone aware “world time windows”**. Add your favorite cities and instantly see:

- the **current local time** in each timezone
- the **date** in that region
- a **sky background** that visually reflects the day progress (sun → moon vibe!)
- **reorder** and **remove** time cards with ease
- a **theme toggle** for comfortable viewing

---

## 📸 Preview

<img width="949" height="410" alt="image" src="https://github.com/user-attachments/assets/3058fb26-04f3-436c-a0d3-3cfb732f4fd6" />

## ✨ Why you’ll love it

- **Fast & responsive**: optimized client-side rendering.
- **Time-zone accurate**: uses timezone-aware calculations for each selected city.
- **Delightful UI**: sky-style background + clean card layout.
- **Simple flow**: search → add → compare time → reorder.

---

## 📱 Live Demo

Visit: **https://sun-moon-tracker-a27p.vercel.app/**

---

## 🧩 Features (at a glance)

- ✅ Search cities and **add time windows**
- ✅ Live clock updates (every second)
- ✅ **Move cards up/down** to prioritize your cities
- ✅ Delete cards
- ✅ Light/Dark **theme toggle**
- ✅ Sky background reacting to time (day progress)

---

## 🏗️ Project Structure

> (High-level map of the current codebase)

```text
sunmoon-tracker/
├─ public/
│  ├─ favicon.ico
│  └─ placeholder.svg
├─ src/
│  ├─ components/
│  │  ├─ TimeZoneCard.tsx
│  │  ├─ TimeZoneSearch.tsx
│  │  └─ (UI components: ThemeToggle, SkyBackground, etc.)
│  ├─ data/
│  │  └─ timezones.ts          # city → timezone suggestions
│  ├─ utils/
│  │  └─ timeUtils.ts         # timezone + day progress helpers
│  ├─ pages/
│  │  └─ Index.tsx            # main page UI
│  └─ (other config & styles)
├─ package.json
├─ vite.config.ts
└─ tailwind.config.ts
```

---

## 🚀 Getting Started (Local)

### 1) Requirements

- **Node.js** (LTS recommended)
- **npm**

### 2) Install dependencies

```bash
cd "d:/Code Playground/sunmoon-tracker/sunmoon-tracker"
npm i --legacy-peer-deps
```

> Note: This repo may show a peer-dependency conflict during installation. `--legacy-peer-deps` resolves it.

### 3) Run in development mode (auto reload)

```bash
npx nodemon --exec 'npm run dev'
```

Then open the local Vite URL shown in the terminal.

---

## 🧱 Production Build

```bash
npm run build
```

---

## 🌍 Deployment (Vercel)

This project is a static Vite React app and typically does not require runtime environment variables.

### Recommended Vercel settings

- **Framework preset:** Vite
- **Build command:** `npm run build`

If Vercel ever reports missing environment variables in your build logs, add them here:

**Vercel → Project → Settings → Environment Variables**

> For Vite apps, environment variables meant for client code generally need the `VITE_` prefix.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Commit your changes
4. Push and open a PR

---

## 📌 Credits

- Sky-time concept + UI components inspired by modern shadcn-style patterns.
- City suggestions stored in `src/data/timezones.ts`.

---

## 📝 License

MIT (or update with your preferred license if different). 

---

## 👨‍💻 Developer

<p align="center">
  Made with ❤️ by <strong>Raza Zaheer</strong>
</p>

<p align="center">
  <a href="https://github.com/razazaheer12">
    <img src="https://img.shields.io/badge/GitHub-razazaheer12-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

---

<p align="center">
  ⭐ If you found this project useful, please star it!
</p>

