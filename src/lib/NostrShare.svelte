<svelte:options
  customElement={{
    tag: "nostr-share",
    shadow: "open",
  }}
/>

<script lang="ts">
  import Dialog from "./Dialog.svelte";
  import NostrIcon from "./NostrIcon.svelte";

  export interface NostrShareProps {
    "data-text"?: string;
    "data-type"?: "default" | "mini" | "icon";
    "icon-size"?: string | number;
  }

  let {
    "data-text": text,
    "data-type": buttonType = "default",
    "icon-size": iconSize = 28,
  }: NostrShareProps = $props();

  let openDialog = $state(false);

  const handleClickOpenDialog = () => {
    openDialog = true;
  };

  const closeDialog = () => {
    openDialog = false;
  };

  // 数値変換
  const resolvedIconSize =
    typeof iconSize === "string" ? parseInt(iconSize, 10) : iconSize;
</script>

<button
  part="nostr-share-button"
  data-nostr-share={buttonType}
  onclick={handleClickOpenDialog}
>
  <slot>
    <NostrIcon size={buttonType === "icon" ? resolvedIconSize : 28} />
    {#if buttonType !== "icon"}
      <span part="nostr-share-text">Nostr</span>
    {/if}
  </slot>
</button>

{#if openDialog}
  <Dialog handleClose={closeDialog} {text} />
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
    --button1-active-color: #999999;
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
      --button1-active-color: #757575;
      --button1-border-color: #555555;

      --button2-text-color: #f1f1f1;
      --button2-bg-color: #1f1f1f;
      --button2-hover-color: #3b3b3b;

      --nostr-color: #eec5ff;
      --bg-color: #000000;
      --border-color: #333333;
    }
  }

  [part="nostr-share-button"] {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 0.5em;
    transition: all 0.1s ease-in-out;
    border-radius: 8px;
    font-weight: bold;
  }
  [part="nostr-share-button"]:active {
    transform: scale(0.98);
  }

  [data-nostr-share="default"] {
    padding: 6px 16px;
    background-color: var(--button1-bg-color);
    color: var(--button2-text-color);
    border: 1px solid var(--button1-border-color);
  }

  [data-nostr-share="mini"] {
    padding: 2px 6px;
    background-color: var(--button1-bg-color);
    color: var(--button2-text-color);
    border: 1px solid var(--button1-border-color);
  }

  [data-nostr-share="default"]:hover,
  [data-nostr-share="mini"]:hover {
    background-color: var(--button1-hover-color);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  [data-nostr-share="icon"] {
    width: var(--icon-size);
    height: var(--icon-size);
    padding: 2px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
  }

  [data-nostr-share="icon"]:hover {
    background-color: var(--button1-hover-color);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  [part="nostr-share-text"] {
    font-size: medium;
  }

  [data-nostr-share="mini"] [part="nostr-share-text"] {
    font-size: small;
  }
</style>
