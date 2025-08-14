<template>
  <div>
    <div>计算属性1：{{ num1 }}</div>
    <div>计算属性2：{{ num2 }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const count1 = ref(1)
const count2 = ref(10)
// 直接进行setter操作，当count1的值是1的时候，num1 的值等count1的值+1
const num1 = computed(() => count1.value + 1)

// 这个案例说明计算属性中如何设置computed的返回值，则会先执行setter方法去设置外界的值，然后再执行getter方法，返回新的依赖值。
const num2 = computed({
  get: () => count2.value + 3,
  set: val => {
    count2.value = val - 1
  }
})
num2.value = 2
</script>
