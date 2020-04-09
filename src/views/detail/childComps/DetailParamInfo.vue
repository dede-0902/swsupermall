<template>
  <div v-if="Object.keys(paramInfo).length!==0" class="detail-param-info">
    <table v-for="(item, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, index1) in item" :key="index1">
        <td v-for="(td, index2) in tr" :key="index2">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="infos-key">{{item.key}}</td>
        <td class="infos-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object
    }
  }
}
</script>
<style scoped>
  .detail-param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid rgba(0,0,0,0.1);
  }
  .detail-param-info table {
    width: 100%;
    border-collapse: collapse;
  }
  .detail-param-info tr {
    height: 42px;
    line-height: 42px;
  }
  .detail-param-info td {
    border-bottom: 1px solid rgba(100,100,100,0.1);
  }
  .infos-key {
    width: 95px;
  }
  .infos-value {
    color: var(--color-high-text)
  }
</style>