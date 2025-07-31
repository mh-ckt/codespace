<template>
  <nav class="header-01-nav">
    <div class="menu-bg" :style="dynamicStyles"></div>
    <ul class="menu-list">
      <li class="menu-item" v-for="(item, index) in menulist" @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)">
        <span ref="spanRef">{{ item }}</span>
      </li>
    </ul>
  </nav>
</template>
<script setup>
let menulist = ['$CTRL', 'Support', 'Security', 'Resources']
const spanRef = ref(null);
const dynamicStyles = ref({
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  opacity: 0,
});

const handleMouseEnter = (index) => {
  if (spanRef.value) {
    dynamicStyles.value.width = `${spanRef.value[index].offsetWidth}px`;
    dynamicStyles.value.height = `${spanRef.value[index].offsetHeight}px`;
    dynamicStyles.value.left = `${spanRef.value[index].offsetLeft}px`;
    dynamicStyles.value.top = `${spanRef.value[index].offsetTop}px`;
    dynamicStyles.value.opacity = 1
  }
}

const handleMouseLeave = (index) => {
  dynamicStyles.value.width = 0;
  dynamicStyles.value.height = 0;
  dynamicStyles.value.left = `${spanRef.value[index].offsetLeft + spanRef.value[index].offsetWidth / 2}px`;
  dynamicStyles.value.top = `${spanRef.value[index].offsetTop + spanRef.value[index].offsetHeight / 2}px`;
  dynamicStyles.value.opacity = 0
}
</script>
<style lang="scss" scoped>
.header-01-nav {
  position: relative;

  .menu-bg {
    position: absolute;
    background-color: #d1d6d2;
    z-index: 1;
    border-radius: 3vw;
    transition: all 0.4s ease;
  }

  .menu-list {
    background-color: #ecefec;
    display: inline-flex;
    border-radius: 1vw;
    position: relative;

    li {
      font-size: 1.8vw;
      padding: 1vw 1vw;

      span {
        display: block;
        position: relative;
        padding: 1vw 3vw;
        z-index: 2;
      }
    }

    li:not(:last-of-type) span::after {
      content: '';
      display: block;
      width: 0.4vw;
      height: 50%;
      background-color: rgb(117, 116, 116);
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: -1.2vw;
    }
  }
}
</style>