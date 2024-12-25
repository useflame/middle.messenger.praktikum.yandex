// src/components/login/login.js
import Handlebars from 'handlebars/dist/handlebars.min.js';
import loginTemplate from './login.hbs?raw';
import './login.css';

export function renderLogin() {
  const template = Handlebars.compile(loginTemplate);
  const html = template();
  
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  const form = container.querySelector('#login-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  });
}
