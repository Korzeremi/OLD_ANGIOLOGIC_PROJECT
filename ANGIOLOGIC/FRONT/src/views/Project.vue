<script setup>
import Foot from '../components/Footbar.vue';
import Top from '../components/Topbar.vue';
import WP from '../components/Wallpaper.vue';
import Dessin from '../components/Draw.vue';
</script>

<template>
    <body>
        <Top></Top>
        <Dessin></Dessin>
        <WP></WP>
        <Foot></Foot>
    </body>
</template>

<script>
export default {
    components: {
        Dessin,
    },
};
</script>

<style src="../style/Project.scss" scoped></style>