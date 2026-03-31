const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]()#/;:=';
const FINAL = 'Ognjen Kojić Portfolio';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function initIntro(screen, onComplete) {
  screen.innerHTML = '';
  screen.style.cssText = `
    position: fixed; inset: 0; z-index: 100;
    background: #000;
    display: flex; align-items: center; justify-content: center;
  `;

  const el = document.createElement('div');
  el.style.cssText = `
    font-family: 'Courier New', monospace;
    font-size: clamp(1.2rem, 5vw, 3rem);
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.05em;
    white-space: nowrap;
  `;
  screen.appendChild(el);

  const resolved = new Array(FINAL.length).fill(false);
  const display  = new Array(FINAL.length).fill(' ');

  let startTime = null;
  const TOTAL_DURATION = 2000;

  function frame(ts) {
    if (!startTime) startTime = ts;
    const progress = (ts - startTime) / TOTAL_DURATION;

    const charsToResolve = Math.floor(progress * FINAL.length);

    for (let i = 0; i < FINAL.length; i++) {
      if (i < charsToResolve && !resolved[i]) {
        resolved[i] = true;
        display[i] = FINAL[i];
      }
      if (!resolved[i] && i < charsToResolve + 4) {
        display[i] = randomChar();
      }
    }

    el.textContent = display.join('');

    if (!resolved.every(Boolean)) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = FINAL;
      setTimeout(() => {
        const top = document.createElement('div');
        top.style.cssText = `
          position: fixed; left: 0; right: 0; top: 0; bottom: 50%;
          background: #000; z-index: 200;
          transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
        `;
        const bot = document.createElement('div');
        bot.style.cssText = `
          position: fixed; left: 0; right: 0; top: 50%; bottom: 0;
          background: #000; z-index: 200;
          transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1) 0.04s;
        `;
        document.body.append(top, bot);
        screen.style.display = 'none';
        onComplete();
        requestAnimationFrame(() => {
          top.style.transform = 'translateY(-100%)';
          bot.style.transform = 'translateY(100%)';
        });
        setTimeout(() => { top.remove(); bot.remove(); }, 700);
      }, 600);
    }
  }

  requestAnimationFrame(frame);
}
