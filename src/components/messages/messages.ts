import messagesTemplate from './messages.hbs?raw';
import './messages.css';
import { renderTemplate } from '../../utils/renderTemplate';

export function renderMessages() {
  renderTemplate(messagesTemplate, 'body');
}
