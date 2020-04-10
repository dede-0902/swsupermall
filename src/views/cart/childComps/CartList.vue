<template>
  <div class="cart-list">
    <scroll ref="scroll" class="content">
      <div>
        <div v-for="(item,index) in cartList" :key="index">
          <cart-list-item :cartItem="item" />
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>
<style scoped>
  .cart-list {
    height: 100%;
  }
  .content {
    height: calc(100% - 44px - 49px - 44px);
  }
</style>