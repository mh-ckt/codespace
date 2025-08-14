<script setup>
import { ref, reactive, markRaw, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Home from '../views/home/index.vue'
import Csss from '../views/csss/index.vue'
import Todo from '../views/todo/index.vue'
import Me from '../views/me/index.vue'
const active = ref('home')
let route = useRoute()
const router = useRouter()
const checked = ref()
const tabs = reactive([
  {
    name: 'home',
    component: markRaw(Home)
  },
  {
    name: 'csss',
    component: markRaw(Csss)
  },
  {
    name: 'todo',
    component: markRaw(Todo)
  },
  {
    name: 'me',
    component: markRaw(Me)
  }
])
const onChange = name => {
  checked.value = tabs.find(item => item.name === name).component
  router.push({
    name: name
  })
}

onMounted(() => {
  checked.value = tabs.find(item => item.name === route.name).component
  active.value = route.name
  router.push({
    name: route.name
  })
})
</script>

<template>
  <header>
    <component :is="checked" />
  </header>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="csss" icon="search">样式汇总</van-tabbar-item>
    <van-tabbar-item name="todo" icon="friends-o">待办</van-tabbar-item>
    <van-tabbar-item name="me" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>
