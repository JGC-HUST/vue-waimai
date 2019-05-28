<template>
  <div class="header-top">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="title ellipsis">{{title}}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    mounted() {
    }
  };
</script>

<style lang="stylus" scoped>
  .header-top
    height 45px
    display flex
    align-items center
    justify-content space-between
    background-color #409eff
    color #fff
    font-size 20px

    .title
      width 50%
      text-align center
      height 30px
      line-height 30px

    .left, .right
      display inline-block
      width 10%

    .left
      margin-left 10px

    .right
      margin-right 10px
      height 20px
      line-height 20px
</style>

