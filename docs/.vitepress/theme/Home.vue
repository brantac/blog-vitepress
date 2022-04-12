<template>
    <div class="blog-introduction flex flex-col content-start
    w-full px-cs-4 md:px-cs-8 lg:px-cs-9 xl:px-cs-10 items-start
    pt-cs-6 md:pt-cs-7 lg:pt-cs-8
    pb-cs-6 md:pb-cs-7 lg:pb-cs-8">
        <h1 class="font-black">Blog</h1>
        <h2 class="introduction-title">Read Topics About</h2>
        <Tags :topics="introductionTopics" />
    </div>
    <!-- <main class="mx-auto px-cs-4 lg:px-0 py-16 max-w-3xl"> -->
    <main class="px-cs-4 md:px-cs-8 lg:px-cs-9 xl:px-cs-10 pb-16">
        <div class="posts">
            <div class="post-item" v-for="{ title, href, date, topics, excerpt } of posts">
                <div class="post-date">{{ date.string }}</div>
                <h3 class="title font-bold">
                    <a :href="href">{{ title }}</a>
                </h3>
                <Tags :topics="topics.length > 0 ? [topics[0]] : topics" />
                <div class="excerpt">{{ excerpt }}</div>
                <div class="read-the-article">
                    <a :href="href">Read the article →</a>
                </div>
    
                <hr>
            </div>
        </div>
    
        <div class="load_posts_container mt-cs-6 w-full text-center">
            <button class="load-posts-button" @click="">Load more posts</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { data as posts } from '../posts.data'

import Tags from './components/Tags.vue'

const introductionTopics = ref([
    "softwareengineer", "tutorials", "tips"
]);
</script>

<style scoped>
.post-item:not(:last-child) {
    margin-bottom: 2.5rem;
}
.posts hr {
    margin-top: 2.5rem;
}
.title a {
    color: var(--text-color);
    text-decoration: none;
}
.read-the-article a {
    color: var(--link-color);
}
.excerpt {
    margin-bottom: 1rem;
}
/**
    Loading Post Button
*/
.load-posts-button {
    width: 100%;
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    background-color: #645dd7;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0.5rem;
}
</style>