<script setup>

defineProps({
    modalStyle: { required: false, type: String, default: 'modal' }
})

</script>

<template>
    <div class="p-4 h-48"
         :class="{ 'bg-slate-100': modalStyle === 'modal',
                    'bg-red-100': modalStyle === 'red' }"
    >
        <slot></slot>
    </div>
</template>
