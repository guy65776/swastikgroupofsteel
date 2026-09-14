import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Generate Vercel's .vercel/output outside the Lovable build environment.
  nitro: true,
  tanstackStart: {
    server: { entry: "server" },
  },
});
