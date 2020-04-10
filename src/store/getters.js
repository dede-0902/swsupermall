const getters = {
  cartListLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  totalMoney(state) {
    return state.cartList.filter(item => {return item.isChecked})
      .reduce((preValue, item) => {
        return preValue + item.count * item.newPrice
      },0).toFixed(2)
  }
}
export default getters