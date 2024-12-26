// src/components/login/login.ts
import Handlebars from "handlebars/dist/handlebars.min.js";
import loginTemplate from "./login.hbs?raw";
import "./login.css";
import { LoginHandler } from "./api/loginHandler";

export function renderLogin(): void {
  const template = Handlebars.compile(loginTemplate);
  const html: string = template();

  const container: HTMLDivElement = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // Select the form inside the container
  const form: HTMLFormElement | null = container.querySelector(".login__form");
  if (form) {
    new LoginHandler(form);
  } else {
    console.error("Form not found.");
  }
}
