import Handlebars from 'handlebars/dist/handlebars.min.js';
import messagesTemplate from './messages.hbs?raw';
import './messages.css';

export function renderMessages() {
  const template = Handlebars.compile(messagesTemplate);
  const html = template();

  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
}
