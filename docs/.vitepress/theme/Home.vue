<template>
    <div class="blog-introduction flex">
        <h1 class="introduction-title">Read Topics About</h1>
        <div class="tags flex">
            <span class="tag-item">#softwareengineer</span>
            <span class="tag-item">#tutorials</span>
            <span class="tag-item">#tips</span>
        </div>
    </div>
    
    <div class="posts">
        <div class="post-item" v-for="{ title, href, date, excerpt } of posts">
            <div class="post-date">{{ date.string }}</div>
            <h2 class="title">
                <a :href="href">{{ title }}</a>
            </h2>
            <div class="tags flex">
                <span class="tag-item">#softwareengineer</span>
            </div>
            <div class="excerpt">{{ excerpt }}</div>
            <div class="read-the-article">
                <a :href="href">Read the article →</a>
            </div>

            <hr>
        </div>
    </div>

    <button class="load-posts-button" @click="loadPosts">Load more posts</button>
</template>

<script setup lang="ts">
import { data as posts } from '../posts.data'

</script>

<style scoped>
.blog-introduction {
    width: 100%;
    flex-direction: column;
}
.blog-introduction h1 {
    text-align: center;
}
.blog-introduction .tags {
    justify-content: center;
}
.introduction-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
}
.posts {
    margin: 6rem 0;
}
.post-item:not(:last-child) {
    margin-bottom: 2.5rem;
}
.posts hr {
    margin-top: 2.5rem;
}
.post-item .tags {
    width: 100%;
    flex-direction: row;
    justify-content: start;
    margin-bottom: 1rem;
}
.post-item .tag-item:first-child {
    margin-left: 0;
}
.title {
    margin: 0.5rem 0;
}
.title a {
    color: #000;
    text-decoration: none;
}
.read-the-article a {
    color: #645dd7;
}
.excerpt {
    margin-bottom: 1rem;
}
/**
    Loading Post Button
*/
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