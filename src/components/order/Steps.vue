<script setup lang='ts'>
import { StepsProps } from 'naive-ui'

const props = defineProps({
  current: Number
})

const currentStatus = ref<StepsProps['status']>('process')

</script>

<template>
  <n-steps :current="(props.current as number)" :status="currentStatus">
    <n-step title="购物车" />
    <n-step title="下单" />
    <n-step title="付款" />
    <n-step title="完成" />
  </n-steps>
</template>

<style scoped lang="less">
</style>
