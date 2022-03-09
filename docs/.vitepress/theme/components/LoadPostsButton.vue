<template>
    <button class="load-posts-button" @click="loadPosts">Load more posts</button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.load-posts-button {
    width: 100%;
    height: 50px;
    background-color: #645dd7;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 6rem;
    border-radius: 0.5rem;
}
</style>