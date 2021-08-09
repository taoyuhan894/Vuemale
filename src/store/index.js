import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state,newProduct) {
      newProduct.count += 1
    },
    addCar(state,product) {
      product.isChecked = true
      state.cartList.push(product)
    }
  },
  actions: {
    addCart(context, product) {
      return new Promise((resolve, reject) => {
        let newProduct = context.state.cartList.find(item => item.iid == product.iid)
        if(newProduct) {
          context.commit('addCounter',newProduct)
          resolve("商品数量+1")
        } else {
          product.count = 1
          context.commit('addCar',product)
          resolve("商品已添加至购物车")
        }
      })
    }
  },
  getters: {
    carLength(state) {
      return state.cartList.length
    },
    carList(state) {
      return state.cartList
    }
  },
  modules: {
  }
})
