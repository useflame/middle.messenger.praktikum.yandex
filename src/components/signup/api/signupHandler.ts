export class SignupHandler {
    private form: HTMLFormElement;
  
    constructor(form: HTMLFormElement) {
      this.form = form;
      this.initialize();
    }
  
    private initialize(): void {
      this.form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        this.handleSignup();
      });
    }
  
    private handleSignup(): void {
      const firstName = this.form.querySelector<HTMLInputElement>('input[name="first_name"]')?.value || '';
      const secondName = this.form.querySelector<HTMLInputElement>('input[name="second_name"]')?.value || '';
      const login = this.form.querySelector<HTMLInputElement>('input[name="login"]')?.value || '';
      const email = this.form.querySelector<HTMLInputElement>('input[name="email"]')?.value || '';
      const password = this.form.querySelector<HTMLInputElement>('input[name="password"]')?.value || '';
      const repeatPassword = this.form.querySelector<HTMLInputElement>('input[name="repeat_password"]')?.value || '';
      const phone = this.form.querySelector<HTMLInputElement>('input[name="phone"]')?.value || '';
  
      console.log('First Name:', firstName);
      console.log('Second Name:', secondName);
      console.log('Login:', login);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Repeat Password:', repeatPassword);
      console.log('Phone:', phone);
    }
  }
  