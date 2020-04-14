<template>
  <div class="goods" v-if="goods!==undefined">
    <slot name="other">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
    </slot>
  </div>
</template> 
<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',  
  props: { 
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
}
</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>