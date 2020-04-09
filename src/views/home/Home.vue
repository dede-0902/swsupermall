<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar> 
    <tab-control :titles="['流行','新款','精选']" 
      @tabClick="tabClick" ref="tabControl1" 
      class="fixed" v-show="isTabFixed" 
    />
    <scroll ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore" class="content">
      <div>
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
        <goods-list :goods="showGoods" />
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backtop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata,getHomeGoods} from 'network/home'

  import {debounce} from 'common/utils'
  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,

      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list:[]},
          'new': {page: 0,list:[]},
          'sell': {page: 0,list:[]},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      // 网络请求相关方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+1
          this.$refs.scroll.finishPullUp()
        })
        
      },
      // 事件监听相关方法
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'     
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 600
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.$refs.scroll.refresh()
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list 
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('itemImageLoad',() => {
        refresh()
      })
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
  }
</script>
<style scoped>
  #home {
    height:100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 9;
  }
  
</style>