<template>
  <div class="bg">
    <section class="floor1-container floor-container">
      <h1 class="title">案例1:点击按钮让按钮边框随机变色​</h1>
      <button id="changeColor">changeColor</button>
    </section>
    <section class="floor2-container floor-container">
      <h2 class="title">案例2:鼠标悬停让图片放大</h2>
      <div class="smile">
        <img src="https://work.herodash.ai/assets/img/chat1-1.png" alt="">
      </div>
    </section>
    <section class="floor3-container floor-container">
      <h2 class="title">案例3:点击元素让元素左右移动</h2>
      <div class="move-box">瞬移</div>
      <div class="move-warp">
        <button id="move-left">向左移动</button>
        <button id="move-right">向右移动</button>
      </div>
    </section>
    <section class="floor4-container floor-container">
      <h2 class="title">案例4:打字机效果</h2>
      <div id="text"></div>
      <button id="startTyping">开始打字</button>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted: () => {
    $(function () {
      $('.floor1-container #changeColor').click(function () {
        // 生成随机 RGB 颜色
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r}, ${g}, ${b})`;
        $('.floor1-container #changeColor').css({
          border: `2px solid ${color}`
        })
      })

      $('.floor2-container .smile img').hover(function () {
        $(this).css({
          transform: "scale(1.4)"
        })
      },
        function () {
          $(this).css({
            transform: "scale(1)"
          })
        }
      )

      // 这里的animate是jquery中提供的动画方法
      $('.floor3-container #move-left').click(function () {
        $(".floor3-container .move-box").animate({ left: "-=50px" }, 500);
      })

      $('.floor3-container #move-right').click(function () {
        $(".floor3-container .move-box").animate({ left: "+=50px" }, 500);
      })

      const text4 = "Hello, jQuery! This is a typing effect.";
      let index = 0;
      $(".floor4-container #startTyping").click(function () {
        $(".floor4-container #text").text(""); // 清空文字
        index = 0;
        typeText();
      });

      function typeText() {
        if (index < text4.length) {
          $(".floor4-container #text").append(text4.charAt(index)); // 逐字添加
          index++;
          setTimeout(typeText, 100); // 延迟 100ms 继续
        }
      }
    });
  },
  methods: {

  }
}
</script>

<style scoped>
.bg {
  background-color: #fff;
  color: #999;
  height: 100%;
}

.title {
  font-size: 1.5vw;
}

/* 楼层样式 */

.floor1-container button {
  padding: 10px 20px;
  border: 2px solid #000;
  cursor: pointer;
}

.floor2-container .smile {
  width: 40px;
  height: 40px;
  background-color: rgb(104, 24, 208);
  border-radius: 50%;
  cursor: pointer;
}

.floor2-container .smile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floor3-container .move-box {
  width: 100px;
  height: 40px;
  background-color: rgb(104, 24, 208);
  border-radius: 10px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  position: relative;
}

.floor3-container .move-warp {
  margin-top: 10px;
}

.floor3-container .move-warp button {
  padding: 4px 10px;
}

.floor3-container .move-warp .move-right {
  margin-left: 20px;
}

.floor4-container #text {
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  /* 光标效果 */
  animation: blink 0.5s step-end infinite;
}

@keyframes blink {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: black;
  }
}
</style>