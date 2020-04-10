<template>
  <div class="detail-bottom-bar">
    <div class="item">
      <i class="icon service"></i>
      <span>客服</span>
    </div>
    <div class="item">
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>
    <div class="item">
      <i class="icon select"></i>
      <span>收藏</span> 
    </div>
    <div class="cart" @click="addCart">
      <i></i>
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <i></i>
      <span>购买</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  },
}
</script>
<style scoped>
  .detail-bottom-bar {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 58px;
    display: flex;
  }
  .item {
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 8px auto 5px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .service {
    background-position:0 -54px;
  }
  .shop {
    background-position:0 -98px;
  }
  .cart {
    width: 94px;
    background-color: #ffe817;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }
  .buy {
    width: 94px;
    background-color: var(--color-high-text);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
</style>