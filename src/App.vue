<template>
    <div class="w-screen h-screen flex flex-col bg-fill" :class="{'coffee_background': useUi.background === 'coffee_main'}">
        <Header :isDark="false" />
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import {useUi} from './stores/ui';
</script>

<style>
.coffee_background {
    background: url('pictures/coffee-background.gif') no-repeat;
    transition: all 200ms ease-out;
}

.bg-fill {
  background-size: 100% 100%;
}
</style>