<script setup lang="ts">
/**
 * TODO:
 * 1. Improve the sharing data that's being
 * passed.
*/
const props = defineProps<{
    path: string
}>();

const sharePage = () => {
    if (props.path) {
        const shareData = {
            title: "Arthur Brant's Blog",
            text: "Check out this blog post",
            url: `http://${window.location.host}${props.path}`
        }

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log("Successful share"))
                .catch(error => console.log("Error sharing", error));
        } else {
            console.log("Share not supported");
        }
    }
}
</script>

<template>
    <button type="button" class="share-blog-btn"
        @click="sharePage"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20.315" height="24" viewBox="0 0 20.315 26">
            <g id="Sharing_Button" data-name="Sharing Button" transform="translate(1 1)">
                <path id="Sharing_Button-2" data-name="Sharing Button" d="M10.5,20.09a3.9,3.9,0,0,1,.795-2.365L6.986,14.4a3.91,3.91,0,1,1,.127-4.635l4.32-3.327A3.9,3.9,0,1,1,14.41,7.82a3.9,3.9,0,0,1-2.977-1.379L7.113,9.768A3.915,3.915,0,0,1,6.986,14.4L11.3,17.725A3.911,3.911,0,1,1,10.5,20.09Z" fill="none" stroke="#313628" stroke-width="2"/>
            </g>
        </svg>
    </button>
</template>

<style scoped>
.share-blog-btn {
    cursor: pointer;
}
</style>