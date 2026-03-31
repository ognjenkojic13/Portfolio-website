export function renderContact(container) {
  const div = document.createElement('div');
  div.style.cssText = 'font-size: 0.875rem; color: #fff; font-weight: 500; line-height: 1.7;';
  div.innerHTML = `
    <span style="font-weight: 700;">Email: </span>
    <a href="mailto:ognjenkojic13@gmail.com" class="ext-link">ognjenkojic13@gmail.com</a><br>
    <span style="font-weight: 700;">On the internet: </span>
    <a href="https://www.linkedin.com/in/ognjen-kojic-/" class="ext-link" target="_blank" rel="noreferrer">LinkedIn</a>
    &nbsp;/&nbsp;
    <a href="https://github.com/ognjenkojic" class="ext-link" target="_blank" rel="noreferrer">GitHub</a><br><br>
    <span style="font-style: italic; opacity: 0.7;">Open to new opportunities.</span>
  `;
  container.appendChild(div);
}
