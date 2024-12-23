// src/components/user-settings/userSettings.js
import Handlebars from 'handlebars/dist/handlebars.min.js';
import settingsTemplate from './settings.hbs?raw';
import './settings.css';

export function renderUserSettings() {
  const template = Handlebars.compile(settingsTemplate);
  const html = template();

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  const form = container.querySelector('#settings-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const login = form.login.value;
    const oldPassword = form.old_password.value;
    const newPassword = form.new_password.value;
    const repeatNewPassword = form.repeat_new_password.value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Login:', login);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Repeat New Password:', repeatNewPassword);
  });
}
