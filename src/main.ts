import { renderUserSettings } from './components/settings/settings';
import { renderServerError } from './components/server-error/500';
import { renderMessages } from './components/messages/messages';
import { renderNotFound } from './components/not-found/404';
import { renderSignup } from './components/signup/signup';
import { renderLogin } from './components/login/login';

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