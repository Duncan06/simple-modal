<script setup>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";
import { useModalStore } from "../../stores/ModalStore";

let modal = useModalStore();

defineProps({});
</script>

<template>
    <div>
        <div class="modal" v-if="modal.show">
            <ModalHeader></ModalHeader>

            <div>
                <ModalBody><slot></slot></ModalBody>
            </div>

            <ModalFooter></ModalFooter>
        </div>
        <div class="closed-dispaly" v-else>
            <button @click="modal.show = true">Click me!</button>
        </div>
    </div>
</template>

<style>
.modal {
    width: 600px;
    height: 300px;
    margin: 24px;
}
</style>
