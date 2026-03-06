import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import testData from '../data/testData.json';

export const test = base.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  confirmationPage: ConfirmationPage;
  testData: typeof testData;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  confirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  },
  testData: async ({}, use) => {
    await use(testData);
  }
});

// Generalized navigation to base URL before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
