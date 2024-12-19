<svelte:options customElement="nostr-share" />

<script lang="ts">
  import Dialog from "./Dialog.svelte";
  import { nostrIcon } from "./icons";

  let { url, text, shareTitle, icon = false, ...props } = $props();
  //https://zenn.dev/tnzk/articles/835d3252ce01ed#dom-api%E7%B5%8C%E7%94%B1%E3%81%AE%E5%B1%9E%E6%80%A7%E7%9B%B4%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AF%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8C%E3%80%81bind-%E6%A9%9F%E6%A7%8B%E3%81%AF%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%A6%E3%81%AA%E3%81%84
  //let dialog: HTMLDialogElement;
  let openDialog = $state(false);

  const handleClickOpenDialog = (e: MouseEvent) => {
    openDialog = true;
  };

  const closeDialog = () => {
    openDialog = false;
  };
</script>

<button
  class={props.class
    ? props.class
    : icon
      ? "nostrShare-icon"
      : "nostrShare-button"}
  onclick={handleClickOpenDialog}
>
  <slot>
    {#if icon}
      <div class="nostrShare-svg">{@html nostrIcon}</div>
    {:else}
      <div class="nostrShare-svg">{@html nostrIcon}</div>
      <span class="nostrShare-text">Share</span>
    {/if}
  </slot>
</button>

{#if openDialog}
  <Dialog handleClose={closeDialog} {url} {text} {shareTitle} />
{/if}

<style>
  /* ボタン全体の基本スタイル */
  .nostrShare-button,
  .nostrShare-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  /* ボタンスタイル */
  .nostrShare-button {
    padding: 8px 16px;
    margin: 4px;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Helvetica Neue,
      Arial,
      Hiragino Kaku Gothic ProN,
      Hiragino Sans,
      Meiryo,
      sans-serif;
    font-weight: bold;
    border-radius: 8px;
    background-color: #f3f4f6; /* グレー */
    color: #374151; /* ダークグレー */
  }

  .nostrShare-button:hover {
    background-color: #e5e7eb; /* 少し明るいグレー */
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  .nostrShare-button:active {
    background-color: #d1d5db; /* ダークグレー */
    transform: scale(0.98);
  }

  /* テキスト用スタイル */
  .nostrShare-text {
    margin-left: 8px;
    font-size: 14px;
  }

  /* アイコンスタイル */
  .nostrShare-icon {
    width: 40px;
    height: 40px;
    margin: 4px;
    border-radius: 50%;
    background-color: #f3f4f6;
    color: #374151;
  }

  .nostrShare-icon:hover {
    background-color: #e5e7eb;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  .nostrShare-icon:active {
    background-color: #d1d5db;
    transform: scale(0.95);
  }

  /* アイコン内部のSVG */
  .nostrShare-svg {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
