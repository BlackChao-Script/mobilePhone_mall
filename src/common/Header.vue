<script setup lang='ts'>
import type { Component } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import {
  Cart,
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'
import Drawer from './Drawer.vue'

const router = useRouter()
const message = useMessage()

const user = ref<Array<any>>([])
const drawerRef = ref<any>(null)

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
const UserInfoOptions = ref<Array<any>>([
  {
    label: '个人信息',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '退出登录',
    key: 'next',
    icon: renderIcon(LogoutIcon)

  }
])

const handleSelect = (key: string | number) => {
  if (key == 'profile') {
    drawerRef.value.activeDrawer = true
  }
  if (key == 'next') {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('name')
    user.value = []
    router.push('/login')
  }
}

const toCart = () => {
  if (window.sessionStorage.getItem('token') != null) {
    router.push('/cart')
  } else {
    message.info('请先登录')
  }
}

onActivated(() => {
  if (window.sessionStorage.getItem('token') != null) {
    user.value.push(window.sessionStorage.getItem('token'), window.sessionStorage.getItem('name'))
  }
})
onMounted(() => {
  if (window.sessionStorage.getItem('token') != null) {
    user.value.push(window.sessionStorage.getItem('token'), window.sessionStorage.getItem('name'))
  }
})



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
        <div class="right_user" v-if="!user[0]">
          <div @click="() => { router.push('/login') }">登录</div>
          <n-divider vertical />
          <div @click="() => { router.push('/register') }">注册</div>
        </div>
        <div class="right_userinfo" v-else>
          <n-dropdown :options="UserInfoOptions" @select="handleSelect">
            <n-button color="#d3e4cd">{{ user[1] }}</n-button>
          </n-dropdown>
        </div>
        <div class="right_cart">
          <div class="cart_icon">
            <n-icon size="25">
              <Cart />
            </n-icon>
          </div>
          <div class="cart_text" @click="toCart">购物车( 0 )</div>
        </div>
      </div>
    </div>
  </div>
  <Drawer ref="drawerRef" />
</template>

<style scoped lang="less">
.header {
  height: 40px;
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
        cursor: pointer;
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
          cursor: pointer;
        }
      }
    }
  }
}
</style>
