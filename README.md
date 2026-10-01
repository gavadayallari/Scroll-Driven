# Itzfizz Scroll-Driven Hero Animation

A high-performance, cinematic, scroll-driven hero section built for the **Itzfizz Digital Web Development Internship Assignment**. Inspired by the mechanics of modern vehicle scroll interactions, this project delivers an original, dark digital-agency aesthetic that highlights modern frontend engineering, GSAP ScrollTrigger choreography, fluid interpolation, and accessible responsive design.

---

## 🚀 Live Demo & Repository

- **Live Demo**: [https://itzfizz-scroll-animation.vercel.app](https://itzfizz-scroll-animation.vercel.app) *(Replace with your deployed URL)*
- **GitHub Repository**: [https://github.com/your-username/itzfizz-scroll-animation](https://github.com/your-username/itzfizz-scroll-animation)

---

## 📌 Overview

This project showcases how a creative digital agency can captivate visitors within the first few seconds of page load. It combines a staggered entry animation timeline with a pinned, scroll-driven visual interaction powered by **GSAP ScrollTrigger**.

As the user scrolls:
1. **Pinned Viewport**: The hero section locks smoothly into place.
2. **Kinetic Main Visual**: A futuristic hypercar glides horizontally and vertically, subtly rotating and scaling in direct sync with scroll progress (`scrub: 1.2`).
3. **Speed Trail & Telemetry**: Dynamic speed lines and telemetry HUD metrics illuminate and track behind the vehicle.
4. **Parallax Typography**: The prominent `"W E L C O M E   I T Z F I Z Z"` letter-spaced headline drifts smoothly into depth as the visual accelerates.
5. **Seamless Continuation**: The pinned sequence exits naturally into Section 2 (**"WE BUILD DIGITAL EXPERIENCES"**), complete with glassmorphic capability cards and interactive agency metrics.

---

## ✨ Features

- **Cinetic Hero Experience**:
  - Pinned viewport using GSAP ScrollTrigger (`pin: true`, `scrub: 1.2`).
  - Staggered initial load sequence: Eyebrow (0.0s) &rarr; Headline characters (0.2s) &rarr; Subtitle & CTAs (0.5s) &rarr; Metric cards (0.7s) &rarr; Hypercar visual (0.9s).
  - Letter-by-letter staggered reveal of `"W E L C O M E   I T Z F I Z Z"`.
- **Main Visual & Kinetic FX**:
  - High-resolution, transparent-background hypercar asset (`/public/car.png` and `/public/car.webp`).
  - Hardware-accelerated transforms (`x`, `y`, `scale`, `rotation`, `opacity`).
  - Dynamic underglow, road contact shadow, and ambient light cone.
  - Glowing laser speed trail that expands in real-time along the vehicle's track.
- **Marketing Statistics**:
  - 3 marketing metric cards: `95% Client Satisfaction`, `40+ Digital Projects`, and `24/7 Creative Support`.
  - Individually animated on page load with subtle scaling and translation.
- **Section 2 — Capabilities**:
  - "WE BUILD DIGITAL EXPERIENCES" section featuring 3 feature cards:
    - `01 WEB DEVELOPMENT`
    - `02 CREATIVE DESIGN`
    - `03 DIGITAL PERFORMANCE`
  - Demonstrates continuous narrative flow from the pinned hero.
- **Ultra-Responsive**:
  - Adaptive animations via `gsap.matchMedia()` tailored for Desktop (1440x1024, 1920x1080), Tablet, and Mobile (390x844, 375x812).
  - Bounded translation vectors on mobile devices to prevent horizontal scrollbar overflow.
- **Accessibility & Motion Safety**:
  - Respects `prefers-reduced-motion: reduce` by disabling intense scrub effects and presenting instant, accessible layouts.
  - Semantic HTML5 structure and ARIA attributes.
- **Clean Architecture & Memory Management**:
  - Built with modular React components.
  - All GSAP animations scoped via `gsap.context()` for deterministic cleanup on unmount (`ctx.revert()`).

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular component structure and state lifecycle |
| **Vite 6** | Ultra-fast build tool, local dev server & HMR |
| **JavaScript (ES6+)** | Frontend logic and animation binding |
| **GSAP 3** | Core animation timelines and easing formulas |
| **GSAP ScrollTrigger** | Pinned viewport control and scrub-driven transforms |
| **Tailwind CSS** | Design system tokens, glassmorphism, and responsive utilities |
| **Lucide React** | Clean, minimalist iconography |

---

## 📂 Project Structure

```
itzfizz-scroll-animation/
├── public/
│   ├── car.png             # Transparent high-res hypercar visual
│   ├── car.webp            # Optimized WebP fallback
│   ├── favicon.svg         # Favicon icon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed header with mobile drawer & brand status
│   │   ├── Hero.jsx         # Pinned hero section & GSAP ScrollTrigger timeline
│   │   ├── Stats.jsx        # 3 marketing metric cards with load animation
│   │   ├── ScrollVisual.jsx # Hypercar visual, laser trail, underglow & HUD
│   │   ├── Features.jsx     # Section 2 ("WE BUILD DIGITAL EXPERIENCES")
│   │   └── Footer.jsx       # Agency footer, navigation & back-to-top button
│   ├── App.jsx              # Application root orchestrator
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives, fonts & utility classes
├── index.html               # Semantic HTML, Google Fonts, and OpenGraph meta
├── package.json             # Scripts & dependencies
├── tailwind.config.js       # Custom colors, fonts, and animation keyframes
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite config with relative base path
└── README.md
```

---

## 💻 Local Setup & Development

### Prerequisites
- **Node.js**: v18.0.0 or higher (Tested on v22.16.0)
- **npm**: v9.0.0 or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/itzfizz-scroll-animation.git
   cd itzfizz-scroll-animation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

### Production Build
To generate an optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ How GSAP ScrollTrigger Works in This Project

1. **Plugin Registration**:
   ```javascript
   import { gsap } from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';
   gsap.registerPlugin(ScrollTrigger);
   ```

2. **Scoped Context & Clean Teardown**:
   All animations are wrapped in `gsap.context()` inside a React layout effect:
   ```javascript
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       // Timeline and ScrollTrigger definitions
     }, containerRef);

     return () => ctx.revert(); // Automatically kills and reverts triggers
   }, []);
   ```

3. **Pinning with Smooth Scrubbing**:
   The hero viewport (`pinContainerRef`) is pinned while the parent triggers the scroll distance:
   ```javascript
   const scrollTl = gsap.timeline({
     scrollTrigger: {
       trigger: heroRef.current,
       pin: pinContainerRef.current,
       start: 'top top',
       end: '+=180%',
       scrub: 1.2,
       anticipatePin: 1,
       invalidateOnRefresh: true,
     },
   });
   ```

4. **Hardware Acceleration**:
   Animations target transform properties (`x`, `y`, `scale`, `rotation`, and `opacity`), paired with `will-change: transform`. This guarantees that the GPU processes the frame renders without triggering expensive DOM layout reflows.

5. **Responsive Interpolation (`gsap.matchMedia()`)**:
   Different translation distances and rotation thresholds are applied depending on viewport width breakpoints (`min-width: 1024px`, `768px - 1023px`, and `< 768px`), guaranteeing no horizontal overflow on mobile screens.

---

## 🚢 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `itzfizz-scroll-animation` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Option 2: GitHub Pages
1. In `vite.config.js`, the base path is configured with `'./'` (relative), allowing direct deployment to GitHub Pages or any sub-path.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist/` directory to GitHub Pages using the `gh-pages` package or a GitHub Actions workflow.

---

## 📑 Assignment Attribution

This project was developed by the candidate as part of the **Itzfizz Digital Web Development Internship Assignment**.

- **Objective**: Create a production-grade, scroll-driven hero section animation inspired by modern creative web standards and reference motion mechanics.
- **Reference**: [https://paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)
