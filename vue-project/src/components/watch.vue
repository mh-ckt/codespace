<template></template>

<script setup>
import { onMounted, watch, ref, reactive, onBeforeMount } from 'vue'
let sum = ref(0)
const state = reactive({ count: 0 })
let msg = ref('hello')
let person = reactive({
  name: '张三',
  age: 18,
  job: ['码农', '切图仔', '早餐店老板']
})

// // ------------情况1：监视ref定义的响应式数据----------
// onMounted(() => {
//   setTimeout(() => {
//     sum.value = 1
//   }, 1000)
// })

// watch(sum, (newValue, oldValue) => {
//   console.log('sum变化了', newValue, oldValue)
// })

// // ------------情况2：监视多个ref定义的响应式数据---------
// onMounted(() => {
//   setTimeout(() => {
//     sum.value = 1
//   }, 1000)
// })
// watch([sum, msg], (newValue, oldValue) => {
//   console.log('sum或msg变化了', newValue, oldValue)
// })

// //------------情况3：监视reactive定义的响应式数据-----------
// //若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue，且强制开启了深度监视。
// onMounted(() => {
//   setTimeout(() => {
//     person.job[2] = '摆夜摊老板'
//   }, 1000)
// })
// watch(person, (newValue, oldValue) => {
//   console.log('person变化了', newValue, oldValue) //此处的deep配置不再生效。
// })

// //------------情况4：监视reactive所定义的一个响应式数据中的某个属性------------
// onMounted(() => {
//   setTimeout(() => {
//     person.name = '李四'
//   }, 1000)
// })
// watch(
//   () => person.name,
//   (newValue, oldValue) => {
//     console.log('person.name变化了', newValue, oldValue)
//   }
// )

// //------------情况5：监视reactive所定义的一个响应式数据中的某些属性------------
// onMounted(() => {
//   setTimeout(() => {
//     person.name = '李四'
//   }, 1000)
// })
// watch([() => person.name, () => person.age], (newValue, oldValue) => {
//   console.log('person.name或person.age变化了', newValue, oldValue)
// })
</script>
