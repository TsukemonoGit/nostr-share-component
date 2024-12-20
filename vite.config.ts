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
          return `nostr-share-component.js`; // iife形式の場合のファイル名
        }
        return `nostr-share-component.${format}.js`; // その他形式（es, umd）の場合
      },
      formats: ["umd", "es", "iife"], // 出力形式を指定（iifeとumd, esを含めて）
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
