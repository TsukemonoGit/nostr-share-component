import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
//https://zenn.dev/eringiv3/articles/225e9bc2c92ff1
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "NostrShare",
      fileName: (format) => {
        if (format === "iife") {
          return `nostr-share-component.js`; // UMD形式はデフォルトとして扱う
        }
        return `nostr-share-component.${format}.js`;
      },
      formats: [/* "umd",  "es",*/ "iife"], // 出力形式
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
