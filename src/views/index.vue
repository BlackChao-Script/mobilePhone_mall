<script setup lang='ts'>
import { GetGoods } from '@/api/api'
import { recommendDataType } from '@/types'
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import Sort from '@/components/index/Sort.vue'
import Carousel from '@/common/Carousel.vue'
import GoodList from '@/common/GoodsList.vue'
import Footer from '@/common/Footer.vue'

const showNSpin = ref<Boolean | any>(true)
const recommendData = reactive<recommendDataType>({
  title: '为你推荐',
  dataMessage: {
    name: '为你推荐',
    hoverData: ['mobilePhone商城', '好物也不贵']
  },
  list: []
})
const getRecommendData = async () => {
  const res = await GetGoods()
  recommendData.list = res.result.list
  showNSpin.value = false
}

onMounted(() => {
  getRecommendData()
})


</script>

<template>
  <!-- 头部 -->
  <n-message-provider>
    <Header />
  </n-message-provider>
  <!-- 导航栏 -->
  <n-message-provider>
    <Nav></Nav>
  </n-message-provider>
  <!-- 分类与轮播图 -->
  <div class="S_C_box main">
    <Sort />
    <Carousel />
  </div>
  <!-- 商品分类推荐 -->
  <n-message-provider>
    <GoodList :recommendData="recommendData" :showNSpin="showNSpin" />
  </n-message-provider>
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
