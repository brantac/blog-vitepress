<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { data as posts } from "../posts.data";
import { computed } from "vue";

import  Date from "./components/Date.vue";

const { frontmatter: data } = useData();
const route = useRoute();

type Post = {
    title: String,
    href: String,
    date: {
        time: number,
        string: String
    },
    excerpt: String
}

const pathIsEqual = (p: Post) => p.href === route.path;
function findCurrentPostIndex(): number {
    return posts.findIndex(pathIsEqual);
}

const date = computed(() => posts[findCurrentPostIndex()].date);
const nextPost = computed(() => posts[findCurrentPostIndex() - 1]);
const previousPost = computed(() => posts[findCurrentPostIndex() + 1]);
</script>

<template>
    <article class="px-cs-4 md:px-cs-8 lg:px-cs-9 xl:px-cs-10 pb-16">
        <header>
            <Date :date="date" />
            <h1>{{ data.title }}</h1>
        </header>

        <Content />
    </article>
</template>

<style scoped>

</style>