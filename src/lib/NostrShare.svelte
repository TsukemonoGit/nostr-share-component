<svelte:options customElement="nostr-share" />

<script lang="ts">
  import Dialog from "./Dialog.svelte";
  import NostrIcon from "./NostrIcon.svelte";

  export interface NostrShareProps {
    "data-title"?: string;
    "data-url"?: string;
    "data-text"?: string;
    "data-type"?: "default" | "mini" | "icon";
    "icon-size"?: string | number; // アイコンサイズ
    class?: string;
    "data-style"?: string;
  }

  let {
    "data-url": url,
    "data-text": text,
    "data-title": shareTitle,
    "data-type": buttonType = "default",
    "icon-size": iconSize = 28,
    class: customClass,
    "data-style": customStyle,
  }: NostrShareProps = $props();
  //https://zenn.dev/tnzk/articles/835d3252ce01ed#dom-api%E7%B5%8C%E7%94%B1%E3%81%AE%E5%B1%9E%E6%80%A7%E7%9B%B4%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AF%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8C%E3%80%81bind-%E6%A9%9F%E6%A7%8B%E3%81%AF%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%A6%E3%81%AA%E3%81%84
  //let dialog: HTMLDialogElement;
  let openDialog = $state(false);

  const handleClickOpenDialog = (e: MouseEvent) => {
    openDialog = true;
  };

  const closeDialog = () => {
    openDialog = false;
  };

  // iconSize を数値に変換
  const resolvedIconSize =
    typeof iconSize === "string" ? parseInt(iconSize, 10) : iconSize;

  //`${customStyle ? "" : customClass || (buttonType === "icon" ? "nostrShare-icon" : buttonType === "mini" ? "nostrShare-mini" : "nostrShare-button")}`
  let buttonClass: string = $derived.by(() => {
    if (customStyle) return "";
    if (customClass) return customClass;
    if (buttonType === "icon") return "nostrShare-icon";
    if (buttonType === "mini") return "nostrShare-mini";
    return "nostrShare-button";
  });
</script>

<button
  class={buttonClass}
  style={customStyle || ""}
  onclick={handleClickOpenDialog}
>
  <slot>
    {#if buttonType === "mini"}<NostrIcon size={24} />{:else}
      <NostrIcon size={buttonType === "icon" ? resolvedIconSize : 28} />
    {/if}
    {#if buttonType !== "icon"}<span
        class={buttonType === "mini"
          ? "nostrShare-text-mini"
          : "nostrShare-text"}>Nostr</span
      >
    {/if}
  </slot>
</button>

{#if openDialog}
  <Dialog handleClose={closeDialog} {url} {text} {shareTitle} />
{/if}

<style>
  :host {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    --text-color-main: #2e2e2e;

    --button1-text-color: #662482;
    --button1-bg-color: #ececec;
    --button1-hover-color: #b1b1b1;
    --button1-border-color: #b9b9b9;

    --button2-text-color: rgb(73, 73, 73);
    --button2-bg-color: #f3f4f6;
    --button2-hover-color: #e5e7eb;

    --nostr-color: #662482;
    --bg-color: #ffffff;
    --border-color: #d1d5db;
  }
  @media (prefers-color-scheme: dark) {
    :host {
      display: flex;
      justify-content: center;
      align-items: center;

      --text-color-main: #ffffff;

      --button1-text-color: #eec5ff;
      --button1-bg-color: #363636;
      --button1-hover-color: #555555;
      --button1-border-color: #555555;

      --button2-text-color: #f1f1f1;
      --button2-bg-color: #1f1f1f;
      --button2-hover-color: #3b3b3b;

      --nostr-color: #eec5ff;
      --bg-color: #000000;
      --border-color: #333333;
    }
  }
  /* デフォルトのスタイルを無効にする？*/
  button {
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* ボタン全体の基本スタイル */
  .nostrShare-button,
  .nostrShare-mini {
    color: var(--button1-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--button1-border-color);

    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .nostrShare-icon {
    color: var(--button1-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: var(--icon-size);
    height: var(--icon-size);
    margin: auto;
    padding: 4px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
  }

  /* ボタンスタイル */
  .nostrShare-button {
    padding: 6px 16px;
    margin: 4px;
    font-weight: bold;
    border-radius: 8px;
    background-color: var(--button1-bg-color); /* グレー */
    color: var(--button2-text-color); /* ダークグレー */
  }

  .nostrShare-button:hover {
    background-color: var(--button1-hover-color); /* 少し明るいグレー */
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  .nostrShare-button:active {
    background-color: #d1d5db; /* ダークグレー */
    transform: scale(0.98);
  }

  /* テキスト用スタイル */
  .nostrShare-text {
    margin-left: 8px;
    font-size: medium;
    color: var(--button2-text-color);
  }

  .nostrShare-icon:hover {
    background-color: var(--button1-hover-color); /* グレー */
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
  }

  .nostrShare-icon:active {
    background-color: #d1d5db;
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
  }

  /* miniスタイル */
  .nostrShare-mini {
    padding: 2px 6px;
    margin: 2px;

    border-radius: 8px;
    background-color: var(--button1-bg-color); /* グレー */
    color: var(--button2-text-color); /* ダークグレー */
  }

  .nostrShare-mini:hover {
    background-color: var(--button1-hover-color); /* 少し明るいグレー */
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  .nostrShare-mini:active {
    background-color: #d1d5db; /* ダークグレー */
    transform: scale(0.98);
  }
  /* テキスト用スタイル */
  .nostrShare-text-mini {
    margin-left: 4px;
    font-size: small;
    font-weight: bold;
    color: var(--button2-text-color);
  }
</style>
