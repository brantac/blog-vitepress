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

const topics: string[] | undefined = data.value.topics?.split(",");
const date = computed(() => posts[findCurrentPostIndex()].date);
const nextPost = computed(() => posts[findCurrentPostIndex() - 1]);
const previousPost = computed(() => posts[findCurrentPostIndex() + 1]);
</script>

<template>
    <article id="article"
    class="px-cs-4 md:px-cs-8 lg:px-cs-9 xl:px-cs-10
        pt-cs-6 md:pt-cs-7 lg:pt-cs-8
        pb-cs-6 md:pb-cs-7 lg:pb-cs-8"
    >
        <header class="text-center pb-cs-5">
            <Date :date="date" />
            <h1 class="font-black">{{ data.title }}</h1>
            <Tags class="justify-center" :topics="topics ?? []" />
            <div class="author">
                <div class="name ">Arthur Brant</div>
            </div>
        </header>

        <div class="content">
            <Content />
        </div>
        <div class="navigation_section
            flex flex-col items-center gap-y-4"
        >
            <div class="previous_article flex flex-col items-center" v-if="previousPost">
                <span>← Previous Article</span>
                <a class="text-center" :href="previousPost.href">
                    {{ previousPost.title }}
                </a>
            </div>
            <div class="next_article flex flex-col items-center" v-if="nextPost">
                <span>Next Article →</span>
                <a class="text-center" :href="nextPost.href">
                    {{ nextPost.title }}
                </a>
            </div>
        </div>

    </article>
</template>

<style scoped lang="scss">
.navigation_section a {
    color: var(--link-color);
}
.content {
    @media (min-width: 640px) {
        font-size: calc(112.5% + (24 - 18) * ((100vw - 640px) / (1024 - 640)));
    }
    @media (min-width: 1024px) {
        font-size: 133.333333%;
    }
}
</style>