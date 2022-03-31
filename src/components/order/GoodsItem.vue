<script setup lang='ts'>
import { useRouter } from 'vue-router'

const router = useRouter()

const props: any = defineProps({
  cartData: Array
})
</script>

<template>
  <div class="box_goods">
    <div
      class="goods_item"
      v-for="item in props.cartData"
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
</template>

<style scoped lang="less">
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
</style>
