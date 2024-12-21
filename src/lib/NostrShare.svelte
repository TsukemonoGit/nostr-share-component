<svelte:options customElement="nostr-share" />

<script lang="ts">
  import Dialog from "./Dialog.svelte";

  export interface NostrShareProps {
    shareTitle?: string;
    url?: string;
    text?: string;
    icon?: boolean;
    class?: string;
    style?: string;
  }

  let {
    url,
    text,
    shareTitle,
    icon = false,
    class: customClass,
    style: customStyle,
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
</script>

<button
  class={`${customClass || (icon ? "nostrShare-icon" : "nostrShare-button")}`}
  style={customStyle || ""}
  onclick={handleClickOpenDialog}
>
  <slot>
    <svg
      class="nostr-icon"
      version="1.1"
      id="_8"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 256 256"
      style="enable-background:new 0 0 256 256;"
      xml:space="preserve"
    >
      <g>
        <path
          class="st0"
          d="M0,0v256h256V0H0z M231.2,159.2c0,20.7,0,31.1-3.5,42.2c-4.4,12.2-14,21.8-26.2,26.2
        c-11.1,3.5-21.5,3.5-42.2,3.5H96.8c-20.7,0-31.1,0-42.2-3.5c-12.2-4.4-21.8-14-26.2-26.2c-3.5-11.1-3.5-21.5-3.5-42.2V96.8
        c0-20.7,0-31.1,3.5-42.2c4.4-12.2,14-21.8,26.2-26.2c11.2-3.5,21.5-3.5,42.2-3.5h62.5c20.7,0,31.1,0,42.2,3.5
        c12.2,4.4,21.8,14,26.2,26.2c3.5,11.1,3.5,21.5,3.5,42.2V159.2z"
        />
        <circle class="st1" cx="137.9" cy="99" r="12.1" />
        <path
          class="st1"
          d="M210.8,115.9c0-47.3-27.7-68.7-64.4-68.7c-16.4,0-31,4.4-42.4,12.5c-3.8,2.7-9,0.1-9-4.5
        c0-3.1-2.5-5.7-5.7-5.7H57.7c-3.1,0-5.7,2.5-5.7,5.7v144c0,3.1,2.5,5.7,5.7,5.7h33.7c3.1,0,5.6-2.5,5.6-5.6v-8.4
        c0-62.8-33.2-109.8-0.4-116c30-5.7,64.1-3,64.5,20.1c0,2,0.3,8,8.6,11.2c5,2,12.6,2.6,22.6,2.4c0,0,9.1-0.7,9.1,8.5
        c0,11.5-20.4,10.7-20.4,10.7c-6.7,0.3-22.6-1.5-31.7,1.2c-4.8,1.5-9,4.2-11.5,9.1c-4.2,8.3-6.2,26.5-6.5,45.5v15.5
        c0,3.1,2.5,5.7,5.7,5.7h68c3.1,0,5.7-2.5,5.7-5.7l0,0V115.9z"
        />
        <path
          class="st2"
          d="M227.6,54.6c-4.4-12.2-14-21.8-26.2-26.2c-11.1-3.5-21.5-3.5-42.2-3.5H96.8c-20.7,0-31.1,0-42.2,3.5
        c-12.2,4.4-21.8,14-26.2,26.2c-3.5,11.2-3.5,21.5-3.5,42.2v62.5c0,20.7,0,31.1,3.5,42.2c4.4,12.2,14,21.8,26.2,26.2
        c11.2,3.5,21.5,3.5,42.2,3.5h62.5c20.7,0,31.1,0,42.2-3.5c12.2-4.4,21.8-14,26.2-26.2c3.5-11.1,3.5-21.5,3.5-42.2V96.8
        C231.2,76.1,231.2,65.7,227.6,54.6z M205.1,204.8h-68c-3.1,0-5.7-2.5-5.7-5.7v-15.5c0.3-19,2.3-37.2,6.5-45.5
        c2.5-5,6.7-7.7,11.5-9.1c9-2.7,24.9-0.9,31.7-1.2c0,0,20.4,0.8,20.4-10.7c0-9.3-9.1-8.5-9.1-8.5c-10,0.3-17.7-0.4-22.6-2.4
        c-8.3-3.3-8.6-9.2-8.6-11.2c-0.4-23.1-34.5-25.9-64.5-20.1c-32.8,6.2,0.4,53.3,0.4,116v8.4c-0.1,3.1-2.5,5.6-5.6,5.6H57.7
        c-3.1,0-5.7-2.5-5.7-5.7v-144c0-3.1,2.5-5.7,5.7-5.7h31.7c3.1,0,5.7,2.5,5.7,5.7c0,4.7,5.2,7.2,9,4.5c11.4-8.2,26-12.5,42.4-12.5
        c36.7,0,64.4,21.4,64.4,68.7v83.2l0,0C210.8,202.3,208.3,204.8,205.1,204.8z M125.7,99c0-6.7,5.4-12.1,12.1-12.1S150,92.3,150,99
        s-5.4,12.1-12.1,12.1S125.7,105.8,125.7,99z"
        />
      </g>
    </svg>

    {#if !icon}<span class={"nostrShare-text"}>Share</span>
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

    --text-color-main: #374151;

    --button1-text-color: #662482;
    --button1-bg-color: #f3f4f6;
    --button1-hover-color: #313131;

    --button2-text-color: rgb(211, 211, 211);
    --button2-bg-color: #f3f4f6;
    --button2-hover-color: #e5e7eb;

    --nostr-color: #662482;
    --bg-color: #ffffff;
    --border-color: #d1d5db;
  }
  @media (prefers-color-scheme: dark) {
    :host {
      --text-color-main: #ffffff;

      --button1-text-color: #eec5ff;
      --button1-bg-color: #363636;
      --button1-hover-color: #555555;

      --button2-text-color: #f1f1f1;
      --button2-bg-color: #1f1f1f;
      --button2-hover-color: #3b3b3b;

      --nostr-color: #eec5ff;
      --bg-color: #000000;
      --border-color: #333333;
    }
  }
  /* ボタン全体の基本スタイル */
  .nostrShare-button,
  .nostrShare-icon {
    color: var(--button1-text-color);
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
    font-size: 14px;
    color: var(--button2-text-color);
  }

  /* アイコンスタイル */
  .nostrShare-icon {
    width: 36px;
    height: 36px;
    margin: 4px;
    border-radius: 50%;
    background-color: var(--button1-bg-color); /* グレー */
  }

  .nostrShare-icon:hover {
    background-color: var(--button1-hover-color); /* グレー */
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  .nostrShare-icon:active {
    background-color: #d1d5db;
    transform: scale(0.95);
  }

  /* アイコン内部のSVG */
  .nostr-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .st0 {
    fill: none;
  }
  .st1 {
    fill: var(--button1-bg-color);
  }
  .st2 {
    fill: var(--nostr-color);
  }
</style>
