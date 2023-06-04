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
            <ModalHeader @close="$emit('close')"></ModalHeader>

            <div>
                <ModalBody><slot></slot></ModalBody>
            </div>

            <ModalFooter></ModalFooter>
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
