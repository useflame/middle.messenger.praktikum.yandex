import { renderTemplate } from '../../utils/renderTemplate';
import serverErrorTemplate from './500.hbs?raw';
import './500.css';

export function renderServerError() {
  renderTemplate(serverErrorTemplate, 'body');
}
