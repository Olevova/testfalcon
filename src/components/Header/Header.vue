<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <span class="header__logo">
          <a href="/" class="logo">LOGO</a>
        </span>

        <nav class="header__nav">
          <ul class="header__nav-ul">
            <li v-for="item in menu" :key="item">
              <a :href="`/${item}`">{{ item }}</a>
            </li>
          </ul>
          <DownApp />
          <LangugePanel />
        </nav>
      </div>
    </Container>
  </header>
</template>

<script>
import DownApp from "../Shared/DownApp.vue";
import LangugePanel from "../Shared/Language.vue";
import menu from "../../data/menu.js";
import Container from "../../components/Shared/Container.vue";
export default {
  name: "HeaderApp",
  components: {
    DownApp,
    LangugePanel,
    Container,
  },
  data() {
    return { menu };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: inherit;
  padding: 16px 0;
  z-index: 100;
  height: 100px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    display: flex;
    align-items: center;
  }
  &__nav-ul {
    display: flex;
    margin-right: 33px;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #23153e;

    > li {
      margin-right: 24px;
      position: relative;
      padding-left: 10px;
      &::before {
        content: "";
        position: absolute;
        left: 10px;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #ff2d55;
        transition: width 300ms ease;
      }

      &:hover::before {
        width: 85%;
      }
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  &__logo {
    color: #6750a4;
    font-size: 40px;
    font-weight: 700;
    line-height: 49px;
  }
}
</style>
