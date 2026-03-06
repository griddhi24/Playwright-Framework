import { test } from '../fixtures/testFixtures';
import { expect } from '@playwright/test';

test.describe('Order Item Verification', () => {
  test('Regression: Should place an order for three items [Description: Adds items, checks out, and validates order]', async ({ loginPage, productsPage, cartPage, checkoutPage, confirmationPage, testData }: {
    loginPage: import('../pages/LoginPage').LoginPage;
    productsPage: import('../pages/ProductsPage').ProductsPage;
    cartPage: import('../pages/CartPage').CartPage;
    checkoutPage: import('../pages/CheckoutPage').CheckoutPage;
    confirmationPage: import('../pages/ConfirmationPage').ConfirmationPage;
    testData: typeof import('../data/testData.json');
  }) => {
    await loginPage.enterUsername(testData.login.username);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();
    for (const item of testData.orderItems) {
      await productsPage.addItemToCart(item);
    }
    await productsPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.enterFirstName(testData.checkout.firstName);
    await checkoutPage.enterLastName(testData.checkout.lastName);
    await checkoutPage.enterPostalCode(testData.checkout.postalCode);
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();
    expect(await confirmationPage.isOrderComplete()).toBeTruthy();
  });
});
