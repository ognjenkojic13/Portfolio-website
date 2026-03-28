export function initIntro(screen, onComplete) {
  const nameEl = document.getElementById('intro-name');
  const sepEl  = document.getElementById('intro-sep');

  nameEl.textContent = 'Ognjen Kojić';
  sepEl.textContent  = ' — Portfolio';

  setTimeout(() => { nameEl.style.opacity = '1'; }, 400);
  setTimeout(() => { sepEl.style.opacity  = '1'; }, 700);

  setTimeout(() => {
    screen.style.transition = 'opacity 0.6s ease';
    screen.style.opacity = '0';
    setTimeout(() => {
      screen.style.display = 'none';
      onComplete();
    }, 620);
  }, 2400);
}
