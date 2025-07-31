<template>
  <section class="floor1-container floor-container">
    <h1 class="title floor1-title">Apple AirPods Pro Animation</h1>
    <canvas id="hero-lightpass" />
  </section>
</template>

<script>
import $ from 'jquery'
const { $gsap } = useNuxtApp()

export default {
  mounted: () => {
    $(function () {
      console.log(999, $);
    })

    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;
    const frameCount = 147;
    const currentFrame = index => (
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
    );

    const images = []
    const airpods = {
      frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    $gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5
      },
      onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 4vw;
  font-weight: 500;
  color: #fff;
}

.floor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.floor1-container {
  height: 3000px;
  background: #000;
}

.floor1-container .floor1-title {
  position: sticky;
  top: 20vw;
}

.floor1-container canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
}
</style>