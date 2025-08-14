<script setup>
import Watch from '@/components/watch.vue'
import WatchEffect from '@/components/watchEffect.vue'
import Computed from '@/components/computed.vue'
</script>

<template>
  <h5>1.watch()，watchEffect()，computed()的区别？</h5>
  <Computed />
  <Watch />
  <WatchEffect />
</template>

<style scoped>
h5 {
  background-color: beige;
  padding: 10px;
}
</style>
