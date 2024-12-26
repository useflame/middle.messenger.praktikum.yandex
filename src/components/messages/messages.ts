import { renderTemplate } from '../../utils/renderTemplate';
import messagesTemplate from './messages.hbs?raw';
import './messages.css';

export function renderMessages() {
  renderTemplate(messagesTemplate, 'body');
}
