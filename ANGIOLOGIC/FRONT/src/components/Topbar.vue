<template>
    <div class="topbar">
        <div class="topbar-logo">
            <h2>ANGIOLOGIC</h2>
        </div>
        <div class="topbar-btn-sct">
            <button>PROJECT</button>
            <button>SETTINGS</button>
            <button>INFOS</button>
            <button>HELP</button>
        </div>
        <div class="topbar-app-status">
            <h4>ALPHA-DEBUG</h4>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .topbar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .topbar-logo {
        width: 25%;
        background-color: rgb(28, 75, 75);
        text-align: center;
    }
    .topbar-btn-sct {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
    .topbar-btn-sct > button {
        width: 24%;
    }
    .topbar-app-status {
        width: 24%;
        text-align: center;
    }
</style>