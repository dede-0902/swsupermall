<template>
  <div id="detail">
    <detail-nav-bar @tabItemClick="tabItemClick" ref="detailNavBar" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <div>
        <detail-swiper :topImages="topImages" />
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detail-info="detailInfo" @itemImgLoad="itemImgLoad" />
        <detail-param-info :param-info="paramInfo" ref="paramInfo" />
        <detail-comment-info :comment-info="commentInfo" ref="commentInfo" />
        <detail-recommend-info :recommendList="recommendList" ref="recommendList" />
      </div>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backClick" />
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>
<script>
import {getDetaildata, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import {debounce} from 'common/utils'
import {itemListenerMixin, backTopListener} from 'common/mixin'
export default {
  name: 'Detail',
  components: {
    getDetaildata,
    Goods,
    Shop,
    GoodsParam,

    Scroll,
    BackTop,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  mixins:[itemListenerMixin, backTopListener],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      topPosition: []
    }
  },
  created() {
    this._getDetaildata()
    this._getRecommend()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('itemImageLoad',() => {
      refresh()
    })
  },
  methods: {
    _getDetaildata() {
      const iid = this.$route.query.iid
      this.iid = iid
      getDetaildata(iid).then(res => {
        const data = res.result
        // 获取轮播图片信息
        this.topImages = data.itemInfo.topImages
        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 获取商家信息
        this.shop = new Shop(data.shopInfo)
        // 获取商品信息
        this.detailInfo = data.detailInfo
        // 保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if (error) return
        this.recommendList = res.data.list
      })
    },
    contentScroll(position) {
      for(let i in this.topPosition){
        if((-position.y) > this.topPosition[i] && (-position.y) < this.topPosition[parseInt(i)+1]) {
          this.$refs.detailNavBar.currentIndex = parseInt(i)
        }
      }
      if(-position.y > 1000) {
        this.isShowBackTop = true
      }else{
        this.isShowBackTop = false
      }
    },
    tabItemClick(index) {
        this.$refs.scroll.scrollTo(0,-this.topPosition[index],500)
    },
    itemImgLoad() {
      this.newRefresh()
      this.getOffsetTops()
    },
    getOffsetTops() {
      this.topPosition = []
      this.topPosition.push(0)
      this.topPosition.push(this.$refs.paramInfo.$el.offsetTop)
      this.topPosition.push(this.$refs.commentInfo.$el.offsetTop)
      this.topPosition.push(this.$refs.recommendList.$el.offsetTop)
      this.topPosition.push(Number.MAX_VALUE)
    },
    addCart() {
      const obj = {}
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc
      obj.newPrice = this.goods.nowPrice
      obj.isChecked = true
      this.$store.dispatch('addCart', obj)
    }
  },
}
</script>
<style scoped>
  #detail {
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 1;
  }
  .content {
    background-color: #fff;
    position: absolute;
    top: 44px;
    bottom: 58px;
  }
</style>