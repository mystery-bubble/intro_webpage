<template>
  <div class="m-page-home">
    <div class="main-part">
      <div class="animated-logo">
        <img class="m-logo" src="@/assets/bubble.png">
        <div class="m-logo-shadow"></div>
      </div>
      <div class="home-text">
        <div class="title">【神奇泡泡教團】

        </div>
        <div class="pharse">如泡泡一般，夢幻卻又易碎。<br>就像那遙遠的夢想。</div>
      </div>
    </div>
    <div class="sub-part-1">
      準備放按鈕的地方
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="pcss">
.m-page-home {
  @apply flex-col h-full w-full flex justify-center items-center;
}

.main-part {
  @apply flex items-center text-3xl;
}

.animated-logo {
  @apply flex flex-col items-center;
}

.animated-logo > .m-logo {
  height: 170px;
  width: 170px;
  animation: floating 2s ease-in-out infinite;
}

.animated-logo > .m-logo-shadow {
  @apply bg-black;

  transform: translatey(2px);
  height: 15px;
  border-radius: 100%;
  animation: floating-shadow 2s ease-in-out infinite;
}

.home-text {
  @apply mt-4 ml-7;
}

.home-text > .title {
  @apply font-bold;
}

.home-text > .pharse {
  @apply text-base italic mt-2 pl-2.5;
}

.sub-part-1 {
  @apply mt-5;
}

@keyframes floating {
	0% {
    transform: rotate(10deg) translatey(0px);
	}
	50% {
		transform: rotate(-10deg) translatey(-20px);
	}
	100% {
		transform: rotate(10deg) translatey(0px);
	}
}

@keyframes floating-shadow {
  0% {
    width: 90px;
    filter: blur(4px);
  }
  50% {
    width: 70px;
    filter: blur(8px);
  }
  100% {
    width: 90px;
    filter: blur(4px);
  }
}
</style>