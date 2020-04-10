import {ADD_COUNT, ADD_ITEM, ALL_CHECKED} from './mutations-types'
const mutations = {
  [ADD_COUNT](state, payLoad) {
    payLoad.count += 1
  },
  [ADD_ITEM](state, payLoad) {
    state.cartList.push(payLoad)
  },
  [ALL_CHECKED](state) {
    let isSelectAll = state.cartList.find(item => !item.isChecked)
    if(isSelectAll) {
      state.cartList.forEach(item => {item.isChecked = true}) 
    }else {
      state.cartList.forEach(item => {item.isChecked = false}) 
    }
  }
}
export default mutations