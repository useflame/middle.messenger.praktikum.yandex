// src/utils.ts

import Handlebars from 'handlebars/dist/handlebars.min.js';

export function renderTemplate(templateRaw: string, containerSelector: string): HTMLDivElement {
  const template = Handlebars.compile(templateRaw);
  const html = template();
  
  document.querySelector(containerSelector).innerHTML = '';
  
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
  
  return container;
}


