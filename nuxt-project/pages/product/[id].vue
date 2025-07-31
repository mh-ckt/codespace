<script setup lang="ts">
const route = useRoute()
const detailData: any = ref({})

const res = await useFetch(`http://localhost:3000/${route.params.id}.html`)
detailData.value = res.data.value
</script>


<template>
  <div v-html="detailData"></div>
</template>