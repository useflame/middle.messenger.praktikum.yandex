export class SettingsHandler {
  private form: HTMLFormElement;

  constructor(form: HTMLFormElement) {
    this.form = form;
    this.initialize();
  }

  private initialize(): void {
    this.form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      this.handleSettingsUpdate();
    });
  }

  private handleSettingsUpdate(): void {
    const firstName = this.form.querySelector<HTMLInputElement>('input[name="first_name"]')?.value || '';
    const lastName = this.form.querySelector<HTMLInputElement>('input[name="second_name"]')?.value || '';
    const displayName = this.form.querySelector<HTMLInputElement>('input[name="display_name"]')?.value || '';
    const login = this.form.querySelector<HTMLInputElement>('input[name="login"]')?.value || '';
    const oldPassword = this.form.querySelector<HTMLInputElement>('input[name="old_password"]')?.value || '';
    const newPassword = this.form.querySelector<HTMLInputElement>('input[name="new_password"]')?.value || '';
    const repeatNewPassword = this.form.querySelector<HTMLInputElement>('input[name="repeat_new_password"]')?.value || '';

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Display Name:', displayName);
    console.log('Login:', login);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Repeat New Password:', repeatNewPassword);
  }
}
