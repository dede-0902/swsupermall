<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info='detailInfo' />
    
    <ul>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
      <li>111111111</li>
    </ul>
  </div>
</template>
<script>
import {getDetaildata, Goods, Shop} from 'network/detail'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
export default {
  name: 'Detail',
  components: {
    getDetaildata,
    Goods,
    Shop,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
    }
  },
  created() {
    this.getDetaildata()
  },
  methods: {
    getDetaildata() {
      const iid = this.$route.query.iid
      console.log("idididiididiid",iid)
      this.iid = iid
      getDetaildata(iid).then(res => {
        console.log("----------",res.result)
        const data = res.result
        // 获取轮播图片信息
        this.topImages = data.itemInfo.topImages
        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 获取商家信息
        this.shop = new Shop(data.shopInfo)
        // 获取商品信息
        this.detailInfo = data.detailInfo
      })
    }
  },
}
</script>