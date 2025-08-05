<script setup lang="ts">
/**
 * 初始化一个组件
 * @param {Object} type - 按钮类型：primary, success, warning, danger, default
 * @param {string} size - 按钮的尺寸： small, medium, large
 * @param {string} text - 按钮文字
 * @param {string} loadingText - 加载时显示的文字
 * @param {boolean} loading - 加载状态，默认为 true
 * @param {boolean} disabled - 是否禁用
 */
import { ref } from 'vue'
import CustomButton from './index.vue'
const loading = ref(false)

const submitData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200)
    }, 3000)
  })
}

const handleSubmit = async () => {
  // 模拟请求接口
  try {
    loading.value = true
    const code = await submitData();
    if (code === 200) {
      console.log('接口请求成功');
    } else {
      console.log('接口请求失败');
    }
  } catch (error) {

  } finally {
    loading.value = false
  }

}

</script>
<template>
  <div class="container">
    <!-- 基础用法 -->
    <CustomButton :loading="loading" text="提交表单" loading-text="提交中..." type="primary" @click="handleSubmit" />
    <!-- 不同类型 -->
    <CustomButton :loading="loading" text="保存" loading-text="保存中..." type="success" @click="handleSubmit" />
    <!-- 不同尺寸 -->
    <CustomButton :loading="loading" text="小按钮" loading-text="加载中..." type="primary" size="small"
      @click="handleSubmit" />
    <CustomButton :loading="loading" text="大按钮" loading-text="加载中..." type="primary" size="large"
      @click="handleSubmit" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 10px;
}
</style>
