// tsup.config.js
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.js"], // Or ['src/index.js'] if applicable
  format: ["cjs", "esm"], // Common formats for npm packages
  dts: true, // Generate TypeScript declaration files
  clean: true, // Clean the output directory (e.g., 'dist') before building
});
