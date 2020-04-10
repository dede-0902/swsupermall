const actions = {
  addCart(context, payLoad) {
    const itemInfo = context.state.cartList.find(item => item.iid === payLoad.iid)
    if(itemInfo) {
      context.commit('addCount',itemInfo)
    } else {
      payLoad.count = 1
      context.commit('addItem',payLoad)
    }
  }
}

export default actions