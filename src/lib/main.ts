export { default as Dialog } from "$lib/Dialog.svelte";
export { default as NostrShare } from "$lib/NostrShare.svelte";
// export { default as NostrIcon } from "./lib/NostrIcon.svelte";

export interface DialogProps {
  text: string;
  onClose: () => void;
}

export interface NostrShareProps {
  text: string;
}
