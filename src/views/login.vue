<script setup lang='ts'>
import Form from '@/common/Form.vue'

const type = ref<string>('登录')

</script>

<template>
  <n-message-provider>
    <Form :type="type" />
  </n-message-provider>
</template>

