<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'


const router = useRouter()
const message = useMessage()

const { recommendData = {} } = defineProps({
  recommendData: Object,
  showNSpin: Boolean
})

const toGoodsDet = (id: number) => {
  if (window.sessionStorage.getItem('token') != null) {
    router.push(`/goodsdet/${id}`)
  } else {
    message.info('请先登录')
  }
}
</script>
<template>
  <div class="main">
    <div class="goodList">
      <div class="goodList_title">{{ recommendData.title }}</div>
      <n-spin v-if="showNSpin" class="centent" size="large" />
      <div class="goodList_item" v-else>
        <n-card
          class="item_box"
          :bordered="false"
          v-for="item in recommendData.list"
          :key="item.id"
          @click="toGoodsDet(item.id)"
        >
          <template #cover>
            <img :src="item.goods_img" />
          </template>
          <div class="box_content">
            <div class="box_name">{{ item.goods_name }}</div>
            <div class="box_price">{{ item.goods_price }}￥</div>
            <div class="box_text">{{ recommendData.dataMessage.name }}</div>
          </div>
          <div class="box_hover" v-if="recommendData.dataMessage.hoverData">
            <p>{{ recommendData.dataMessage.hoverData[0] }}</p>
            <p>{{ recommendData.dataMessage.hoverData[1] }}</p>
          </div>
        </n-card>
      </div>
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
        .box_text {
          color: #b0b0b0;
        }
      }
      .box_hover {
        position: absolute;
        bottom: -65px;
        left: 0;
        right: 0;
        transition: 0.3s all;
        // width: 100%;
        height: 60px;
        background-color: #d3e4cd;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          padding-top: 5px;
          color: #fff;
        }
      }
      &:hover .box_hover {
        bottom: 0;
      }
      &:hover {
        box-shadow: -1px -1px 10px rgba(37, 10, 10, 0.4);
        cursor: pointer;
      }
    }
  }
}
</style>
