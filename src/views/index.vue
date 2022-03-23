<script setup lang='ts'>
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import Carousel from '@/common/Carousel.vue'
</script>

<template>
  <!-- 头部 -->
  <Header />
  <!-- 导航栏 -->
  <Nav />
  <!-- 轮播图 -->
  <div class="main">
    <Carousel />
  </div>
</template>

<style scoped lang="less">
.main {
  margin: 0 auto;
}
</style>
