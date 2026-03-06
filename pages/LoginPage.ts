import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async enterUsername(username: string) {
    await this.page.fill('[data-test="username"]', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('[data-test="password"]', password);
  }

  async clickLogin() {
    await this.page.click('[data-test="login-button"]');
  }

  async isLoginSuccessful(): Promise<boolean> {
    return await this.page.isVisible('text=Products');
  }
}
