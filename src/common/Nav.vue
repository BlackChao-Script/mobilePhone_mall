<script setup lang='ts'>
import logo from '@/assets/img/logo.png'

</script>

<template>
  <div class="nav">
    <div class="nav_box">
      <div class="box_img">
        <n-image height="80" width="130" :src="logo" />
      </div>
      <div class="box_input">
        <n-button type="primary" ghost>搜索</n-button>
        <n-input :style="{ width: '50%' }" placeholder="搜索商品" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav {
  width: 100%;
  height: 80px;
  .nav_box {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .box_img {
      flex: 1;
    }
    .box_input {
      flex: 1;
      display: flex;
      margin-right: 100px;
      flex-direction: row-reverse;
    }
  }
}
</style>
