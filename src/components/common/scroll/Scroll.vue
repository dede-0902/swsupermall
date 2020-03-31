<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
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
      this.scroll.on('pullingUp',() => {
        console.log("上啦加载中")
        this.$emit('pullingUp')
      })
    },
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishPullUp() {
		  this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
  },
}
</script>
<style scoped>
  .content {
    height:calc(100%-98px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>