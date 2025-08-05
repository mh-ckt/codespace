<script setup lang="ts">
import { ref, computed } from 'vue';
// 定义事件
const emit = defineEmits(['click'])
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: '按钮'
  },
  loadingText: {
    type: String,
    default: '加载中...'
  },
  type: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['primary', 'success', 'warning', 'danger', 'default'].includes(value)
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  htmlType: {  // 原生 button 的 type
    type: String,
    default: 'button', // button, submit, reset
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => {
      return ['small', 'medium', 'large'].includes(value)
    }
  }
})
function debounce(fun: Function, timer: number) {
  let T: ReturnType<typeof setTimeout>;
  return () => {
    if (T) {
      clearTimeout(T)
    }
    T = setTimeout(() => {
      fun()
    }, timer)
  }
}
const debouncedSubmit = debounce(() => { (!props.loading && !props.disabled) && emit('click') }, 300);
// 计算按钮样式类
const buttonClasses = computed(() => {
  return [
    'loading-button',
    `loading-button--${props.type}`,
    `loading-button--${props.size}`,
    {
      'loading-button--loading': props.loading,
      'loading-button--disabled': props.disabled
    }
  ]
})
</script>

<template>
  <div class="container">
    <button :class="buttonClasses" @click="debouncedSubmit">{{ props.loading ? props.loadingText : props.text
      }}</button>
  </div>
</template>

<style scoped>
.loading-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  white-space: nowrap;
  text-align: center;
  line-height: 1;
}

/* 按钮尺寸 */
.loading-button--small {
  padding: 6px 12px;
  font-size: 12px;
  min-height: 28px;
}

.loading-button--medium {
  padding: 8px 16px;
  font-size: 14px;
  min-height: 32px;
}

.loading-button--large {
  padding: 10px 20px;
  font-size: 16px;
  min-height: 36px;
}

/* 按钮类型样式 */
.loading-button--default {
  background-color: #f5f5f5;
  color: #333;
}

.loading-button--default:hover:not(.loading-button--loading):not(.loading-button--disabled) {
  background-color: #e6e6e6;
}

.loading-button--primary {
  background-color: #007bff;
  color: white;
}

.loading-button--primary:hover:not(.loading-button--loading):not(.loading-button--disabled) {
  background-color: #0056b3;
}

.loading-button--success {
  background-color: #28a745;
  color: white;
}

.loading-button--success:hover:not(.loading-button--loading):not(.loading-button--disabled) {
  background-color: #1e7e34;
}

.loading-button--warning {
  background-color: #ffc107;
  color: #212529;
}

.loading-button--warning:hover:not(.loading-button--loading):not(.loading-button--disabled) {
  background-color: #e0a800;
}

.loading-button--danger {
  background-color: #dc3545;
  color: white;
}

.loading-button--danger:hover:not(.loading-button--loading):not(.loading-button--disabled) {
  background-color: #c82333;
}

/* 加载状态 */
.loading-button--loading {
  cursor: not-allowed;
  opacity: 0.8;
}

/* 禁用状态 */
.loading-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 加载动画 */
.loading-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* 为不同类型按钮调整 spinner 颜色 */
.loading-button--default .loading-spinner {
  border-top-color: #333;
  border-color: rgba(51, 51, 51, 0.3);
}

.loading-button--primary .loading-spinner {
  border-top-color: white;
}

.loading-button--success .loading-spinner {
  border-top-color: white;
}

.loading-button--warning .loading-spinner {
  border-top-color: #212529;
}

.loading-button--danger .loading-spinner {
  border-top-color: white;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 按钮文字 */
.button-text {
  display: inline-block;
}
</style>