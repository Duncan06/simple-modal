<script setup>
import { useModalStore } from '../../stores/ModalStore';

let modal = useModalStore();
</script>

<template>
    <div class="flex m-4 p-4 bg-lightblue-400">
        <div>{{ modal.title }}</div>
    </div>
</template>
