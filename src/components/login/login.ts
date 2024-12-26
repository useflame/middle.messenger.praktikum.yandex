import { renderTemplate } from "../../utils/renderTemplate";
import { LoginHandler } from "./api/loginHandler";
import loginTemplate from "./login.hbs?raw";
import "./login.css";

export function renderLogin(): void {
  const container = renderTemplate(loginTemplate, "body")

  const form: HTMLFormElement | null = container.querySelector(".login__form");

  if (form) {
    new LoginHandler(form);
  } else {
    console.error("Form not found.");
  }
}
