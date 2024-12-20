import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
//https://zenn.dev/eringiv3/articles/225e9bc2c92ff1
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "nostr-share-component.js",
        format: "iife",
      },
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
