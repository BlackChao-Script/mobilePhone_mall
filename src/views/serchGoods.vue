<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { serchGoods } from '@/api/api'
import { recommendDataType } from '@/types'
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import GoodList from '@/common/GoodsList.vue'

const route = useRoute()
const showNSpin = ref<Boolean | any>(true)
const recommendData = reactive<recommendDataType>({
  title: `搜索"${route.params.keyWord}"`,
  dataMessage: {
    name: '为你推荐',
    hoverData: ['mobilePhone商城', '好物也不贵']
  },
  list: []
})

const getserchGoods = async () => {
  const { keyWord } = route.params
  const res = await serchGoods({ keyWord })
  recommendData.list = res.result
  showNSpin.value = false
  console.log(recommendData.list)
}

onMounted(() => {
  getserchGoods()
})
</script>

<template>
  <n-message-provider>
    <Header />
  </n-message-provider>
  <n-message-provider>
    <Nav />
  </n-message-provider>
  <n-message-provider>
    <GoodList :recommendData="recommendData" :showNSpin="showNSpin" />
  </n-message-provider>
</template>

<style scoped lang="less">
</style>
