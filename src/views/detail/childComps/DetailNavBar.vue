<template>
  <div>
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item,index) in titles" :key="index">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐']
    }
  },
}
</script>
<style scoped>
  .left {
    width: 60px;
    height: 44px;
    padding-top: 6px;
  }
  .center {
    background-color: red;
    width: calc(100% - 120);
  }
</style>