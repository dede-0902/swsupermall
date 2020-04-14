<template>
  <div class="detail-info">
    <div class="item-block">
      <div><span class="number">{{number[0].toFixed(2)}}</span>元</div>
      <div class="title">我的余额</div>
    </div>
    <div class="item-block">
      <div><span class="number">{{number[1]}}</span>个</div>
      <div class="title">我的优惠</div>
    </div>
    <div class="item-block">
      <div><span class="number">{{number[2]}}</span>分</div>
      <div class="title">我的积分</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailInfo',
  props: {
    number: {
      type: Array
    }
  }
}
</script>
<style scoped>
  .detail-info {
    display: flex;
    border-bottom: 12px solid rgba(0,0,0,0.05);
  }
  .item-block {
    flex: 1;
    padding: 18px;
    background-color: #fff;
    text-align: center;
    font-size: 13px;
    border-right: 1px solid rgba(0,0,0,0.1);
  }
  .item-block:last-of-type {
    border-right: none;
  }
  .item-block .number {
    font-size: 24px;
    color: #ff5f3e;
    font-weight: 700;
  }
  .title {
    margin-top: 6px;
  }
</style>