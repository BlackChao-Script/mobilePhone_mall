<script setup lang='ts'>
import { getCartData, getAddress, SubmitOrder } from '@/api/api'
import qrCode from '@/assets/img/qrCode.png'
import Nav from '@/common/Nav.vue'
import Steps from '@/components/order/Steps.vue'
import GoodsItem from '@/components/order/GoodsItem.vue'
import Footer from '@/common/Footer.vue'


const cartData = ref<any>([])
const addressData = ref<Array<any>>([])
const options = ref<Array<any>>([])
const selectedValue = ref<string>('')
const goodsInfo = ref<Array<any>>([])
const current = ref<number>(2)
const disableSumButton = ref<Boolean | any>(false)

const getCart = async () => {
  const res = await getCartData({})
  cartData.value = res.result.list
  for (const i of res.result.list) {
    goodsInfo.value.push(i.goods_info)
  }
}
const getAddressData = async () => {
  const res = await getAddress({})
  addressData.value = res.result
  options.value = addressData.value.map(item => ({
    label: item.address,
    value: item.id
  }))

}
const cartPrice = computed(() => {
  let totalprice: number = 0
  cartData.value.forEach((i: any) => {
    if (i.selected) {
      totalprice += i.number * i.goods_info.goods_price
    }
  })
  return totalprice
})
const sumOrder = async () => {
  type SubmitOrderParamsType = {
    address_id: number | string
    goods_info: string
    total: string
  }
  if (selectedValue.value == '') return
  let strName: string = ''
  goodsInfo.value.forEach((i) => {
    strName += i.goods_name + ','
  })
  strName = strName.slice(0, strName.length - 1)
  const SubmitOrderParams: SubmitOrderParamsType = {
    address_id: selectedValue.value,
    goods_info: strName,
    total: cartPrice.value + ''
  }
  await SubmitOrder(SubmitOrderParams)
  current.value = 3
  disableSumButton.value = true
}

onActivated(() => {
  getCart()
  getAddressData()
})

</script>

<template>
  <div class="order_nav">
    <n-message-provider>
      <Nav>
        <template v-slot:input>
          <div class="nav_title">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
        </template>
      </Nav>
    </n-message-provider>
  </div>
  <div class="order_box main">
    <div class="box_title">填写并核对订单信息</div>
    <n-divider />
    <div class="box_steps">
      <Steps :current="current" />
    </div>
    <GoodsItem :cartData="cartData" />
    <n-divider />
    <div class="box_message">
      <div class="box_title">收货信息</div>
      <div class="message">
        <div class="message_address">收货地址：</div>
        <div class="message_text" v-if="options.length != 0">
          <n-select v-model:value="selectedValue" :options="options" placeholder="选择地址" />
        </div>
        <div v-else style="color:#d3e4cd ; font-weight: 900;">暂无收货地址，请前往个人中心添加</div>
      </div>
    </div>
    <n-divider />
    <div class="box_message">
      <div class="box_title">支付信息</div>
      <div class="message">
        <div class="message_address">收货地址：</div>
        <div class="message_text" style="color: #d3e4cd; font-weight: 900;">在线支付</div>
      </div>
    </div>
    <n-divider />
    <div class="box_price">
      <div class="price_tol">
        <span class="tol_name">商品总价：</span>
        <span style="color:#d3e4cd; font-size: 17px;">{{ cartPrice }} 元</span>
      </div>
      <div class="price_freight">
        <span class="freight_name">运费：</span>
        <span style="color:#d3e4cd; font-size: 17px;">0元</span>
      </div>
      <div class="price_footer">
        <span class="footer_name">应付金额：</span>
        <span style="color:#d3e4cd; font-size: 22px;">{{ cartPrice }} 元</span>
      </div>
    </div>
    <n-divider />
    <div class="sumbutton">
      <n-button :disabled="disableSumButton" color="#d3e4cd" size="large" @click="sumOrder">提交订单</n-button>
    </div>
    <div v-show="disableSumButton">
      <div class="qr_title">微信扫码支付</div>
      <div class="qr_code">
        <img :src="qrCode" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="less">
.order_nav {
  box-shadow: -1px -1px 10px rgba(211, 228, 205);
  .nav_title {
    font-size: 14px;
    color: #777;
  }
}
.order_box {
  height: auto;
  min-height: 700px;
  background-color: #f5f5f5;
  .box_title {
    font-size: 20px;
    color: #757575;
    padding: 20px 0 0 20px;
  }
  .box_steps {
    margin-left: 165px;
  }
}
.box_message {
  .message {
    margin: 20px 0 0 20px;
    display: flex;
    align-items: center;
    .message_address {
      width: 10%;
    }
    .message_text {
      width: 20%;
    }
  }
}
.box_price {
  float: right;
  display: flex;
  flex-direction: column;
  width: 300px;
  .price_tol,
  .price_freight,
  .price_footer {
    display: flex;
    span {
      width: 40%;
      margin-top: 20px;
    }
  }
}
.sumbutton {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.qr_title {
  display: flex;
  justify-content: center;
  margin: 10px;
  color: #757575;
  font-weight: 900;
}
.qr_code {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
