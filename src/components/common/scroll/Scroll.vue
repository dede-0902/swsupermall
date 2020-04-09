<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    setTimeout(this.__initScroll, 500)
    
  },
  methods: {
    __initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: true
      })
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })
      if(this.pullUpLoad){ 
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      }
    },
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishPullUp() {
		  this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    getScrollY() {
      this.scroll ? this.scroll.getScrollY : 0
    }
  },
}
</script>
<style scoped>
</style>