// src/components/signup/signup.js
import Handlebars from 'handlebars/dist/handlebars.min.js';
import signupTemplate from './signup.hbs?raw';
import './signup.css';

export function renderSignup() {
  const template = Handlebars.compile(signupTemplate);
  const html = template();

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  const form = container.querySelector('#signup-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = form.first_name.value;
    const secondName = form.second_name.value;
    const login = form.login.value;
    const email = form.email.value;
    const password = form.password.value;
    const repeatPassword = form.repeat_password.value;
    const phone = form.phone.value;

    console.log('First Name:', firstName);
    console.log('Second Name:', secondName);
    console.log('Login:', login);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
    console.log('Phone:', phone);
  });
}
