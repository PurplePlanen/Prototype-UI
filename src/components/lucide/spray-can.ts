export default class LucideSprayCan extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-spray-can');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M3 3h.01');
    svg.appendChild(path1);

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M7 5h.01');
    svg.appendChild(path2);

    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M11 7h.01');
    svg.appendChild(path3);

    const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path4.setAttribute('d', 'M3 7h.01');
    svg.appendChild(path4);

    const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path5.setAttribute('d', 'M7 9h.01');
    svg.appendChild(path5);

    const path6 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path6.setAttribute('d', 'M3 11h.01');
    svg.appendChild(path6);

    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('width', '4');
    rect1.setAttribute('height', '4');
    rect1.setAttribute('x', '15');
    rect1.setAttribute('y', '5');
    svg.appendChild(rect1);

    const path7 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path7.setAttribute('d', 'm19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2');
    svg.appendChild(path7);

    const path8 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path8.setAttribute('d', 'm13 14 8-2');
    svg.appendChild(path8);

    const path9 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path9.setAttribute('d', 'm13 19 8-2');
    svg.appendChild(path9);

    this.appendChild(svg);
  }
}
customElements.define('lucide-spray-can', LucideSprayCan);
