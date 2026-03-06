import { test } from '../fixtures/testFixtures';
import { expect } from '@playwright/test';

test.describe('Login Verification', () => {
  test('Smoke: Should login successfully [Description: Validates login with correct credentials]', async ({ loginPage, testData }: {
    loginPage: import('../pages/LoginPage').LoginPage;
    testData: typeof import('../data/testData.json');
  }) => {
    await loginPage.enterUsername(testData.login.username);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });
});
