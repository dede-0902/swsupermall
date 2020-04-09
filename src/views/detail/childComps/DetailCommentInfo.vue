<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-detail-other">
        <span>{{commentInfo.created | commentDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-img">
      <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  components: {
    formatDate
  },
  props: {
    commentInfo: {
      type: Object
    }
  },
  filters: {
    commentDate(value) {
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>
<style scoped>
  .detail-comment-info {
    padding: 5px 12px;
    border-bottom: 5px solid rgba(0,0,0,0.1);
  }
  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .header-title {
    float: left;
    font-size: 15px;
  }
  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .info-user {
    padding: 10px 0 5px 0;
  }
  .info-user img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .info-user span {
    margin-left: 10px;
    font-size: 15px;
    position: relative;
    top: -15px;
    color: #333;
  }
  .info-detail {
    padding: 0 5px 10px;
  }
  .info-detail p {
    font-size: 14px;
    color: #777;
  }
  .info-detail-other {
    margin-top: 10px;
    font-size: 12px;
    color: #999;
  }
  .info-detail-other span {
    margin-right: 8px;
  }
  .info-img {
    width: 100%;
    padding-bottom: 15px;
  }
  .info-img img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>