<script setup lang="ts">
const props = defineProps<{
    topics: string[]
}>()
</script>

<template>
    <div class="tag-container">
        <span v-for="tag in topics" class="tag-item">
            #{{ tag }}
        </span>
    </div>
</template>

<style scoped>
.tag-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.tag-item {
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.03rem;
}
.tag-item:first-child {
    margin-left: 0;
}

</style>