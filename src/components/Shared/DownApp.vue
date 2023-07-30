<template>
  <div class="app">
    <ButtonApp @click="toggle" :little="true" />
    <div v-show="showApp" class="app__container">
      <a href="#">App Store</a>
      <a href="#">Google Play</a>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../Button/Button.vue";
export default {
  name: "DownApp",
  components: {
    ButtonApp,
  },
  data() {
    return { showApp: false };
  },
  methods: {
    toggle() {
      this.showApp = !this.showApp;
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 44px;
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 174px;
    height: 70px;
    color: rgba(35, 21, 62, 1);

    font-size: 14px;
    font-weight: 400;
    line-height: 28px;

    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 7px 12px;
    > a {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      height: 28px;
    }
  }
}
</style>
