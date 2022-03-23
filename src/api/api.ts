import { request } from '@/utils/axios'

//! 轮播图接口
export const GetCarousel = async (params: object) => {
  return request('carousel', params, 'GET')
}
