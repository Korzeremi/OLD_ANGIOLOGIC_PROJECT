<script setup>
import Foot from '../components/Footbar.vue';
import Top from '../components/Topbar.vue';
</script>

<template>
    <body>
        <Top></Top>
        <div class="infos-sct">
            <div class="infos-app-sct">
                <div class="infos-app-sct-main">
                    <h1>ANGIOLOGIC</h1>
                    <h4>L'application professionnelle de croquis vasculaire</h4>
                </div>
                <div class="infos-app-sct-dev">
                    <h2>LemnixTech</h2>
                    
                </div>
                <div class="infos-app-sct-txt">
                    <h2>Présentation</h2>
                    <p>Bienvenue dans le monde de la modélisation vasculaire révolutionnaire avec AngioLogic, le logiciel innovant que j'ai créé. AngioLogic offre une solution de pointe pour la conception de croquis médicaux vasculaires précis et détaillés, transformant la manière dont les professionnels de la santé visualisent et communiquent sur les structures vasculaires. Avec une interface conviviale et des fonctionnalités avancées, AngioLogic ouvre de nouvelles perspectives dans le domaine de la modélisation médicale, permettant une compréhension plus profonde et une communication plus efficace des informations vasculaires. Découvrez l'avenir de la modélisation vasculaire avec AngioLogic.</p>
                </div>
                <div class="infos-app-sct-status">
                    <h2>Status de l'application</h2>
                    <div class="infos-app-sct-status-content">
                        <div class="infos-app-sct-status-content-github">
                            <a href="https://github.com/Korzeremi/PROJET_ANGIOLOGIC">
                                <img src="../assets/onGithub.jpg" alt="onGithub">
                            </a>
                            <img src="../assets/appStatus.jpg" alt="appStatus">
                            <img src="../assets/inDev.jpg" alt="inDev">
                        </div>
                    </div>
                </div>   
            </div>
            <div class="infos-legal-sct">

            </div>
        </div>
        <Foot></Foot>
    </body>
</template>

<style src="../style/Infos.scss" scoped></style>