<script setup lang='ts'>
import { GetGoods } from '@/api/api'
import { recommendDataType } from '@/types'
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import Sort from '@/components/index/Sort.vue'
import Carousel from '@/common/Carousel.vue'
import GoodList from '@/common/GoodsList.vue'

//! 数据
// 推荐模块数据
const recommendData = reactive<recommendDataType>({
  title: '为你推荐',
  list: []
})

const getRecommendData = async () => {
  const res = await GetGoods()
  recommendData.list = res.result.list
}

onMounted(() => {
  getRecommendData()
})


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
  <!-- 商品分类推荐 -->
  <div class="main">
    <GoodList :goodsData="recommendData" />
  </div>
</template>

<style scoped lang="less">
.S_C_box {
  display: flex;
  height: 450px;
  box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.4);
}
</style>
