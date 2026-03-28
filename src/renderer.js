import { renderHome }    from './features/home/home.js';
import { renderWork }    from './features/work/work.js';
import { renderInfo }    from './features/info/info.js';
import { renderContact } from './features/contact/contact.js';

const RENDERERS = { Home: renderHome, Work: renderWork, Info: renderInfo, Contact: renderContact };

export function renderSection(name) {
  const area = document.getElementById('content-area');
  area.innerHTML = '';
  RENDERERS[name](area);
}
