<script setup>

let emit = defineEmits(['close']);

</script>

<template>
    <header class="flex mt-4 p-4 bg-blue-200 rounded-t-lg">
        <div style="width: 600px">
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
    width: 8px;
    height: 26px;
    color: #999;
    justify-content: end;
}
.header-closer:hover {
    color: #222;
    cursor: pointer;
}
.header-closer:active {
    transform: rotate(90deg);
    transition: transform 1s;
}
</style>
