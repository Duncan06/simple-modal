<script setup>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";
import { useModalStore } from '../../stores/ModalStore';

let modal = useModalStore();
</script>

<template>
    <div>
        This is here
        <ModalHeader></ModalHeader>

        <div>
            <ModalBody></ModalBody>
        </div>

        <ModalFooter></ModalFooter>
    </div>
</template>
