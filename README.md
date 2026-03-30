<img width="1680" height="1050" alt="Screenshot 2026-03-30 at 17 25 52" src="https://github.com/user-attachments/assets/41d7ddfa-266e-4454-bcb4-2db9e892150d" />
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
