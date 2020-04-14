  import {debounce} from './utils'
  export const itemListenerMixin = {
    data() {
      return {
        itemImgListener: null,
        newRefresh: null
      }
    },
    mounted() {
      this.newRefresh = debounce(this.$refs.scroll.refresh,500)
      this.itemImgListener = () => {
        this.newRefresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImgListener)
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

  export const tabControlMixin = {
    data: function () {
      return {
        currentType: 'pop'
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      }
    }
  }