<script setup lang='ts'>
import { Cart } from '@vicons/ionicons5'

</script>

<template>
  <div class="header">
    <div class="header_content main">
      <div class="content_left">
        <div>
          <a href="/index">商城</a>
        </div>
        <n-divider vertical />
        <div>
          <a href="https://github.com/BlackChao-Script/mobilePhone_admin">后台管理系统</a>
        </div>
        <n-divider vertical />
        <div>
          <a href="https://github.com/BlackChao-Script/mobilePhone_mall">GitHub 地址</a>
        </div>
        <n-divider vertical />
        <div>
          <a href="https://github.com/BlackChao-Script/mobilePhone_mall">问题反馈</a>
        </div>
        <n-divider vertical />
        <div>
          <a>我的订单</a>
        </div>
      </div>
      <div class="content_right">
        <div class="right_user">
          <div>登录</div>
          <n-divider vertical />
          <div>注册</div>
        </div>
        <div class="right_cart">
          <div class="cart_icon">
            <n-icon size="25">
              <Cart />
            </n-icon>
          </div>
          <div class="cart_text">购物车()</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  color: #b0b0b0;
  font-size: 14px;
  .header_content {
    height: 40px;
    display: flex;
    align-items: center;
    .content_left {
      flex: 1;
      display: flex;
      align-items: center;
      height: 40px;

      // background-color: red;
      div {
        margin-left: 10px;
      }
    }
    .content_right {
      flex: 0.25;
      display: flex;
      align-items: center;
      height: 40px;
      .right_user {
        display: flex;
        align-items: center;
      }
      .right_cart {
        display: flex;
        align-items: center;
        width: 120px;
        height: 40px;
        margin-left: 50px;

        color: #333333;
        background-color: #d3e4cd;
        .cart_icon {
          margin-left: 10px;
        }
        .cart_text {
          margin-left: 5px;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
