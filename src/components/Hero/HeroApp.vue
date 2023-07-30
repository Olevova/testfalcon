<template>
  <Container>
    <section class="hero">
      <div class="hero__text">
        <TitleAppVue
          :titleText="'Strong for life with us '"
          :size="'h1'"
          :line="true"
          :position="'start'"
        />
        <div class="hero__sub">
          <TitleAppVue
            :titleText="'The best Pre/postnatal fitness app! 100 exercises divided in before, during and after pregnancy. Stay strong and healthy through all stages of pregnancy.'"
            :size="'subtitle'"
            :position="'start'"
          />
        </div>
      </div>
      <div class="hero__store">
        <img src="/image/hero/android.png" alt="android" />
        <img src="/image/hero/apple.png" alt="apple" />
      </div>
      <img
        class="hero__bigimg"
        src="/image/hero/appleimg.png"
        alt="phone"
        width="538"
        height="713"
      />
    </section>
  </Container>
</template>

<script>
import Container from "../../components/Shared/Container.vue";
import TitleAppVue from "../Shared/TitleApp.vue";

export default {
  name: "HeroApp",
  components: { Container, TitleAppVue },
};
</script>

<style lang="scss" scoped>
.hero {
  height: 770px;
  background-image: url("/public/image/hero/herobg.png");
  background-size: cover;
  margin-top: 44px;
  position: relative;
  margin-bottom: 207px;

  &__text {
    display: flex;
    flex-direction: column;
    width: 590px;
    padding-left: 102px;
    padding-top: 107px;
  }
  &__sub {
    margin-top: 37px;
    margin-bottom: 37px;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
  }
  &__store {
    display: flex;
    padding-left: 107px;
    > img {
      margin-right: 40px;
    }
  }
  &__bigimg {
    position: absolute;
    width: 538px;
    height: 713px;
    top: 107px;
    right: 44px;
    
  }
}
</style>
