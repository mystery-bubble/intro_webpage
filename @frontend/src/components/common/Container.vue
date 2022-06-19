<template>
  <div
    class="flex"
    :class="`flex-${ row ? 'row' : 'column' } ${ prefix  + '-' }container`"
    :style="`background-color: ${ color }`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  row: {
    type: Boolean,
    default: true
  },
  color: String,
  prefix: {
    type: String,
    default: "custom"
  }
})
</script>

<style scoped lang="pcss">
</style>
