import { renderTemplate } from '../../../utils/renderTemplate';
import messageInputTemplate from './message-input.hbs?raw';
import './message-input.css';

export default function renderMessageInput(containerSelector: string) {
  renderTemplate(messageInputTemplate, containerSelector);
}
