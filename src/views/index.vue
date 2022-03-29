<script setup lang='ts'>
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import Sort from '@/components/index/Sort.vue'
import Carousel from '@/common/Carousel.vue'
import GoodList from '@/components/index/GoodsList.vue'
import Footer from '@/common/Footer.vue'

</script>

<template>
  <!-- 头部 -->
  <n-message-provider>
    <Header />
  </n-message-provider>
  <!-- 导航栏 -->
  <Nav></Nav>
  <!-- 分类与轮播图 -->
  <div class="S_C_box main">
    <Sort />
    <Carousel />
  </div>
  <!-- 商品分类推荐 -->
  <div class="main">
    <n-message-provider>
      <GoodList />
    </n-message-provider>
  </div>
  <!-- 底部 -->
  <Footer />
</template>

<style scoped lang="less">
.S_C_box {
  display: flex;
  height: 450px;
  box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.4);
}
</style>
