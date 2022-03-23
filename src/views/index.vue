<script setup lang='ts'>
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import Sort from '@/components/index/Sort.vue'
import Carousel from '@/common/Carousel.vue'
</script>

<template>
  <!-- 头部 -->
  <Header />
  <!-- 导航栏 -->
  <Nav />
  <!-- 分类与轮播图 -->
  <div class="S_C_box main">
    <Sort />
    <Carousel />
  </div>
</template>

<style scoped lang="less">
.S_C_box {
  display: flex;
  height: 450px;
  margin: 10px auto;
   box-shadow: -1px 1px 10px rgba(0, 0, 0, .4);
}
</style>
