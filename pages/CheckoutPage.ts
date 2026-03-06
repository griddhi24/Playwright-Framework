import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.fill('[data-test="lastName"]', lastName);
  }

  async enterPostalCode(postalCode: string) {
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  async continueCheckout() {
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }
}
