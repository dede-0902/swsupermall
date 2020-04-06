<template>
  <div class="detail-shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="sold-number">
          <div class="sell-count">{{shop.sells}}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="all-baby">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'is-better': item.isBetter}"><span>{{(item.isBetter ? '高' : '低')}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object
    }
  }
}
</script>
<style scoped>
.detail-shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  line-height: 45px;
  display: flex;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1)
}
.shop-top .title {
  vertical-align: center;
  margin-left: 10px;
  font-size: 16px;
}
.shop-middle {
  margin-top: 10px;
  display: flex;
  height: 80px;
  align-items: center;
  color: #333;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  height: 43px;
  text-align: center;
  border-right: 1px solid rgba(0,0,0,0.1)
}
.sell-count, .goods-count {
  font-size: 18px;
}
.sell-text, .goods-text {
  font-size: 12px;
  margin-top: 10px;
}
.shop-middle-right {
  margin-left: 30px;
  font-size: 13px;
}
.shop-middle-right td {
  padding: 5px 0;
}
.shop-middle-right table {
  width: 120px;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span{
  background-color: #5ea732;
  width: 13px;
  height: 15px;
  color: #fff;
}
.shop-middle-right .is-better span{
  background-color: #f13e3a;
  color: #fff;
}
.shop-bottom {
  margin-top: 10px;
  text-align: center;
}
.shop-bottom .enter-shop {
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background-color: #f2f5f8;
  text-align: center;
  line-height: 30px;
  display: inline-block;
}
</style>