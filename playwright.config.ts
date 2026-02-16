import { defineConfig } from "@playwright/test";

const port = 3333;

export default defineConfig({
  testDir: "test/e2e",
  retries: process.env.CI ? 2 : 0,
  timeout: 60_000,
  expect: {
    timeout: 15_000,
  },
  use: {
    baseURL: `http://localhost:${port}`,
    locale: "fr-FR",
  },
  webServer: {
    command: `pnpm dev --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
