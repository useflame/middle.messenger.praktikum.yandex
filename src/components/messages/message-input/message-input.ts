import { renderTemplate } from '../../../utils/renderTemplate';
import messageInputTemplate from './message-input.hbs?raw';
import './messages.css';

export function renderMessages() {
  renderTemplate(messageInputTemplate, 'body');
}
