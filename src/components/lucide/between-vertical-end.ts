export default class LucideBetweenVerticalEnd extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-between-vertical-end');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('width', '7');
    rect1.setAttribute('height', '13');
    rect1.setAttribute('x', '3');
    rect1.setAttribute('y', '3');
    rect1.setAttribute('rx', '1');
    svg.appendChild(rect1);

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'm9 22 3-3 3 3');
    svg.appendChild(path1);

    const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect2.setAttribute('width', '7');
    rect2.setAttribute('height', '13');
    rect2.setAttribute('x', '14');
    rect2.setAttribute('y', '3');
    rect2.setAttribute('rx', '1');
    svg.appendChild(rect2);

    this.appendChild(svg);
  }
}
customElements.define('lucide-between-vertical-end', LucideBetweenVerticalEnd);
