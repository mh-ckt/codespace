<template>
  <div>
    <img src="https://d6lkeq1iq8oae.cloudfront.net/products/sweetking/p1/p1_pc.jpg" alt="">
    <nav>
      <a href="/home">Home</a>
      <a href="/about">About</a>
    </nav>
    <div id="route-view"></div>
  </div>
</template>

<style>
img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>

<script>
const routelist = [
  {
    path: '/home',
    component: 'home pages'
  },
  {
    path: '/about',
    component: 'about pages'
  },
]

const routeView = document.getElementById('route-view');
// 拦截所有 <a> 标签点击事件，使用 History API 替换默认跳转
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // 阻止默认跳转
    const href = link.getAttribute('href');
    history.pushState({}, '', href); // 更新 URL（不刷新页面）
    let items = routelist.find(item => item.path === href);
    routeView.innerHTML = items.component
  });
});
</script>