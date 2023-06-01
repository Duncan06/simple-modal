import { defineStore } from "pinia";

export let useModalStore = defineStore("modal", {
    state: () => ({
        show: true,
        title: "Stuff",
        footer: "Closing",
    }),
});
