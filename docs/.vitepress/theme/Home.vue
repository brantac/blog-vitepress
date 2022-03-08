<template>
    <div class="blog-introduction flex">
        <h1 class="title">Read Topics About</h1>
        <div class="tags flex">
            <span class="tag-item">#softwareengineer</span>
            <span class="tag-item">#tutorials</span>
            <span class="tag-item">#tips</span>
        </div>
    </div>
    
    <div class="posts">
        <div class="post-item" v-for="{ title, href, date, excerpt } of posts">
            <div>{{ date.string }}</div>
            <h2>
                <a :href="href">{{ title }}</a>
            </h2>
            <div>{{ excerpt }}</div>
        </div>
    </div>
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
</style>