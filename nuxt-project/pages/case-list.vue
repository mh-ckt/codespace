<script setup lang="ts">
let lists = [
  {
    title: 'navbar',
    url: '/cases/navbar'
  },
  {
    title: 'vue-01',
    url: '/cases/vue-01'
  },
  {
    title: 'vue-02',
    url: '/cases/vue-02'
  },
  {
    title: 'canvas-01',
    url: '/cases/canvas-01'
  },
  {
    title: 'css-01',
    url: '/cases/css-01'
  },
  {
    title: 'gsap-01',
    url: '/cases/gsap-01'
  },
  {
    title: 'gsap-02',
    url: '/cases/gsap-02'
  },
  {
    title: 'javascript-01',
    url: '/cases/javascript-01'
  },
  {
    title: 'jquery-01',
    url: '/cases/jquery-01'
  },
  {
    title: 'swiper-01',
    url: '/cases/swiper-01'
  },
]
</script>

<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index">
      <NuxtLink :to="item.url">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>