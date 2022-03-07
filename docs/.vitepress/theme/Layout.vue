<template>
    <Navbar />
    <main class="main flex">
        <Home v-if="isHome" />
        <Post v-else />
    </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed, ref } from 'vue'

import Navbar from './components/Navbar.vue'
import Home from './Home.vue'
import Post from './Post.vue'

const route = useRoute()
const isHome = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>

<style scoped>
.main {
    padding: 1rem;
    flex-direction: column
}
</style>