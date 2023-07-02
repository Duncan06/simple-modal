<script setup>

defineProps({
    modalStyle: { required: false, type: String, default: 'modal' }
})

let emit = defineEmits(['close']);

</script>

<template>
    <header class="flex mt-4 p-4 rounded-t-lg justify-between"
            :class="{ 'bg-blue-200': modalStyle === 'modal',
                      'bg-red-300': modalStyle === 'red' }"
    >
        <div>
            <slot></slot>
        </div>
        <button class="header-closer" @click="$emit('close')">
            &times;
        </button>
    </header>
</template>

<style>
.header-closer {
    display: flex;
    color: #999;
    justify-content: end;
}
.header-closer:hover {
    color: #222;
    cursor: pointer;
}
.header-closer:active {
    transform-origin: 6px 13.5px;
    transform: rotate(90deg);
    transition: transform 1s;
}
</style>
