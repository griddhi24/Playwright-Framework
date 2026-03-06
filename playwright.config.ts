import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
  },
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], 
      channel: 'chrome' },
    },
  ],
});
