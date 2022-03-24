<script setup lang='ts'>

const { goodsData = {} } = defineProps({
  goodsData: Object
})


</script>
<template>
  <div class="goodList">
    <div class="goodList_title">{{ goodsData.title }}</div>
    <div class="goodList_item">
      <n-card class="item_box" :bordered="false" v-for="item in goodsData.list">
        <template #cover>
          <img :src="item.goods_img" />
        </template>
        <div class="box_content">
          <div class="box_name">{{ item.goods_name }}</div>
          <div class="box_price">{{ item.goods_price }}￥</div>
          <div class="box_text">为你推荐</div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.goodList {
  margin-top: 50px;
  .goodList_title {
    font-size: 25px;
    font-weight: 600;
  }
  .goodList_item {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    .item_box {
      margin: 5px 6.1px;
      width: 24%;
      box-shadow: -1px -1px 10px rgba(0, 0, 0, 0.1);
      transition: 0.7s all;
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
        .box_text {
          color: #b0b0b0;
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
