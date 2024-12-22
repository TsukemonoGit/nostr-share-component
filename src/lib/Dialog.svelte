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

  //   // アクセス元のデバイス情報を取得
  //  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // // Androidの判定
  // if (/android/i.test(userAgent)) {
  //     list.push(androidList);
  //   }

  //   // iOSの判定
  //   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  //     list.push(iosList);
  //   }

  const handleClickList = (clientUrl: string) => {
    // url, text, shareTitleが空の場合、デフォルト値を設定
    if (url === "" && text === "" && shareTitle === "") {
      url = window.location.href; // 現在のページのURLを取得
      shareTitle = document.title; // 現在のページのタイトルを取得
    }
    const link = clientUrl
      .replace("{url}", encodeURIComponent(url))
      .replace("{title}", encodeURIComponent(shareTitle))
      .replace("{text}", encodeURIComponent(text));

    // const shareUrl = generateShareUrl(link); //とりあえずlumilumiとnostterはこれしなくてもよさげだからとりあえずしなくていいかのやつ（要素が空のパラメーターを削除）

    console.log(link);
    window.open(link, "_blank", "noreferrer");
    handleClose();
  };

  // function generateShareUrl(clientUrl: string) {
  //   const urlObj = new URL(clientUrl); // URLを解析するためにURLオブジェクトを作成
  //   const searchParams = new URLSearchParams(urlObj.search); // クエリパラメータを取得
  //   console.log(searchParams);

  //   // 各パラメータを設定
  //   searchParams.forEach((value, key) => {
  //     // 空やundefinedの値の場合、削除
  //     if (!value || value.trim() === "") {
  //       searchParams.delete(key); // 空の場合は削除
  //     }
  //   });

  //   // 修正されたクエリパラメータをURLに反映
  //   urlObj.search = searchParams.toString();

  //   return urlObj.toString(); // 新しいURLを返す
  // }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="overlay" onclick={handleClose}>
  <div class="inner" onclick={(event) => event.stopPropagation()}>
    <button onclick={handleClose} class="close-button" aria-label="Close"
      >✖</button
    >
    <h2 class="title">Share</h2>
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
  /* オーバーレイ背景 */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3); /* 少し濃い背景 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* ダイアログ本体 */
  .inner {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--bg-color);
    padding: 1.5rem;
    border-radius: 12px; /* 柔らかい角丸 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 400px;
    gap: 1rem; /* スペーシング */
  }

  /* タイトル */
  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    color: var(--text-color-main); /* グレー700 */
  }

  /* リスト */
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem; /* ゆったりした間隔 */
  }

  /* リストアイテム */
  .item {
    color: var(--button2-text-color);
    display: flex;
    width: 120px;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background-color: var(--button2-bg-color); /* グレー100 */
    border: 1px solid var(--border-color); /* グレー300 */
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .item:hover {
    background-color: var(--button2-hover-color); /* グレー200 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .item:active {
    background-color: var(--button2-active-color); /* グレー300 */
  }

  /* バツボタン */
  .close-button {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button2-bg-color); /* グレー200 */
    border: none;
    border-radius: 50%;
    font-size: 1.25rem;
    color: var(--button2-text-color); /* グレー700 */
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      transform 0.1s ease;
  }

  .close-button:hover {
    background-color: var(--button2-hover-color); /* グレー300 */
  }

  .close-button:active {
    background-color: var(--button2-active-color); /* グレー400 */
    transform: scale(0.95); /* 押した感覚を演出 */
  }
</style>
