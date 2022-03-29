<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { Close } from '@vicons/ionicons5'
import {
  getCartData,
  updateCart,
  deleteCart,
  selectAllCart,
  unselectAllCart
} from '@/api/api'
import Nav from '@/common/Nav.vue'
import Footer from '@/common/Footer.vue'

const router = useRouter()

const cartData = ref<Array<any>>([])
const totalPrice = ref<number>(0)

const getCart = async () => {
  const res = await getCartData({})
  cartData.value = res.result.list
  cartData.value.forEach((i) => {
    totalPrice.value += i.number * i.goods_info.goods_price
  })
}
const delCart = async (id: number) => {
  await deleteCart(id, {})
  getCart()
}

onMounted(() => {
  getCart()
})

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
      <div class="bxo_empty" v-if="cartData.length == 0">
        <n-empty size="huge" description="你什么也找不到"></n-empty>
      </div>
      <div v-else class="cart_list">
        <div class="list_item" v-for="item in cartData" :key="item.id">
          <div class="item_choose">
            <n-checkbox v-model:checked="item.selected"></n-checkbox>
          </div>
          <div class="item_img">
            <img :src="item.goods_info.goods_img" />
          </div>
          <div class="item_name">{{ item.goods_info.goods_name }}</div>
          <div class="item_price">{{ item.goods_info.goods_price }} 元</div>
          <div class="item_num">{{ item.number }}</div>
          <div class="item_rem">
            <n-icon @click="delCart(item.id)" size="25">
              <Close />
            </n-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="box_operation">
      <div class="operation_left">
        <n-button color="#d3e4cd" style="margin-right:20px;">全选</n-button>
        <div class="left_a" @click="() => { router.push('/index') }">继续购物</div>
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
          <span style="font-size: 20px; color: #d3e4cd;">{{ totalPrice }} 元</span>
        </div>
        <div class="right_button" :class="{ color: cartData.length == 0 }">去结算</div>
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
  .bxo_empty {
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }
  .cart_list {
    .list_item {
      box-shadow: -1px -1px 2px rgba(211, 228, 205);
      height: 100px;
      margin-top: 10px;
      padding-top: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      .item_choose {
        width: 10%;
      }
      .item_img {
        width: 10%;
        img {
          width: 80%;
        }
      }
      .item_name {
        width: 20%;
        font-weight: 600;
      }
      .item_price {
        width: 20%;
      }
      .item_num {
        width: 20%;
      }
      .item_rem {
        width: 20%;
        .n-icon {
          &:hover {
            color: #d3e4cd;
            cursor: pointer;
          }
        }
      }
    }
  }
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
      &:hover {
        color: #d3e4cd;
      }
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
.color {
  background-color: #aeadb2 !important;
}
</style>
