import messageInputTemplate from '../partials/message-input/message-input.hbs?raw';
import { renderTemplate } from '../../utils/renderTemplate';
import messagesTemplate from './messages.hbs?raw';
// import '../partials/message-input/message-input.css';
import Handlebars from 'handlebars';
import './messages.css';

Handlebars.registerPartial('messageInput', messageInputTemplate);

export function renderMessages() {
  renderTemplate(messagesTemplate, 'body');
}
