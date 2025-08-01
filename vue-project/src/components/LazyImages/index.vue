<script setup lang="ts">
// 数据
let pictures = []
for (let index = 0; index < 500; index++) {
  const url = `https://robohash.org/${index}.png`;
  let productName = '兰博基尼'
  let desc = `这是一台酷酷的兰博基尼,售价$30000元`
  switch (index % 3) {
    case 0:
      productName = '小米手机'
      desc = `这是一部新款的${productName},售价${index * 32}元`
      break;
    case 1:
      productName = '苹果电脑'
      desc = `这是一部新款的${productName},售价${index * 3678}元`
      break;
    default:
      productName = '兰博基尼'
      desc = `这是一部新款的${productName},售价${index * 883380}元`
      break;
  }
  pictures.push({
    name: productName,
    desc,
    url
  })
}
</script>

<template>
  <div class="floor1-container">
    <ul class="floor1-content">
      <li class="floor1-product" v-for="item in pictures">
        <img :src="item.url" :key="item.name" :alt="item.name">
        <div class="product-bottom">
          <span>产品名称：{{ item.name }}</span>
          <span>产品描述：{{ item.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --base: 1920;
}

html {
  font-size: calc(10 / var(--base) * 100vw);
}

// 楼层1实现图片懒加载
.floor1-container {
  height: 100vh;

  .floor1-content {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 0 2rem;
  }

  .floor1-product {
    border: 1px solid #ececec;
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 10vw;
    }

    .product-bottom {
      display: flex;
      flex-direction: column;
      color: $desc-color;
    }
  }
}
</style>