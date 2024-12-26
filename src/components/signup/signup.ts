import signupTemplate from './signup.hbs?raw';
import './signup.css';
import { renderTemplate } from '../../utils/renderTemplate';
import { SignupHandler } from './api/signupHandler';

export function renderSignup(): void {
  const container = renderTemplate(signupTemplate, 'body');

  const form: HTMLFormElement | null = container.querySelector('#signup-form');

  if (form) {
    new SignupHandler(form);
  } else {
    throw new Error('Signup form not found.');
  }

}
