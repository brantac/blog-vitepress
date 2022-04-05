<template>
    <nav id="navbar" class="flex flex-row justify-between align-center
        p-cs-1 md:px-cs-5 md:pt-cs-2 w-full">
        <div class="logo">
            <a href="/">
                <svg id="Logo_SVG_Optimized" data-name="Logo SVG Optimized" xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 26.721 35">
                    <g id="Grupo_35" data-name="Grupo 35">
                        <text id="_" data-name="/" transform="translate(0 28)" font-size="30" font-family="Work Sans" font-weight="700"><tspan x="0" y="0">/</tspan></text>
                        <path id="Caminho_3" data-name="Caminho 3" d="M49.467,83.753l4.211,11.758h4.735L54.2,83.753Z" transform="translate(-31.691 -65.916)" fill="#f0c808"/>
                    </g>
                </svg>
                <svg id="Brand_SVG_Optimized" data-name="Brand SVG Optimized" xmlns="http://www.w3.org/2000/svg" width="60.538" height="34.703" viewBox="0 0 60.538 34.703">
                    <g id="Grupo_34" data-name="Grupo 34">
                        <text id="_" data-name="/" transform="translate(0 16)" font-size="17" font-family="Work Sans" font-weight="700"><tspan x="0" y="0">/</tspan></text>
                        <path id="Caminho_2" data-name="Caminho 2" d="M12.126,20.53l2.514,7.02h2.827l-2.514-7.02Z" transform="translate(-1.513 -10.062)" fill="#f0c808"/>
                    </g>
                    <text id="rthur" transform="translate(16.538 17.253)" font-size="17" font-family="Work Sans" font-weight="700"><tspan x="0" y="0">rthur</tspan></text>
                    <text id="Brant" transform="translate(13.105 30.703)" font-size="17" font-family="Work Sans" font-weight="700"><tspan x="0" y="0">Brant</tspan></text>
                </svg>
            </a>
        </div>
        <div id="navbar-menu" class="flex flex-row align-center gap-cs-4">
            <Socials />
            <span class="share-blog-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20.315" height="24" viewBox="0 0 20.315 26">
                    <g id="Sharing_Button" data-name="Sharing Button" transform="translate(1 1)">
                        <path id="Sharing_Button-2" data-name="Sharing Button" d="M10.5,20.09a3.9,3.9,0,0,1,.795-2.365L6.986,14.4a3.91,3.91,0,1,1,.127-4.635l4.32-3.327A3.9,3.9,0,1,1,14.41,7.82a3.9,3.9,0,0,1-2.977-1.379L7.113,9.768A3.915,3.915,0,0,1,6.986,14.4L11.3,17.725A3.911,3.911,0,1,1,10.5,20.09Z" fill="none" stroke="#313628" stroke-width="2"/>
                    </g>
                </svg>
            </span>
            <span class="menu-toggler">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34">
                    <g id="Hamburger_Menu_Open" data-name="Hamburger Menu Open" transform="translate(1 1)">
                        <line id="Linha_15" data-name="Linha 15" x2="32" transform="translate(0 32)" fill="none" stroke="#353531" stroke-linecap="round" stroke-width="2"/>
                        <line id="Linha_15-2" data-name="Linha 15" x2="32" transform="translate(0 16)" fill="none" stroke="#353531" stroke-linecap="round" stroke-width="2"/>
                        <line id="Linha_15-3" data-name="Linha 15" x2="32" fill="none" stroke="#353531" stroke-linecap="round" stroke-width="2"/>
                    </g>
                </svg>
            </span>
        </div>
    </nav>
    <Home v-if="isHome" />
    <Post v-else />
    <!-- <main class="main flex">
    </main> -->
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed, ref } from 'vue'

// import Navbar from './components/Navbar.vue'
import Socials from './components/Socials.vue'
import Home from './Home.vue'
import Post from './Post.vue'

const route = useRoute()
const isHome = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>

<style scoped>
/**
    Navbar
*/
.logo a {
    text-decoration: none;
}
.menu-toggler,
.share-blog-btn {
    cursor: pointer;
}
#Brand_SVG_Optimized {
    display: none;
}
@media (min-width: 768px) {
    .menu-toggler {
        display: none;
    }
    #Logo_SVG_Optimized {
        display: none;
    }
    #Brand_SVG_Optimized {
        display: inline;
    }
}
</style>