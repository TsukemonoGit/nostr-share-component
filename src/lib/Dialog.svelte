<svelte:options customElement="nostr-share-dialog" />

<script lang="ts">
  import { list } from "./list";

  interface Props {
    url?: string;
    text?: string;
    shareTitle?: string;
    handleClose: () => void;
  }
  let { url = "", text = "", shareTitle = "", handleClose }: Props = $props();

  const handleClickList = (clientUrl: string) => {
    const link = clientUrl
      .replace("{url}", encodeURIComponent(url))
      .replace("{title}", encodeURIComponent(shareTitle))
      .replace("{text}", encodeURIComponent(text));
    console.log(link);
    window.open(link, "_blank", "noreferrer");
    handleClose();
  };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="overlay" onclick={handleClose}>
  <div class="inner" onclick={(event) => event.stopPropagation()}>
    Share
    <button onclick={handleClose} class="close-button">X</button>
    <div class="list">
      {#each list as li}
        <button class="item" onclick={() => handleClickList(li.url)}>
          <img width={24} src={li.icon} alt={li.name} />
          {li.name}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 0.5rem; /* gap-2 相当 */
    pointer-events: auto;
    position: relative;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .list {
    display: flex;
    gap: 0.25rem; /* gap-1 相当 */
  }

  .item {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem; /* rounded-md 相当 */
    border: 1px solid #6b7280; /* border-neutral-500 相当 */
    padding: 0.5rem; /* p-2 相当 */
  }

  .close-button {
    position: absolute;

    right: 6px;
    top: 6px;
    height: 2rem; /* h-8 相当 */
    width: 2rem; /* w-8 相当 */
    align-self: flex-end;
    border-radius: 9999px; /* rounded-full 相当 */
    background-color: #d1d5db; /* bg-neutral-400 相当 */
  }
</style>
