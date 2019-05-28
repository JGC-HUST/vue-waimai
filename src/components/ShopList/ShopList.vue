<template>
  <div class="shop-list">
    <div class="shop-header">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <div class="shop-container">

    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopList"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shop-list
    margin-top 10px
    margin-bottom 50px
    background-color #fff
    .shop-header
      height 20px
      padding 10px 10px 0
      i
        font-size 16px
      span
        font-size 14px
        color: #999
        margin-left 10px
</style>