<template>
  <!-- <StylePosition /> -->
  <!-- <UploadFile /> -->
  <!-- <CustomBotton /> -->
</template>
<script setup>
// import StylePosition from '@/components/StylePosition/index.vue'
// import UploadFile from '@/components/UploadFile/index.vue'
// import CustomBotton from '@/components/CustomBotton/Demo.vue'

// 所有标签页加入同一个"频道"
const channel = new BroadcastChannel('shop_channel');
console.log(99999, channel);


// 标签1发送消息
channel.postMessage({ action: 'addToCart', item: '可爱猫猫' });

// 标签2接收消息
channel.onmessage = (event) => {
  console.log('收到消息:', event.data);
  // 显示："收到消息: {action: "addToCart", item: "可爱猫猫"}"
};
</script>
<style>
@media (min-width: 1024px) {}
</style>
