<template>
  <div class="container">
    <section class="floor1-container floor-continer flex-center">
      <p>floo1</p>
    </section>
    <section class="floor2-container floor-continer">
      <div class="sticky flex-center">
        <p>floo2</p>
      </div>
    </section>
    <section class="floor3-container floor-continer flex-center">
      <p>floo3</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {

  // 1.​父容器或祖先元素设置了 overflow: hidden / overflow: scroll / overflow: auto会导致子元素的粘性定位失效
  // overflow: hidden;

  .floor-continer {
    position: relative;
    color: #fff;
  }

  .floor1-container {
    background-color: black;
    min-height: 100vh;
  }

  .floor2-container {
    background-color: darkgreen;
    min-height: 400vh;
  }

  .floor3-container {
    background-color: chocolate;
    min-height: 100vh;
  }
}

.sticky {
  position: sticky;
  height: 50vh;
  top: 30vh;
  background-color: #fff;
  color: black;
  width: 100%;
}

p {
  font-size: 5vw;
}
</style>