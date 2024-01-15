/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      name: "chrome",
    },
    include:['**\/*.test.?(c|m)[jt]s?(x)'],
  },
});
