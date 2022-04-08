<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { data as posts } from "../posts.data";

// const { frontmatter: data } = useData();
const { frontmatter } = useData();

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
            <h1>{{ frontmatter.title }}</h1>
        </header>

        <Content />
    </article>
</template>

<style scoped>

</style>