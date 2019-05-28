<template>
  <div>
    <!--  header  -->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      <template #left>
        <span>
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>
      <template #right>
        <span>登录</span>
      </template>
    </HeaderTop>

    <!--  nav  -->
    <div class="nav swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/1.jpg" alt="">
              <span>甜品甜饮</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/2.jpg" alt="">
              <span>商超便利</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/3.jpg" alt="">
              <span>美食</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/4.jpg" alt="">
              <span>简餐</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/5.jpg" alt="">
              <span>新店特惠</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/6.jpg" alt="">
              <span>准时达</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/7.jpg" alt="">
              <span>预定早餐</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/8.jpg" alt="">
              <span>土豪推荐</span>
            </div>
          </div>


        </div>
        <div class="swiper-slide">
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/9.jpg" alt="">
              <span>甜品甜饮</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/10.jpg" alt="">
              <span>商超便利</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/11.jpg" alt="">
              <span>美食</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/12.jpg" alt="">
              <span>简餐</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/13.jpg" alt="">
              <span>新店特惠</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/14.jpg" alt="">
              <span>准时达</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/1.jpg" alt="">
              <span>预定早餐</span>
            </div>
          </div>
          <div class="swiper-item-container">
            <div class="swiper-item">
              <img src="./images/nav/2.jpg" alt="">
              <span>土豪推荐</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <ShopList/>

  </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  import ShopList from "../../components/ShopList/ShopList";
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";

  export default {
    components: {
      HeaderTop,
      ShopList
    },
    mounted() {
      let mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  };
</script>

<style lang="stylus" scoped>
  i
    font-size 25px

  span
    font-size 14px

  .swiper-container
    width 100%
    height 200px
    background-color #fff
    display flex

    .swiper-item-container
      display inline-block
      width 25%
      height 45%

    .swiper-item
      width 100%
      height 100%
      display flex
      flex-direction column
      justify-content space-between
      align-items center

      & > img
        width 50px
        height 50px
        margin-top 5px

      & > span
        margin-bottom 20px
        color #666
        font-size 13px
</style>

