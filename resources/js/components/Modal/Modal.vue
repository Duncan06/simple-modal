<script setup>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";

defineProps({
    show: Boolean,
    modalType: { required: false, type: String, default: "modal" },
    modalStyle: { required: false, type: String, default: "modal" },
});
</script>

<template>
    <div>
        <div
            v-if="show"
            :class="{
                'sm-modal': modalType === 'small',
                'lg-modal': modalType === 'large',
                modal: modalType === 'modal',
            }"
        >
            <ModalHeader @close="$emit('close')" :modal-style="modalStyle">
                <slot name="header"></slot>
            </ModalHeader>

            <main>
                <ModalBody :modal-style="modalStyle"><slot></slot></ModalBody>
            </main>

            <ModalFooter :modal-style="modalStyle">
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
.sm-modal {
    width: 400px;
    height: 200px;
    margin: 20px;
}
.lg-modal {
    width: 800px;
    height: 400px;
    margin: 28px;
}
</style>
