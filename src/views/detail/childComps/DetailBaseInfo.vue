<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div>{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span :class="(this.goods.discount)?'discount':null">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object
    }
  }
}
</script>
<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-price {
    margin-top: 10px;
  }
  .new-price {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .old-price {
    margin-left: 5px;
    font-size: 13px;
    color: #999;
    text-decoration: line-through;
  }
  .discount {
    background: var(--color-high-text);
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
    padding: 2px 5px;
    margin-left: 5px;
    /* 让元素向上浮动 用相对定位 */
    position: relative;
    top: -8px;
  }
  .info-other {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    font-size: 13px;
    color: #333;
  }
  .info-service img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 3px;
  }
</style>