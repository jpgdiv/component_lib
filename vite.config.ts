/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      headless: false,
    },
    // environment: "jsdom",
    include:['**\/*.test.?(c|m)[jt]s?(x)'],

  },
});
