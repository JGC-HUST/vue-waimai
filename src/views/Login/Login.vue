<template>
  <div class="login-container">
    <div class="loginInner">
      <div class="login-header">
        <h2>硅谷外卖</h2>
      </div>
      <div class="login-content"></div>
      <i class="iconfont icon-jiantou2" @click="$router.back()"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
  a {
    text-decoration: none
  }
  .login-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .loginInner {
    width: 80%;
    margin: auto;
  }
  .login-header {
    padding-top: 60px;
    height: 60px
  }
  .login-header h2 {
    height: 40px;
    width: 300px;
    font-size: 40px;
    font-weight: bold;
    color: #409EFF;
    text-align: center;
  }
  i {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 20px;
  }
</style>