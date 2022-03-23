<script setup lang='ts'>
import { ChevronForward } from '@vicons/ionicons5'
import { GetSort } from '@/api/api'


const sortData = ref<Array<any>>([])

const GetsortData = async () => {
  const res = await GetSort({})
  sortData.value = res.result
}

onMounted(() => {
  GetsortData()
})

</script>

<template>
  <div class="sort">
    <div class="box_item" v-for="item in sortData" :key="item.id">
      <div class="item_text">{{ item.sort_name }}</div>
      <div class="item_icon">
        <n-icon size="20">
          <ChevronForward />
        </n-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.sort {
  width: 20%;
  background-color: #d3e4cd;
  .box_item {
    display: flex;
    padding: 20px;
    margin: 10px;
    color: #fff;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      color: #333;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
