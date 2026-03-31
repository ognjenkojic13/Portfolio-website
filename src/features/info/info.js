export function renderInfo(container) {
  const div = document.createElement('div');
  div.style.cssText = 'color: #fff;';
  div.innerHTML = `
    <div style="font-size: clamp(0.9rem, 1.1vw, 1.05rem); font-weight: 700; margin-bottom: 16px;">Info</div>
    <div style="font-size: clamp(0.8rem, 1.1vw, 1rem); font-weight: 500; line-height: 1.43; max-width: 70%;">
      Computer Science @ <em>RAF University</em>, Belgrade — final year.<br><br>
      I work on both the development and design side of frontend. Most recently
      I was frontend developer and UX/UI designer on a banking platform —
      designed 20+ Figma screens covering payments, loans, FX exchange and
      card management, then built the React interfaces on top of it.<br><br>
      I also have hands-on QA experience — writing end-to-end test suites in
      Playwright and TypeScript and producing full QA documentation
      for a live production feature.<br><br>
      Stack: React, Vue.js, JavaScript, Figma, Playwright, TypeScript, REST APIs.<br><br>
      <span style="font-style: italic; opacity: 0.5;">(Last updated March 2026)</span>
    </div>
  `;
  container.appendChild(div);
}
