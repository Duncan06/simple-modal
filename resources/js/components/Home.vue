<script setup>
import Modal from "./Modal/Modal.vue";
import { ref } from "vue";

let showModal = ref(false);
</script>

<template>
    <div>Hello</div>
    <Modal
        :show="showModal"
        @close="showModal = false"
        modal-type="large"
        modal-style="red"
        modal-animation="true"
    >
        <template #header>
            <div>Hey there</div>
        </template>
        <div>This is the rest</div>
        <template #footer>
            <div>Bottom</div>
        </template>
    </Modal>
    <div class="closed-dispaly" v-if="!showModal">
        <button @click="showModal = true">Click me!</button>
    </div>
</template>
