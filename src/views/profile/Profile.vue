<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">的的商城</div>
    </nav-bar>
    <user-info />
    <detail-info :number="number"></detail-info>
    <list-view :data-list="orderList" class="list-view" />
    <list-view :data-list="serviceList" />
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'
import DetailInfo from './childComps/DetailInfo'
import ListView from './childComps/ListView'
export default {
  name: "Profile",
  components: {
    NavBar,

    UserInfo,
    DetailInfo,
    ListView
  },
  data() {
    return {
      number: [0.00, 0, 0],
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  }
}
</script>
<style scoped>
  .profile {
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .list-view {
    border-bottom: 12px solid rgba(0,0,0,0.05)
  }
</style>