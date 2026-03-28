const ITEMS = [
  {
    title: 'Frontend Developer & UX/UI Designer',
    meta: 'Banking Platform — RAF University / Feb 2025 – Jul 2025',
    desc: 'Designed and built the frontend for a full-scale banking platform as part of a 13-member cross-functional team. Produced 20+ high-fidelity Figma screens across payments, FX exchange, loans, and card management, then implemented them in React with JWT-based authentication for 6 user roles and REST API integration across multiple backend services.',
    link: { label: 'GitHub', href: 'https://github.com/RAF-SI-2024/Banka-1-Frontend' },
  },
  {
    title: 'QA Engineer',
    meta: 'Test Automation / Jan 2026 – Mar 2026',
    desc: 'Tested a live production feature on a high-traffic platform — manual and exploratory testing, full QA documentation (use cases, Gherkin BDD, test execution report, bug report), and an end-to-end automated suite in Playwright and TypeScript using Page Object Model architecture.',
    link: null,
  },
  {
    title: 'Full Stack Developer',
    meta: 'Freelance / Sep 2024 – Nov 2024',
    desc: 'Built a food ordering admin panel end-to-end — Vue.js frontend, Node.js/Express backend, MySQL database. Implemented authentication, protected routes, and full CRUD operations. Delivered solo within 2 months.',
    link: null,
  },
  {
    title: 'UX/UI Designer',
    meta: 'Freelance / Dec 2024 – Jan 2025',
    desc: 'Designed a photography portfolio in Figma — from wireframes to a developer-ready high-fidelity prototype, with a complete visual system covering layout, typography, and spacing. Delivered solo in 3 weeks.',
    link: { label: 'Figma', href: 'https://www.figma.com/proto/cRPoZ4qdSnkoyNshquaoaN?node-id=0-1&t=9t4fIRoMvKfhybv8-6' },
  },
];

function updateMask(el) {
  const atTop    = el.scrollTop <= 5;
  const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
  el.className = 'no-scrollbar ' + (
    atTop && atBottom ? '' :
    atTop             ? 'mask-bottom' :
    atBottom          ? 'mask-top' :
                        'mask-both'
  );
}

export function renderWork(container) {
  const wrap = document.createElement('div');
  wrap.className = 'no-scrollbar';
  wrap.style.cssText = 'color: #fff; font-weight: 500; max-height: 55vh; overflow-y: auto; padding-right: 1rem;';

  ITEMS.forEach(item => {
    const div = document.createElement('div');
    div.style.marginBottom = '32px';

    const h2 = document.createElement('h2');
    h2.style.cssText = 'font-size: clamp(1.8rem, 4.5vw, 3.2rem); font-weight: 300; text-transform: uppercase; line-height: 1.111; margin: 0;';
    h2.textContent = item.title;

    const meta = document.createElement('p');
    meta.style.cssText = 'font-size: clamp(0.85rem, 1.8vw, 1.25rem); color: #9ca3af; margin-top: 0.25rem;';
    if (item.link) {
      const a = document.createElement('a');
      a.href = item.link.href;
      a.textContent = item.link.label;
      a.className = 'ext-link';
      a.target = '_blank';
      a.rel = 'noreferrer';
      meta.appendChild(a);
      meta.appendChild(document.createTextNode(' / ' + item.meta));
    } else {
      meta.textContent = item.meta;
    }

    const desc = document.createElement('p');
    desc.style.cssText = 'font-size: clamp(0.85rem, 1.8vw, 1.25rem); font-weight: 500; max-width: 70%; line-height: 1.43; margin-top: 0.25rem;';
    desc.textContent = item.desc;

    div.appendChild(h2);
    div.appendChild(meta);
    div.appendChild(desc);
    wrap.appendChild(div);
  });

  updateMask(wrap);
  wrap.addEventListener('scroll', () => updateMask(wrap));
  container.appendChild(wrap);
}
