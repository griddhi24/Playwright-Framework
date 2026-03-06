import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addItemToCart(item: string) {
    await this.page.click(`[data-test='add-to-cart-${item}']`);
  }

  async goToCart() {
    await this.page.click('[data-test="shopping-cart-link"]');
  }
}
