<template>
  <div class="content">
    <div class="box1"></div>
    <div class="box2"></div>
  </div>
</template>

<!-- gsap的基础使用 -->
<script setup>
import { onMounted } from 'vue'
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.to('.box1', { rotation: 360, x: 200, duration: 2 });
  $gsap.to('.box2', {
    x: 300,
    scrollTrigger: {
      start: 400,
      end: 800,
      scrub: true
    }
  });
})

</script>

<style scoped lang="scss">
.content {
  height: 300vh;
  position: relative;
  // background-color: black;

  .box1,
  .box2 {
    width: 80px;
    height: 80px;
    background-color: green;
    border-radius: 4px;
  }

  .box2 {
    position: sticky;
    top: 20%;
  }
}
</style>