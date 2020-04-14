<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message='默认文字', duration=2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      },duration)
    }
  },
}
</script>
<style scoped>
 .toast {
   position: fixed;
   top: 40%;
   left: 50%;
   z-index: 1000;
   color: #fff;
   background: rgba(0, 0, 0, .7);
   padding: 10px;
   transform: translate(-50%,-50%);
   border-radius: 5px;

 }
</style>