<template>
    <div class="topbar">
        <div class="topbar-logo">
            <router-link :to="'/'">
                <p>ANGIOLOGIC</p>
            </router-link>
        </div>
        <div class="topbar-btn-sct">
            <router-link :to="'/Project'">
                <a href="">
                    <p>Projet</p>
                </a>
            </router-link>
            <router-link :to="'/Settings'">
                <a href="/null">
                    <p>Paramètres</p>
                </a>
            </router-link>
            <router-link :to="'/Help'">
                <a href="/null">
                    <p>Aide</p>
                </a>
            </router-link>
            <router-link :to="'/Infos'">
                <a href="/null">
                    <p>Infos</p>
                </a>
            </router-link>
        </div>
        <div class="topbar-app-status">
            <p>DEBUG TEST</p>
        </div>
    </div>
</template>

<script>
export default {
    //null
}
</script>

<style src="../style/Bar.scss" scoped></style>