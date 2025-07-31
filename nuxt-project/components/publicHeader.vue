<script setup lang="ts">
const menuData = {
  header: [
    {
      url: '/product-list',
      name: 'product'
    }
  ]
}
</script>

<template>
  <ul>
    <li v-for="(item, index) in menuData.header" :key="index">
      <nuxt-link :to="item.url">
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>
