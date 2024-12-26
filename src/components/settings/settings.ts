import { renderTemplate } from "../../utils/renderTemplate";
import { SettingsHandler } from "./api/settingsHandler";
import settingsTemplate from "./settings.hbs?raw";
import "./settings.css";

export function renderUserSettings() {
  const container = renderTemplate(settingsTemplate, "body");

  const form: HTMLFormElement | null = container.querySelector("#settings-form");

  if (form) {
    new SettingsHandler(form);
  } else {
    throw new Error("Settings form not found.");
  }

}
