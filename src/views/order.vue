<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { getCartData, getAddress } from '@/api/api'
import Nav from '@/common/Nav.vue'
import Steps from '@/components/order/Steps.vue'
import Footer from '@/common/Footer.vue'

const router = useRouter()

const cartData = ref<Array<any>>([])
const addressData = ref<Array<any>>([])
const options = ref<Array<any>>([])
const selectedValue = ref<string>('')

const getCart = async () => {
  const res = await getCartData({})
  cartData.value = res.result.list
}
const getAddressData = async () => {
  const res = await getAddress({})
  addressData.value = res.result
  options.value = addressData.value.map(item => ({
    label: item.address,
    value: item.id
  }))
}
const selected = () => {
  console.log(selectedValue.value)
}

const cartPrice = computed(() => {
  let totalprice: number = 0
  cartData.value.forEach((i) => {
    if (i.selected) {
      totalprice += i.number * i.goods_info.goods_price
    }
  })
  return totalprice
})


onActivated(() => {
  getCart()
  getAddressData()
})

</script>

<template>
  <div class="order_nav">
    <Nav>
      <template v-slot:input>
        <div class="nav_title">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
      </template>
    </Nav>
  </div>
  <div class="order_box main">
    <div class="box_title">填写并核对订单信息</div>
    <n-divider />
    <div class="box_steps">
      <Steps />
    </div>
    <div class="box_goods">
      <div
        class="goods_item"
        v-for="item in cartData"
        :key="item.id"
        @click="() => { router.push(`/goodsdet/${item.goods_info.id}`) }"
      >
        <div class="item_img">
          <img :src="item.goods_info.goods_img" />
        </div>
        <div class="item_name">{{ item.goods_info.goods_name }}</div>
        <div class="item_price">{{ item.goods_info.goods_price }}元 × {{ item.number }}</div>
      </div>
    </div>
    <n-divider />
    <div class="box_message">
      <div class="box_title">收货信息</div>
      <div class="message">
        <div class="message_address">收货地址：</div>
        <div class="message_text">
          <n-select
            v-model:value="selectedValue"
            :options="options"
            placeholder="选择地址"
            @update:value="selected"
          />
        </div>
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
  min-height: 600px;
  background-color: #f5f5f5;
  .box_title {
    font-size: 20px;
    color: #757575;
    padding: 20px 0 0 20px;
  }
  .box_steps {
    margin-left: 165px;
  }
  .box_goods {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .goods_item {
      cursor: pointer;
      height: 70px;
      width: 50%;
      display: flex;
      align-items: center;
      box-shadow: -1px -1px 5px rgba(211, 228, 205);
      .item_img {
        width: 20%;
        img {
          width: 55%;
        }
      }
      .item_name {
        width: 40%;
      }
      .item_price {
        width: 20%;
      }
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
}
</style>
