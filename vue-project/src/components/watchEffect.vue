<template>
  <div></div>
</template>

<script setup>
import { onMounted, watch, ref, reactive, watchEffect, onBeforeMount } from 'vue'
let sum = ref(0)
let person = reactive({
  name: '张三',
  age: 18,
  job: ['码农', '切图仔', '早餐店老板']
})

// --------watchEffect的基础使用--------
// onMounted(() => {
//   setTimeout(() => {
//     sum.value = 1
//     person.job[2] = '待业中...'
//   }, 1000)
// })

watchEffect(onCleanup => {
  // console.log(sum.value)
  // console.log(person)
  // onCleanup(() => {
  //   console.log('清除副作用')
  // })
})
// --------watchEffect的执行时机--------
onMounted(() => {
  // setTimeout(() => {
  //   sum.value = 1
  // }, 1000)
  // sum.value = 1
  // console.log('onMounted')
})

onBeforeMount(() => {
  sum.value = 1
  console.log('onBeforeMount')
})

watchEffect(
  () => {
    // console.log(9999, sum.value)
  },
  {
    // flush: 'pre' // 设置侦听器在组件渲染之前执行
    // flush: 'post' // 侦听器延迟到组件渲染之后再执行
    // flush: 'sync' // 响应式依赖发生改变时立即触发侦听器
    // onTrack(e) {
    // //被追踪为依赖时触发
    //     console.log(e);
    // },
    // onTrigger(e) {
    // // 所追踪数据更改时触发
    //     console.log(e);
    // }
  }
)
</script>
