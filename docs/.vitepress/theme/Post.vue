<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { data as posts } from "../posts.data";
import { computed } from "vue";

import  Date from "./components/Date.vue";
import Tags from "./components/Tags.vue";

const { frontmatter: data } = useData();
const route = useRoute();

type Post = {
    title: String,
    href: String,
    date: {
        time: number,
        string: String
    },
    topics: string[],
    excerpt: String
}

const pathIsEqual = (p: Post) => p.href === route.path;
function findCurrentPostIndex(): number {
    return posts.findIndex(pathIsEqual);
}

const topics: string[] = data.value.topics?.split(",");
const date = computed(() => posts[findCurrentPostIndex()].date);
const nextPost = computed(() => posts[findCurrentPostIndex() - 1]);
const previousPost = computed(() => posts[findCurrentPostIndex() + 1]);
</script>

<template>
    <article id="article"
    class="px-cs-4 md:px-cs-8 lg:px-cs-9 xl:px-cs-10 pb-16">
        <header class="text-center">
            <Date :date="date" />
            <h1>{{ data.title }}</h1>
            <Tags class="justify-center" :topics="topics" />
            <div class="author">
                <p class="name">Arthur Brant</p>
            </div>
        </header>

        <Content />
    </article>
</template>

<style scoped lang="scss">
article {
    @media (min-width: 640px) {
        font-size: calc(112.5% + (24 - 18) * ((100vw - 640px) / (1024 - 640)));
    }
    @media (min-width: 1024px) {
        font-size: 133.333333%;
    }
}
</style>