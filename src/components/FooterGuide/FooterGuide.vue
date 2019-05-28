<template>
  <div class="footer-guider">
    <section :class="{'on': '/msite' === $route.path}" @click="goTo('/msite')">
      <i class="iconfont icon-waimai"></i>
      <span>外卖</span>
    </section>
    <section :class="{'on': '/search' === $route.path}" @click="goTo('/search')">
      <i class="iconfont icon-search"></i>
      <span>搜索</span>
    </section>
    <section :class="{'on': '/order' === $route.path}" @click="goTo('/order')">
      <i class="iconfont icon-dingdan"></i>
      <span>订单</span>
    </section>
    <section :class="{'on': '/profile' === $route.path}" @click="goTo('/profile')">
      <i class="iconfont icon-geren"></i>
      <span>我的</span>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl'
.footer-guider
  top-border-1px(#e4e4e4)
  width 100%
  height 50px
  display flex
  position fixed
  bottom 0
  background-color #fff
section
  margin 5px
  width 25%
  filter grayscale(100%)
  & > *
    display block
    text-align center
    color #409EFF
  & > i
    font-size 22px
    height 20px
    margin 2px 0 4px
  & > span
    font-size 12px
.on
  filter grayscale(0)
</style>

