export { default as Dialog } from "$lib/Dialog.svelte";
export { default as NostrShare } from "$lib/NostrShare.svelte";
// export { default as NostrIcon } from "./lib/NostrIcon.svelte";

export interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

export interface NostrShareProps {
  url: string;
  text: string;
  hashtags?: string[];
}
