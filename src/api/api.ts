import { request } from '@/utils/axios'

// 获取轮播图列表接口
export const GetCarousel = async (params: object) => {
  return request('carousel', params, 'GET')
}
//! 分类
// 获取分列表接口
export const GetSort = async (params: object) => {
  return request('sort/getsort', params, 'GET')
}
// 获取分类详细接口
export const GetSortdate = async (params: object) => {
  return request('sort/getsortdata', params, 'GET')
}

//! 商品
// 获取商品列表接口
export const GetGoods = async () => {
  return request('goods', { pageNum: 1, pageSize: 12 }, 'GET')
}
// 获取商品详细数据
export const getGoodsDet = (params: object) => {
  return request('goods/getgoodsDet', params, 'GET')
}

//! 用户
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

//! 购物车
// 获取购物车列表
export const getCartData = (params: object) => {
  return request('cart', params, 'GET')
}
// 添加购物车
export const addCart = (params: object) => {
  return request('cart/addcart', params, 'POST')
}
// 更新购物车
export const updateCart = (id: number, params: object) => {
  return request(`cart/${id}`, params, 'PATCH')
}
// 删除购物车
export const deleteCart = (id: number, params: object) => {
  return request(`cart/${id}`, params, 'DELETE')
}
// 全选购物车
export const selectAllCart = (params: object) => {
  return request('cart/selectAll', params, 'POST')
}
// 取消全选购物车
export const unselectAllCart = (params: object) => {
  return request('cart/unselectAll', params, 'POST')
}

//! 订单
// 获取订单列表
export const getOrderist = async (params: object) => {
  return request('order/user', params, 'GET')
}
// 提交订单
export const SubmitOrder = async (params: object) => {
  return request('order', params, 'POST')
}
//! 地址
// 获取地址列表
export const getAddress = async (params: object) => {
  return request('/address', params, 'GET')
}
// 添加地址
export const addAddress = async (params: object) => {
  return request('/address/addtoaddress', params, 'POST')
}
// 删除地址
export const remAddress = async (id: number, params: object) => {
  return request(`address/${id}`, params, 'DELETE')
}
