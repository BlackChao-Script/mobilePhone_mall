<script setup lang='ts'>
import { getUserInfo, getOrderist } from '@/api/api'

const activeDrawer = ref<Boolean | any>(false)
const userInfoData = ref<any>([])
const orderData = ref<Array<any>>([])

const getUserInfoData = async () => {
  if (window.sessionStorage.getItem('token') != null) {
    const res = await getUserInfo({})
    res.result.password = '******'
    userInfoData.value = res.result
    const orderRes = await getOrderist({})
    orderData.value = orderRes.result.list
  }
}

onActivated(() => {
  getUserInfoData()
})

defineExpose({
  activeDrawer
})

</script>

<template>
  <n-drawer v-model:show="activeDrawer" :width="400">
    <n-drawer-content title="个人中心">
      <n-tabs type="line">
        <n-tab-pane name="个人信息" tab="个人信息">
          <div class="tab_userInfo">
            <div>
              <span>用户名</span>
              <span class="userInfo_text">{{ userInfoData.user_name }}</span>
            </div>
            <div>
              <span>密码</span>
              <span class="userInfo_text">{{ userInfoData.password }}</span>
            </div>
          </div>
        </n-tab-pane>
        <n-tab-pane name="我的订单" tab="我的订单">
          <n-card v-for="item in orderData" :key="item.id" :title="item.order_number">卡片内容</n-card>
        </n-tab-pane>
      </n-tabs>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped lang="less">
.tab_userInfo {
  div {
    margin: 10px;
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
    border: 1px solid #d3e4cd;
    border-radius: 6%;
    .userInfo_text {
      float: right;
      margin-right: 60px;
      color: #d3e4cd;
      font-weight: 700;
    }
  }
}
.n-card {
  margin-top: 10px;
}
</style>
