<template>
  <div>
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js' 
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: true
    }
  },
  methods: {
    swiperImageLoad() {
      if(this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = false
      }
    }
  },
}
</script>