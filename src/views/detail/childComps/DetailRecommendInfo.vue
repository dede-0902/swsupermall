<template>
  <div class="recommend-info">
    <div class="recommend-header">热门推荐</div>
    <goods-list :goods="recommendList" />
  </div>
</template>
<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'DetailRecommendInfo',
  components: {
    GoodsList
  },
  props: {
    recommendList: {
      type: Array
    }
  }
}
</script>
<style scoped>
  .recommend-info {
    padding: 5px;
    background-color: #fff;
  }
  .recommend-header {
    height: 40px;
    margin-left: 9px;
    display: flex;
    align-items: center;

  }
</style>