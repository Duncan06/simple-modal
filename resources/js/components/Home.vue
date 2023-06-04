<script setup>
import Modal from "./Modal/Modal.vue";
import { ref } from "vue";

let showModal = ref(false);
</script>

<template>
    <div>Hello</div>
    <Modal :show="showModal" @close="showModal = false">This is here</Modal>
    <div class="closed-dispaly" v-if="!showModal">
        <button @click="showModal = true">Click me!</button>
    </div>
</template>
