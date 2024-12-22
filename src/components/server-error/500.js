import Handlebars from 'handlebars/dist/handlebars.min.js';
import serverErrorTemplate from './500.hbs?raw';
import './500.css';

export function renderServerError() {
  const template = Handlebars.compile(serverErrorTemplate);
  const html = template();

  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
}
