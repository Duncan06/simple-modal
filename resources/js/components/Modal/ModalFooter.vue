<script setup>
defineProps({
    modalStyle: { required: false, type: String, default: "modal" },
});
</script>

<template>
    <footer
        class="rounded-b-lg p-4"
        :class="{
            'bg-green-100': modalStyle === 'modal',
            'bg-red-200': modalStyle === 'red',
        }"
    >
        <slot></slot>
    </footer>
</template>
