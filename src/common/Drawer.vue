<script setup lang='ts'>
import {
  getUserInfo,
  getAddress,
  getOrderist,
  addAddress,
  remAddress,
  updateOrder
} from '@/api/api'
import { FormInst, FormRules, FormItemRule, useMessage } from 'naive-ui'

const message = useMessage()

const activeDrawer = ref<Boolean | any>(false)
const showAddAddress = ref<Boolean | any>(false)
const userInfoData = ref<any>([])
const addressData = ref<Array<any>>([])
const orderData = ref<Array<any>>([])
const AddressformRef = ref<FormInst | null>(null)
let addressForm = reactive<any>({
  consignee: '',
  phone: '',
  address: ''
})
const addressFormRules = reactive<FormRules>({
  consignee: [
    {
      required: true,
      message: '请输入收件人名称',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      validator(rule: FormItemRule, value: string): any {
        const myreg = /^1[3-9]\d{9}$/
        if (!value) {
          return new Error('请输入电话号码')
        } else if (!myreg.test(value)) {
          return new Error('请输入正确的电话号码')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  address: [
    {
      required: true,
      message: '请输入收件地址',
      trigger: 'blur'
    }
  ]
})

const getData = async (type: string) => {
  if (window.sessionStorage.getItem('token') != null) {
    switch (type) {
      case 'userInfo':
        const userInfoRes = await getUserInfo({})
        userInfoRes.result.password = '******'
        userInfoData.value = userInfoRes.result
        return
      case 'address':
        const addressDataRes = await getAddress({})
        addressData.value = addressDataRes.result
        return
      case 'order':
        const orderRes = await getOrderist({})
        orderRes.result.list.forEach((i: any) => {
          i.createdAT = i.createdAT.split('T')[0]
        })
        orderData.value = orderRes.result.list
        return
    }
  }
}
const ClickaddAddress = () => {
  showAddAddress.value = true
}
const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  AddressformRef.value?.validate(async (error) => {
    if (error) return
    await addAddress(addressForm)
    showAddAddress.value = false
    message.success('添加成功')
    getData('address')
  })
}
const closAddressDrawer = () => {
  for (const i in addressForm) {
    addressForm[i] = ''
  }
}
const remAddressItem = async (id: number) => {
  await remAddress(id, {})
  message.success('删除成功')
  getData('address')
}
const ClickUpdateOrder = async (id: number) => {
  const state: number = 4
  await updateOrder(id, { state })
  getData('order')
}

onActivated(() => {
  getData('userInfo')
  getData('address')
  getData('order')
})

defineExpose({
  activeDrawer
})

</script>

<template>
  <n-drawer v-model:show="activeDrawer" :width="500">
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
        <n-tab-pane name="我的地址" tab="我的地址">
          <div class="address_button" @click="ClickaddAddress">添加地址</div>
          <n-card v-for="item in addressData" :key="item.id" :title="item.address">
            <span style="margin-right: 20px; font-size: 20px;">{{ item.consignee }}</span>
            <span>{{ item.phone }}</span>
            <template #action>
              <n-button color="red" @click="remAddressItem(item.id)">删除</n-button>
            </template>
          </n-card>
        </n-tab-pane>
        <n-tab-pane name="我的订单" tab="我的订单">
          <n-card
            v-if="orderData.length != 0"
            style="cursor: pointer;"
            v-for="item in orderData"
            :key="item.id"
            :title="item.order_number"
          >
            <div class="order_name">{{ item.goods_info }}</div>
            <div class="order_time">
              <span>下单时间：</span>
              <span>{{ item.createdAT }}</span>
            </div>
            <div style="margin-top: 10px;">
              <n-tag type="error" v-if="item.state == 0">未支付</n-tag>
              <n-tag type="warning" v-else-if="item.state == 1">已支付</n-tag>
              <n-tag type="success" v-else-if="item.state == 2">已发货</n-tag>
              <n-tag type="info" v-else-if="item.state == 3">已签收</n-tag>
              <n-tag v-else>已取消</n-tag>
            </div>
            <div class="order_price">
              <span>总额：</span>
              <span>{{ item.total }}</span>
            </div>
            <template #action>
              <n-button color="red" @click="ClickUpdateOrder(item.id)">取消订单</n-button>
            </template>
          </n-card>
          <n-empty v-else description="你什么也找不到"></n-empty>
        </n-tab-pane>
      </n-tabs>
    </n-drawer-content>
    <n-drawer v-model:show="showAddAddress" :width="300" @update:show="closAddressDrawer">
      <n-drawer-content title="添加地址">
        <n-form
          ref="AddressformRef"
          :label-width="80"
          :model="addressForm"
          :rules="addressFormRules"
        >
          <n-form-item label="收件人名称" path="consignee">
            <n-input v-model:value="addressForm.consignee" placeholder="输入收件人名称" />
          </n-form-item>
          <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="addressForm.phone" placeholder="输入电话号码" />
          </n-form-item>
          <n-form-item label="收件地址" path="address">
            <n-input v-model:value="addressForm.address" placeholder="输入收件地址" />
          </n-form-item>
          <n-form-item>
            <n-button attr-type="button" @click="handleValidateClick">完成添加</n-button>
          </n-form-item>
        </n-form>
      </n-drawer-content>
    </n-drawer>
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
.address_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 10%;
  color: #fff;
  cursor: pointer;
  background-color: #d3e4cd;
}
.order_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  width: 150px;
}
.order_time {
  margin-top: 10px;
  font-size: 13px;
}
.order_price {
  margin-top: 10px;
}
</style>
