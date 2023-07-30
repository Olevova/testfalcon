<template>
  <HeaderApp />
 <router-view></router-view>
  <FooterApp />
</template>

<script>

import HeaderApp from "./components/Header/Header.vue";
import FooterApp from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp
  },


};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
