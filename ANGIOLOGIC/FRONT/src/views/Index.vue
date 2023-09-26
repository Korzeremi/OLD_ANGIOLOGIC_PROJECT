<script setup>
import Foot from '../components/Footbar.vue';
</script>

<template>
    <body>
        <div class="index-back-sct">
            <video autoplay loop muted>
                <source src="../assets/doc.mp4" type="video/mp4">
            </video>
        </div>
        <div class="index-content-sct">
            <div class="index-text-sct">
                <h1>ANGIOLOGIC</h1>
                <h4>L'outil idéal pour vos consultations angiologiques</h4>
            </div>
            <div class="index-btn-sct">
                <router-link :to="'/Project'">
                    <a :href="logIn">
                        <p>NOUVEAU PROJET</p>
                    </a>
                </router-link>
            </div>
        </div>
        <Foot></Foot>
    </body>
</template>

<script>
export default {
    components: {
        'Foot': Foot,
    },
    name: 'Index',
    methods: {
        logIn(){
            
        }
    }
};
</script>

<style src="/src/style/Index.scss"></style>