<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import logo from '@/assets/img/logo.png'

const router = useRouter()
const message = useMessage()

const serchKeyWord = ref<string>('')

const clickSerchGoods = async () => {
  if (window.sessionStorage.getItem('token') != null) {
    router.push(`/serchgoods/${serchKeyWord.value}`)
    serchKeyWord.value = ''
  } else {
    message.info('请先登录')
  }
}
</script>

<template>
  <div class="nav">
    <div class="nav_box">
      <div class="box_img">
        <a @click="() => { router.push('/index') }">
          <n-image height="80" width="130" preview-disabled :src="logo" />
          <slot name="title"></slot>
          <div>mobilePhone商城</div>
        </a>
      </div>
      <div class="box_input">
        <slot name="input">
          <n-button type="primary" ghost @click="clickSerchGoods">搜索</n-button>
          <n-input v-model:value="serchKeyWord" :style="{ width: '40%' }" placeholder="搜索商品" />
        </slot>
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
      a {
        cursor: pointer;
        flex: 1;
        display: flex;
        align-items: center;
        div {
          color: #d3e4cd;
          font-weight: 700;
          font-size: 23px;
        }
      }
    }
    .box_input {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
    }
  }
}
</style>
