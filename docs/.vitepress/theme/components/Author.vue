<script setup lang="ts">
import Socials from "./Socials.vue";
</script>

<template>
    <div class="author flex flex-row gap-x-4 justify-center">
        <div class="name ">Arthur Brant</div>
        <Socials class="socials flex flex-row gap-x-4 items-center" />
    </div>
</template>

<style scoped>
.author {
    font-size: 1rem;
}
.socials :deep(svg) {
    height: 1rem;
}
</style>