<script setup>
import { useModalStore } from '../../stores/ModalStore';

let modal = useModalStore();
</script>

<template>
    <div class="bg-green-100 rounded-b-lg p-4">
        {{ modal.footer }}
    </div>
</template>