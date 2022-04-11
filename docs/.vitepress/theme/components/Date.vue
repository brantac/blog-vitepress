<script setup lang="ts">
const props = defineProps<{
    date: Object
}>();

function getDateTime() {
    return new Date(props.date.time).toISOString();
}
</script>

<template>
    <dl>
        <dt class="sr-only">Date</dt>
        <dd>
            <time :datetime="getDateTime()">{{ date.string }}</time>
        </dd>
    </dl>
</template>

<style scoped>

</style>