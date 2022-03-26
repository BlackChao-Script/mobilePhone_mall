<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { GetSortdate } from '@/api/api'

import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'

const route = useRoute()

const sortGoodsList = ref<Array<any>>([])

const getSortGoods = async () => {
  const { id } = route.params
  const res = await GetSortdate({ id })
  sortGoodsList.value = res.result.res
  console.log(sortGoodsList.value)
}

onMounted(() => {
  getSortGoods()
})



</script>

<template>
  <Header />
  <Nav />
  <div class="sort_box main">
    <div class="goodList_item">
      <n-card class="item_box" :bordered="false" v-for="item in sortGoodsList" :key="item.id">
        <template #cover>
          <img :src="item.goods_img" />
        </template>
        <div class="box_content">
          <div class="box_name">{{ item.goods_name }}</div>
          <div class="box_price">{{ item.goods_price }}￥</div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.sort_box {
  .goodList_item {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    .item_box {
      position: relative;
      margin: 5px 6.1px;
      width: 24%;
      box-shadow: -1px -1px 10px rgba(0, 0, 0, 0.1);
      transition: 0.7s all;
      overflow: hidden;
      .box_content {
        display: flex;
        align-items: center;
        flex-direction: column;
        .box_name {
          font-weight: 700;
        }
        .box_price {
          color: #d3e4cd;
          font-weight: 700;
        }
      }
      &:hover {
        box-shadow: -1px -1px 10px rgba(37, 10, 10, 0.4);
        cursor: pointer;
      }
    }
  }
}
</style>
