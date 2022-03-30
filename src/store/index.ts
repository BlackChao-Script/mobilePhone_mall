import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'indexStore',
  state: () => ({
    cartNum: 0,
    cartData: [],
    cartPrice: 0,
  }),
  actions: {
    updateCartData(data: any) {
      this.cartData = data
    },
    updateCartPrice(num: number) {
      this.cartPrice = num
    },
  },
})
