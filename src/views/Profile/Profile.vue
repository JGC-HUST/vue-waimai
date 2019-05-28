<template>
  <div>
    <HeaderTop title="我的"/>
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  components: {
    HeaderTop
  }
};
</script>

<style lang="stylus" scoped></style>

