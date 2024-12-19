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
  class={props.class || icon ? "nostrShare-icon" : "nostrShare-button"}
  onclick={handleClickOpenDialog}
>
  <slot>
    <!-- https://svelte.jp/docs/svelte/legacy-slots#Fallback-content -->

    {#if icon}
      <div class="nostrShare-svg">{@html nostrIcon}</div>
    {:else}
      <div class="nostrShare-svg">{@html nostrIcon}</div>
      Share
    {/if}
  </slot>
</button>

{#if openDialog}
  <Dialog handleClose={closeDialog} {url} {text} {shareTitle} />
{/if}

<style lang="postcss">
  .nostrShare-button {
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .nostrShare-button:active {
    box-shadow: 2;
  }
  .nostrShare-svg {
    width: 24px;
    height: 24px;
    align-items: center;
    display: flex;
  }
  .nostrShare-icon {
    border-radius: 100%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid;
  }
</style>
