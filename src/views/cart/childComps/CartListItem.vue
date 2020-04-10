<template>
  <div class="item-cart">
    <div class="check-button"> 
      <check-button @tickClick="tickClick" :isChecked="isChecked" />
    </div>
    <div class="item-img">
      <img :src="cartItem.imgURL" alt="商品图片"> 
    </div>
    <div class="item-detail">
      <div class="item-title">{{cartItem.title}}</div>
      <div class="item-desc">{{cartItem.desc}}</div>
      <div class="item-bottom">
        <div class="item-price">¥{{cartItem.newPrice}}</div>
        <div class="item-count">x{{cartItem.count}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from './CheckButton'
export default {
  name: 'CartListItem',
  props: {
    cartItem: {
      type: Object
    }
  },
  components: {
    CheckButton
  },
  mounted() {
    console.log(this.cartItem)
  },
  methods: {
    tickClick() {
      this.cartItem.isChecked = !this.cartItem.isChecked
    }
  },
  computed: {
    isChecked() {
      return this.cartItem.isChecked
    }
  },
}
</script>
<style scoped>
  .item-cart {
    padding: 5px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .check-button {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    margin: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-detail {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-detail .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .item-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-price {
    float: left;
    color: orange;
  }
  .item-count {
    float: right;
  }
</style>