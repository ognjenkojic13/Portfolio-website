export function initNav(container, items, active, onNavClick, align) {
  const isRight = align === 'right';
  container.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: ${isRight ? 'flex-end' : 'flex-start'};
    gap: 0;
  `;

  const nameEl = document.createElement('div');
  nameEl.style.cssText = `
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0;
    color: #fff;
    text-align: ${isRight ? 'right' : 'left'};
    cursor: pointer;
    margin-bottom: 24px;
    transition: opacity 0.3s ease;
    opacity: 1;
  `;
  nameEl.className = 'nav-name';
  nameEl.innerHTML = 'Ognjen Kojić';
  nameEl.addEventListener('click', () => onNavClick('Home'));
  wrap.appendChild(nameEl);

  const ul = document.createElement('ul');
  ul.style.cssText = `
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: ${isRight ? 'flex-end' : 'flex-start'};
  `;

  items.forEach(name => {
    const isActive = name === active;
    const li = document.createElement('li');
    li.style.cssText = `
      display: flex;
      align-items: center;
      gap: 0.45rem;
      justify-content: ${isRight ? 'flex-end' : 'flex-start'};
    `;

    const dot = document.createElement('span');
    dot.style.cssText = `
      display: block;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #fff;
      flex-shrink: 0;
      opacity: ${isActive ? 1 : 0};
      transform: scale(${isActive ? 1 : 0});
      transition: opacity 0.3s ease, transform 0.3s ease;
    `;

    const a = document.createElement('a');
    a.href = '#';
    a.textContent = name;
    a.className = 'nav-link';
    a.style.opacity = isActive ? '0.45' : '1';
    a.style.pointerEvents = isActive ? 'none' : 'auto';

    if (!isActive) {
      a.addEventListener('click', e => { e.preventDefault(); onNavClick(name); });
    }

    if (!isRight) li.appendChild(dot);
    li.appendChild(a);
    if (isRight)  li.appendChild(dot);

    ul.appendChild(li);
  });

  wrap.appendChild(ul);
  container.appendChild(wrap);
}
