<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { getGoodsDet, addCart, getCartData } from '@/api/api'
import { goodsDetDataType } from '@/types'
import Header from '@/common/Header.vue'
import Nav from '@/common/Nav.vue'
import Footer from '@/common/Footer.vue'

const route = useRoute()
const store = useStore()

const goodsDetData = ref<goodsDetDataType | any>({})
const goods_info = ref<any>({})
const showNSpin = ref<Boolean>(true)

const getGoodsDetData = async () => {
  const { id } = route.params
  const res = await getGoodsDet({ id })
  goodsDetData.value = res.result
  goods_info.value = goodsDetData.value.goods_info
  showNSpin.value = false
}
const ClickAddCart = async (goods_id: number) => {
  await addCart({ goods_id })
  const res = await getCartData({})
  store.cartNum = res.result.list.length
}

onMounted(() => {
  getGoodsDetData()
})

</script>

<template>
  <n-message-provider>
    <Header />
  </n-message-provider>
  <Nav />
  <div class="goodsdet_title">
    <div class="main">商品详细</div>
  </div>
  <div class="goodsdet_box main">
    <n-spin v-if="showNSpin" class="nSpin" size="large" />
    <template v-else>
      <div class="box_img">
        <img :src="goods_info.goods_img" />
      </div>
      <div class="box_content">
        <div class="content_title">{{ goods_info.goods_name }}</div>
        <div class="content_titlea">{{ goodsDetData.title }}</div>
        <div class="content_price">{{ goods_info.goods_price }} 元</div>
        <div class="content_button">
          <div>立即选购</div>
          <div @click="ClickAddCart(goodsDetData.goods_id)">加入购物车</div>
        </div>
        <div class="content_foot">
          <div class="foot_item">
            <div class="item_name">承诺</div>
            <div class="item_text">{{ goodsDetData.promise }}</div>
          </div>
          <div class="foot_item">
            <div class="item_name">支付</div>
            <div class="item_text">{{ goodsDetData.pay }}</div>
          </div>
          <div class="foot_item">
            <div class="item_name">支持</div>
            <div class="item_text">{{ goodsDetData.rule }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
  <Footer />
</template>

<style scoped lang="less">
.goodsdet_title {
  margin-left: 5px;
  background-color: #f0f0f0;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: -1px -1px 10px rgba(240, 240, 240);
}
.goodsdet_box {
  display: flex;
  height: auto;
  min-height: 500px;
  .nSpin {
    width: 100%;
  }
  .box_img {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 85%;
    }
  }
  .box_content {
    box-shadow: -1px -1px 10px rgba(211, 228, 205);
    padding-left: 20px;
    flex: 1;
    background-color: #f8f8f8;
    .content_title {
      font-size: 20px;
      font-weight: 600;
      margin-top: 30px;
    }
    .content_titlea {
      margin-top: 50px;
      color: #b0b0b0;
      font-size: 14px;
    }
    .content_price {
      margin-top: 150px;
      margin-left: 450px;
      font-size: 20px;
      color: #d3e4cd;
      font-weight: 700;
    }
    .content_button {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 10px;
      margin-top: 50px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 50px;
        margin-left: 30px;
        color: #fff;
        cursor: pointer;
        background-color: #d3e4cd;
        &:hover {
          background-color: #b5ccad;
        }
      }
    }
    .content_foot {
      display: flex;
      flex-direction: column;
      .foot_item {
        display: flex;
        margin: 10px;
        .item_name {
          margin-right: 30px;
          font-weight: 600;
          color: #b0b0b0;
        }
        .item_text {
          font-size: 14px;
          color: #d3e4cd;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
