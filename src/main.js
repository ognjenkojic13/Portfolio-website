import { initIntro }       from './intro.js';
import { initNoiseCanvas } from './components/noise-canvas.js';
import { initNav }         from './components/nav.js';
import { initClock }       from './components/clock.js';
import { renderSection }   from './renderer.js';

const NAV_ITEMS = ['Home', 'Work', 'Info', 'Contact'];
let active = 'Home';

function setActive(name) {
  if (name === active) return;
  const area = document.getElementById('content-area');
  area.style.opacity = '0';
  setTimeout(() => {
    active = name;
    renderSection(active);
    area.style.opacity = '1';
    updateNavs();
  }, 150);
}

function updateNavs() {
  initNav(document.getElementById('desktop-nav'), NAV_ITEMS, active, setActive, 'right');
  initNav(document.getElementById('mobile-nav'),  NAV_ITEMS, active, setActive, 'left');
}

function onIntroDone() {
  const app = document.getElementById('main-app');
  app.style.opacity = '1';
  initNoiseCanvas(document.getElementById('noise-canvas'));
  renderSection(active);
  updateNavs();
  initClock(document.getElementById('clock'));
}

initIntro(document.getElementById('intro-screen'), onIntroDone);
