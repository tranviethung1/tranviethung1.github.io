import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  use: {
    browserName: 'chromium',
    headless: true,
    launchOptions: { executablePath: '/usr/bin/google-chrome' },
  },
  webServer: {
    command: 'python3 -m http.server 4173',
    port: 4173,
    reuseExistingServer: true,
  },
});
