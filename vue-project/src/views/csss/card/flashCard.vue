<template>
  <div class="container" ref="container">
    <div class="card" style="--clr: #f00"></div>
    <div class="card" style="--clr: #0f0"></div>
    <div class="card" style="--clr: #0fe"></div>
    <div class="card" style="--clr: #ff0"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const container = ref('container')
const offsetWidth = 100
onMounted(() => {
  // console.log(999, container.value.offsetWidth)
})
</script>

<style scoped lang="less">
// @--clr: color;

// @off-set-width:calc (100/4 + px);
@off-set-width: (100px / 2);
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    // width: v-bind(`${offsetWidth}px`);
    height: @off-set-width;
    background-color: rgba(45, 45, 45, 1);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
}
</style>
