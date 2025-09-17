const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['json', { outputFile: 'reports/json-report/test-results.json' }],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://buggy.justtestit.org',
    headless: false,                 // run with browser UI
    viewport: null,                  // ✅ disable default viewport
    launchOptions: {
      args: ['--start-maximized'],   // ✅ open browser maximized
    },
    actionTimeout: 10000,
    navigationTimeout: 30000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], headless: false },
    }
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], headless: false },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], headless: false },
    // },
  ],
});
