import Handlebars from 'handlebars/dist/handlebars.min.js';

export function renderTemplate(templateRaw: string, containerSelector: string): HTMLDivElement {
  const template = Handlebars.compile(templateRaw);
  const html = template({});

  const containerElement = document.querySelector(containerSelector);

  if (!containerElement) {
    throw new Error(`No element found with selector: ${containerSelector}`);
  }

  containerElement.innerHTML = '';

  const container = document.createElement('div');
  container.innerHTML = html;

  document.body.appendChild(container);

  return container;
}
