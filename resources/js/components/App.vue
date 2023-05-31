<script setup></script>

<template>
    <div class="wrapper">
        App page
        <nav class="flex justify-between w-60">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </div>

    <router-view />
</template>

<style></style>
