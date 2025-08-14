<template>
  <div v-for="(item, index) in list" class="list">
    <h4>{{ index + 1 }}.{{ item.title }}</h4>
    <component :is="item.component"></component>
  </div>
</template>

<script setup>
import FlashCard from './card/flashCard.vue'
import ScrollBar from './card/scrollBar.vue'
import { ref, reactive, markRaw } from 'vue'

const list = reactive([
  {
    component: markRaw(FlashCard),
    title: '发光边角框悬停效果'
  },
  {
    component: markRaw(ScrollBar),
    title: '全屏滚动进度条指示器'
  }
])
</script>

<style scoped>
.list {
  background-color: #f5f5f5;
  margin: 10px;
  padding: 10px;
}
</style>
