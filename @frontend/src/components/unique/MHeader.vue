<template>
  <div v-if="hideHandler()" class="m-header">
    <div @click="clickHandler()" class="left">
      <img src="@/assets/bubble.png" class="m-header-icon" alt="logo">
      <div class="font-bold text-lg ml-2">MysteryBubble</div>
    </div>
    <div class="right">
      <div v-if="loginState" class="welcome-text">嗨，{{ userName }}</div>
      <button @click="logoutHandler()" v-if="loginState" class="m-btn ml-2">登出</button>
      <button @click="loginHandler()" v-if="!loginState" class="m-btn ml-2">登入</button>
      <button v-if="!loginState" class="m-btn ml-2">註冊</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const store = useStore()

const props = defineProps({
  hideAt: {
    type: [ String, Array<String> ],
    default: []
  },
  loginState: {
    type: Boolean,
    default: true
  },
  userName: {
    type: String,
    default: "使用者"
  }
})

const hideHandler = (): boolean => {
  if ( !props.hideAt || !route.name || typeof( route.name ) === 'symbol' ) {
    return true;
  }

  if ( typeof( props.hideAt ) === 'string' ) {
    return route.name !== props.hideAt
  }
  else if ( Array.isArray( props.hideAt ) ) {
    return !props.hideAt.includes( route.name )
  }
  else {
    return true
  }
}

const loginHandler = (): void => {
  // fake login
  alert(`${ props.userName }已經登入`)
  store.commit("setLogin", true)
  router.go(0)
}

const logoutHandler = (): void => {
  alert(`${ props.userName }已經登出`)
  store.commit("setLogin", false)
  router.go(0)
}

const clickHandler = (): void => {
  console.log("clicked")
  router.push({ name: "home" })
}
</script>

<style lang="pcss">
.m-header {
  @apply flex justify-between drop-shadow-lg items-center bg-cyan-200 p-2.5;
}

.m-header-icon {
  height: 50px;
  width: 50px;
}

.m-header-title {
  @apply font-bold text-lg ml-2;
}

.m-header .left {
  @apply flex items-center;
}

.m-header .right {
  @apply flex items-center text-center;
}

.m-btn {
  @apply transition-colors text-lg px-5 py-1.5 bg-cyan-50 border-2 border-cyan-200 rounded-md font-bold shadow-md; 
}

.m-btn:hover {
  @apply bg-cyan-300 border-cyan-300 text-cyan-50;
}

.welcome-text {
  @apply font-bold text-lg;
}
</style>
