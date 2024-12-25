import { renderLogin } from './components/login/login';
import { renderSignup } from './components/signup/signup.js';
import { renderUserSettings } from './components/settings/settings.js';
import { renderNotFound } from './components/not-found/404.js';
import { renderServerError } from './components/server-error/500.js';
import { renderMessages } from './components/messages/messages.js';

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  switch (path) {
    case '/':
      renderLogin();
      break;
    case '/signup':
      renderSignup();
      break;
    case '/settings':
      renderUserSettings();
      break;
    case '/messages':
        renderMessages();
        break;
    case '/server-error':
      renderServerError();
      break;
    default:
      renderNotFound();
      break;
  }
});
