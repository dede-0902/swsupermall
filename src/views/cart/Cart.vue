<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <cart-list :cartList="cartList" />
    <cart-bottom />
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

import NavBar from 'components/common/navbar/NavBar'

import CartBottom from './childComps/CartBottom'
import CartList from './childComps/CartList'
export default {
  name: "Cart",
  components: {
    NavBar,

    CartBottom,
    CartList,
  },
  computed: {
    ...mapGetters(['cartListLength', 'cartList'])
  },
}
</script>
<style scoped>
  #cart {
    /* position: relative; */
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>