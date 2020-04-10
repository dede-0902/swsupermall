  import {debounce} from './utils'
  export const itemListenerMixin = {
    data() {
      return {
        itemImgListener: null,
        newRefresh: null
      }
    },
    mounted() {
      this.newRefresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener = () => {
        this.newRefresh()
      }
      this.$bus.$on('itemImgLoad',this.itemImgListener)
    }
  }
  export const backTopListener = {
    data() {
      return {
        isShowBackTop: false
      }
    },
    methods: {
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500)
      },
    },
  }