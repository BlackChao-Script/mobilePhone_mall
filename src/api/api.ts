import { request } from '@/utils/axios'

// 获取轮播图列表接口
export const GetCarousel = async (params: object) => {
  return request('carousel', params, 'GET')
}
// 获取分列表接口
export const GetSort = async (params: object) => {
  return request('sort/getsort', params, 'GET')
}
