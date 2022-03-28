<script setup lang='ts'>
import Nav from '@/common/Nav.vue'
import Footer from '@/common/Footer.vue'

</script>

<template>
  <div class="cart_nav">
    <Nav>
      <template v-slot:input>
        <div class="nav_title">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
      </template>
    </Nav>
  </div>
  <div class="main">
    <div class="cart_box">
      <div class="bxo_empty" v-if="true">
        <n-empty size="huge" description="你什么也找不到"></n-empty>
      </div>
      <div v-else>2</div>
    </div>
    <div class="box_operation">
      <div class="operation_left">
        <div class="left_a">继续购物</div>
        <i class="left_i">|</i>
        <div class="left_b">
          共
          <span style="color: #d3e4cd;">0</span>
          件商品
        </div>
      </div>
      <div class="operation_right">
        <div class="right_price">
          合计(不含运费)：
          <span style="font-size: 20px;">0.00元</span>
        </div>
        <div class="right_button">去结算</div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="less">
.cart_nav {
  box-shadow: -1px -1px 10px rgba(211, 228, 205);
  .nav_title {
    font-size: 14px;
    color: #777;
  }
}
.cart_box {
  background-color: #f5f5f5;
  height: auto;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box_operation {
  margin-top: 50px;
  height: 70px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  font-size: 15px;
  .operation_left {
    display: flex;
    width: 60%;
    height: 100%;
    align-items: center;
    margin-left: 10px;
    .left_a {
      cursor: pointer;
    }
    .left_i {
      margin: 0 10px;
    }
  }
  .operation_right {
    position: relative;
    display: flex;
    width: 40%;
    height: 100%;
    align-items: center;
    .right_price {
      color: #d3e4cd;
      font-weight: 700;
    }
    .right_button {
      cursor: pointer;
      position: absolute;
      right: 0;
      height: 100%;
      width: 150px;
      display: flex;
      background-color: #d3e4cd;
      color: #fff;
      justify-content: center;
      line-height: 70px;
      &:hover {
        background-color: #b3c7ac;
      }
    }
  }
}
</style>
