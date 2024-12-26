// src/components/login/LoginHandler.ts

export class LoginHandler {
    private form: HTMLFormElement;
  
    constructor(form: HTMLFormElement) {
      this.form = form;
      this.initialize();
    }
  
    private initialize(): void {
      this.form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        this.handleLogin();
      });
    }
  
    private handleLogin(): void {
      const usernameInput = this.form.querySelector<HTMLInputElement>('input[name="login"]');
      const passwordInput = this.form.querySelector<HTMLInputElement>('input[name="password"]');
  
      if (usernameInput && passwordInput) {
        const username: string = usernameInput.value;
        const password: string = passwordInput.value;
  
        console.log("Username:", username);
        console.log("Password:", password);
      } else {
        console.error("Input elements not found.");
      }
    }
  }
  