<template>
  <Swiper :pagination="{
    clickable: true,
  }" :modules="modules" :navigation="true" :slides-per-view="3" :space-between="10" @swiper="onSwiper"
    @slideChange="onSlideChange">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      modules: [Navigation, Pagination],
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 10vh;
}

.swiper-wrapper {
  width: 60% !important;
}

.swiper-slide {
  text-align: center;
  font-size: 12px;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>