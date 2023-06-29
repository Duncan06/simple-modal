<script setup>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";

defineProps({
    show: Boolean,
});
</script>

<template>
    <div>
        <div v-if="show" class="modal">
            <ModalHeader @close="$emit('close')">
                <slot name="header"></slot>
            </ModalHeader>

            <main>
                <ModalBody><slot></slot></ModalBody>
            </main>

            <ModalFooter>
                <slot name="footer"></slot>
            </ModalFooter>
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
