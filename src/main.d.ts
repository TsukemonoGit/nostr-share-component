declare module "$lib/Dialog.svelte" {
  import { SvelteComponentTyped } from "svelte";

  export interface DialogProps {
    url?: string;
    text?: string;
    shareTitle?: string;
    handleClose: () => void;
  }

  export default class Dialog extends SvelteComponentTyped<DialogProps> {}
}

declare module "$lib/NostrShare.svelte" {
  import { SvelteComponentTyped } from "svelte";

  export interface NostrShareProps {
    "data-title"?: string;
    "data-url"?: string;
    "data-text"?: string;
    "data-type"?: "default" | "mini" | "icon";
    "icon-size"?: string | number;
    class?: string;
    style?: string;
  }

  export default class NostrShare extends SvelteComponentTyped<NostrShareProps> {}
}
