<template>
  <div class="cart-bottom">
    <div class="bottom-icon">
      <check-button @tickClick="tickClick" :isChecked="isChecked" />
    </div>
    <div class="span">
      <span class="all-ckecked">全选</span>
      <span class="total-money">合计：¥{{totalMoney}}元</span>
    </div>
    <div class="calcu">
      去计算(1)
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

import CheckButton from './CheckButton'
export default {
  name: "CartBottom",
  components: {
    CheckButton
  },
  data() {
    return {
      isChecked: true,
      isSelectAll: true
    }
  },
  methods: {
    tickClick() {
      let isSelectAll = this.$store.state.cartList.find(item => !item.isChecked)
      if(isSelectAll) {
        this.isChecked = true
      }else{
        this.isChecked = false
      }
      this.$store.commit('allChecked')
    }
  },
  computed: {
    ...mapGetters(['totalMoney']),
  },
  activated() {
  },
}
</script>
<style scoped>
  .cart-bottom {
    background-color: #eee;
    height: 44px;
    position: fixed;
    bottom: 49px;
    left: 0;
    width: 100%;
    display: flex;
    padding-left: 10px;
    /* text-align: center; */
  }
  .bottom-icon {
    float: left;
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
  .span {
    flex: 1;
    line-height: 44px;
  }
  .all-checked {
    font-size: 14px;
  }
  .total-money {
    margin-left: 15px;
    font-size: 16px;
  }
  .calcu {
    width: 100px;
    background-color: #ff4500;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
  }
</style>