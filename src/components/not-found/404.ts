import { renderTemplate } from '../../utils/renderTemplate';
import notFoundTemplate from './404.hbs?raw';
import './404.css';

export function renderNotFound() {
  renderTemplate(notFoundTemplate, 'body');
}
