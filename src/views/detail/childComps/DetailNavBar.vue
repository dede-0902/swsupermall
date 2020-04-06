<template>
    <nav-bar class="detail-nav-bar">
        <img src="~assets/img/common/back.svg" alt="" slot="left" class="left" @click="back">
      <div slot="center" class="center">
        <span v-for="(item,index) in titles" 
          :key="index" class="center-item" 
          :class="{active:index===currentIndex}"
          @click="currentIndex=index">{{item}}
        </span>
      </div>
    </nav-bar>
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
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
  .detail-nav-bar {
    background-color: #fff;
  }
  .left {
    height: 22px;
    margin-top:10px;
  }
  .center {
    display: flex;
    font-size: 13px;
    padding: 0 20px;
  }
  .center-item {
    flex: 1;
  }
  .active {
    color: var(--color-tint)
  }
</style>