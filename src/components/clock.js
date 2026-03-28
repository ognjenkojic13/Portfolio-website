const fmt = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  timeZoneName: 'short',
});

export function initClock(el) {
  function update() { el.textContent = 'Local Time: ' + fmt.format(new Date()); }
  update();
  setInterval(update, 1000);
}
