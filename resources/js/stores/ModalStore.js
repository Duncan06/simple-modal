import { defineStore } from "pinia";

export let useModalStore = defineStore("modal", {
    state: () => ({
        title: "Stuff",
        footer: "Closing",
    }),
});
