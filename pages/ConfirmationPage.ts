import { Page } from '@playwright/test';

export class ConfirmationPage {
  constructor(private page: Page) {}

  async isOrderComplete(): Promise<boolean> {
    return await this.page.isVisible('text=Thank you for your order!');
  }
}
