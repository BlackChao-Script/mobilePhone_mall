<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { GetSortdate } from '@/api/api'

import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'

const route = useRoute()

const sortGoodsList = ref<Array<any>>([])
const sortName = ref<string>('')
const sortNavList = ref<Array<any>>(['推荐', '新品', '价格'])
const indexs = ref<number>(0)

const getSortGoods = async () => {
  const { id } = route.params
  const res = await GetSortdate({ id })
  sortGoodsList.value = res.result.res
}

const clickNavItem = (index: number) => {
  indexs.value = index
  // 正常排序
  if (index == 0) {
    getSortGoods()
  }
  // 按时间排序
  if (index == 1) {
    sortGoodsList.value.sort((a, b) => {
      return a.createGoodsTime < b.createGoodsTime ? 1 : -1
    })
  }
  // 按价格排序
  if (index == 2) {
    sortGoodsList.value.sort((a, b) => {
      return a.goods_price < b.goods_price ? 1 : -1
    })
  }
}

onMounted(() => {
  getSortGoods()
  sortName.value = route.params.name as string
})



</script>

<template>
  <Header />
  <Nav />
  <div class="sort_name main">
    <div class="name">{{ sortName }}分类</div>
  </div>
  <div class="sort_nav">
    <div class="main">
      <div
        class="nav_item"
        :class="{ color: indexs == index }"
        v-for="(item,index) in sortNavList"
        :key="index"
        @click="clickNavItem(index)"
      >{{ item }}</div>
    </div>
  </div>
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
.sort_name {
  .name {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: 70px;
    height: 40px;
    font-weight: 700;
    border: 1px solid #d3e4cd;
    border-radius: 15%;
  }
}
.sort_nav {
  height: 80px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;

  .main {
    display: flex;
    align-items: center;
    .nav_item {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
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
.color {
  color: #d3e4cd;
}
</style>
