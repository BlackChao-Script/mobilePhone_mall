<script setup lang='ts'>
import Form from '@/common/Form.vue'

const type = ref<string>('注册')

</script>

<template>
  <n-message-provider>
    <Form :type="type" />
  </n-message-provider>
</template>

<style scoped lang="less">
</style>

