<template>
  <div class="parent">
    <div class="child1"></div>
    <div class="child2"></div>
    <div class="child3"></div>
  </div>
</template>


<style>
.parent {
  position: relative;
  width: 200px;
  height: 200px;
}

.child1 {
  width: 100px;
  height: 100px;
  background: pink;
  z-index: 1;
}

.child2 {
  width: 100px;
  height: 100px;
  position: absolute;
  background: red;
  z-index: 2;
}

.child3 {
  width: 100px;
  height: 100px;
  background: yellow;
  z-index: 3;
}
</style>