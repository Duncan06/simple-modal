<script setup>
import { useModalStore } from '../../stores/ModalStore';

let modal = useModalStore();
</script>

<template>
    <div class="bg-slate-100 p-4 h-48">
        <slot></slot>
    </div>
</template>
