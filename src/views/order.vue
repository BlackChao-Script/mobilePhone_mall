<script setup lang='ts'>
import Nav from '@/common/Nav.vue'
import Steps from '@/components/order/Steps.vue'
import Footer from '@/common/Footer.vue'


const goodsInfo = ref<Array<any>>([])

onActivated(() => {

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
      <div class="goods_item" v-for="item in 3">
        <div class="item_img">1</div>
        <div class="item_name"></div>
        <div class="item_price"></div>
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
    margin-left: 150px;
  }
  .box_goods {
    .goods_item {
      height: 50px;
      background-color: pink;
    }
  }
}
</style>
