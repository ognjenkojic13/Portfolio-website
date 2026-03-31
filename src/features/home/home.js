export function renderHome(container) {
  const div = document.createElement('div');
  div.style.cssText = 'font-size: 1.1rem; font-weight: 700; color: #fff; line-height: 1.5; max-width: 72%;';
  div.textContent = 'Frontend developer & UX/UI designer based in Belgrade. I build responsive web applications and design interfaces people actually enjoy using. Final-year Computer Science student at RAF University — currently seeking a junior frontend or UX/UI-oriented role.';
  container.appendChild(div);
}
