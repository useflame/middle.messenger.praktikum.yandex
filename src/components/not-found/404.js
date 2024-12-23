import Handlebars from 'handlebars/dist/handlebars.min.js';
import notFoundTemplate from './404.hbs?raw';
import './404.css';

export function renderNotFound() {
  const template = Handlebars.compile(notFoundTemplate);
  const html = template();

  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
}
