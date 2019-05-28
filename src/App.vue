<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  mounted() {
    this.$store.dispatch('getFoodTypes');
  },
  components: {
    FooterGuide
  }
};
</script>


<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background-color #f5f5f5
  position relative
</style>
