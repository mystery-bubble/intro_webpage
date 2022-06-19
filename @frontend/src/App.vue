<template>
  <m-header :hide-at="header_disable_routes" :login-state="store.state.isLogin"></m-header>
  <m-container
    prefix="m"
    class="m-main"
  >
    <router-view/>
  </m-container>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';

import MHeader from "@/components/unique/MHeader.vue"
import MContainer from "@/components/common/Container.vue"

const store = useStore()

const header_disable_routes: Array<String> = []
var current_login_state = sessionStorage.getItem("isLogin") || "false"  
store.commit("setLogin", JSON.parse( current_login_state ))

</script>

<style lang="pcss">
.m-main {
  @apply bg-cyan-50;

  height: calc( 100vh - 70px );
}
</style>