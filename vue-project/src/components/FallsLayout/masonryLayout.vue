<template>
  <div class="container">
    <h2>Masonry - imagesLoaded progress</h2>
    <ul class="grid content" ref="gridRef">
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg" />
      </li>
      <li class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Masonry from 'masonry-layout'
const gridRef = ref(null)

onMounted(() => {
  const container = gridRef.value
  const images = container.querySelectorAll('img')
  let loadedCount = 0
  const totalImages = images.length

  const msnry = new Masonry('.grid', {
    itemSelector: '.grid-item', // 告诉 Masonry，​​哪些子元素是需要进行瀑布流排列的元素​​。
    // percentPosition: true, //  使用 ​​百分比定位​​ 而不是像素定位。
    columnWidth: '.grid-item', // 定义 ​​每一列的基准宽度​​ 是什么。
    // gutter: 10 //水平方向（列与列之间）的间距​​
  })

  const checkAllLoaded = () => {
    loadedCount++
    if (loadedCount === totalImages) {
      msnry.layout()
    }
  }

  images.forEach((img) => {
    if (img.complete) {
      checkAllLoaded()
    } else {
      img.addEventListener('load', checkAllLoaded)
      img.addEventListener('error', checkAllLoaded)
    }
  })
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  margin-right: -10px;
}

.grid {
  width: 90%;
}

.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-item {
  width: 25%;
  padding-right: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.grid-item img {
  border-radius: 4px;
}

.grid-item img {
  display: block;
  max-width: 100%;
}
</style>