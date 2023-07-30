<template>
  <Comtainer>
    <section class="senddata">
      <div class="senddata__contecst">
        <TitleApp
          color="rgba(255, 255, 255, 1)"
          titleText="Send your data"
          size="h2"
        />
        <a href="/form">
        <ButtonApp text="Go to form" />
        </a>
      </div>
    </section>
  </Comtainer>
</template>

<script>
import Comtainer from "../../components/Shared/Container.vue";
import TitleApp from "../../components/Shared/TitleApp.vue";
import ButtonApp from "../../components/Button/Button.vue";
export default {
  name: "SendData",
  components: {
    Comtainer,
    TitleApp,
    ButtonApp,
  },
};
</script>

<style lang="scss" scoped>
.senddata {
  height: 262px;
  background-image: url("../../../public/image/Send/Subtract.png");
  background-size: cover;
  margin-top: 44px;
  margin-bottom: 80px;
  position: relative;

  &__contecst {
    display: flex;
    padding: 105px 106px;
    justify-content: space-between;
  }
}
</style>
