import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
//https://zenn.dev/eringiv3/articles/225e9bc2c92ff1
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "NostrShare",
      fileName: (format) => `nostr-share-component.${format}.js`,
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
