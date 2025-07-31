<script lang="ts" setup>
// import '~/public/static/css/swiper.min.css'
import '~/assets/scss/common.css'

useHead({
  script: [
    // { type: 'text/javascript', src: '/static/js/jquery-3.7.1.min.js' },
    // { type: 'text/javascript', src: '/static/js/swiper.js' },
  ],
})
</script>

<template>
  <!-- <PublicHeader /> -->
  <slot />
  <!-- <PublicFooter /> -->
</template>
