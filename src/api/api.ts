import { request } from '@/utils/axios'

// 获取轮播图列表接口
export const GetCarousel = async (params: object) => {
  return request('carousel', params, 'GET')
}
// 获取分列表接口
export const GetSort = async (params: object) => {
  return request('sort/getsort', params, 'GET')
}
// 获取商品列表接口
export const GetGoods = async () => {
  return request('goods', { pageNum: 1, pageSize: 12 }, 'GET')
}
// 获取分类详细接口
export const GetSortdate = async (params: object) => {
  return request('sort/getsortdata', params, 'GET')
}
// 登录接口
export const Login = async (params: object) => {
  return request('user/login', params, 'POST')
}
// 注册接口
export const Register = async (params: object) => {
  return request('user/register', params, 'POST')
}
// 获取用户信息接口
export const getUserInfo = async (params: object) => {
  return request('user/userinfo', params, 'GET')
}
// 获取订单列表
export const getOrderist = async (params: object) => {
  return request('order/user', params, 'GET')
}
