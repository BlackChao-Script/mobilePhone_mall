<script setup lang='ts'>
import { GetCarousel } from '@/api/api'

const CarouselData = ref<Array<any>>([])

const getCarouselData = async () => {
  const res = await GetCarousel({})
  CarouselData.value = res.result.list
}

onMounted(() => {
  getCarouselData()
})

</script>

<template>
  <div class="carouse">
    <n-carousel autoplay draggable dot-type="line">
      <img
        v-for="item in CarouselData"
        :key="item.id"
        class="carousel-img"
        :src="item.carousel_src"
      />
    </n-carousel>
  </div>
</template>

<style scoped lang="less">
.carouse {
  width: 80%;
  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
