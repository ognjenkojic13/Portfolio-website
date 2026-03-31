<img width="1413" height="795" alt="Screenshot 2026-03-30 at 17 28 22" src="https://github.com/user-attachments/assets/28343475-4a81-4d42-bb9a-121e0d05895b" />

# Ognjen Kojić — Portfolio

Vanilla JavaScript portfolio website featuring a canvas-based film grain and diagonal wave beam animation. Single-page application with smooth section transitions, responsive layout, and a minimal black-and-white aesthetic.

## Tech Stack

- Vanilla JavaScript (ES Modules)
- HTML5 Canvas API
- CSS3
- Node.js (dev server)

## Features

- Animated canvas background — diagonal wave beam + film grain
- Client-side routing with fade transitions
- Responsive design — desktop and mobile layouts
- Fluid typography with `clamp()`
- Live local time clock

## Project Structure

```
src/
├── components/
│   ├── clock.js
│   ├── nav.js
│   └── noise-canvas.js
├── features/
│   ├── home/home.js
│   ├── work/work.js
│   ├── info/info.js
│   └── contact/contact.js
├── styles/
│   └── global.css
├── intro.js
├── main.js
└── renderer.js
```

## Running Locally

```bash
node serve.mjs
```

Open [http://localhost:3000](http://localhost:3000)
