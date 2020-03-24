<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper></swiper>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import {getHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log("111111",res.data.recommend.list)
      })
    }
  }
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>