<template>
  <Container>
    <section class="pregnancy">
      <TitleApp titleText="Before, during and after pregnancy" size="h2" />
      <div class="pregnancy__about">
        <TitleApp
          titleText="The app is divided into three different stages to help you choose appropriate exercises. Each exercise is carefully selected to ensure safe and appropriate adjustments to follow the pregnancy’s progress."
          size="subtitle"
          line="true"
        />
      </div>
      <div class="pregnancy__context">
        <div class="pregnancy__card">
          <div class="pregnancy__card--text">
            <TitleApp
              titleText="Before pregnancy"
              position="start"
              size="h3"
              line="true"
              class="titlebig"
            />
            <p class="pregnancy__card--text-first">
              Start preparing for pregnancy with safe exercises that build up a
              strong body.
            </p>
            <TitleApp
              titleText="Trimesters"
              position="start"
              size="subtitle"
              :style="{
                fontSize: '32px',
                fontWeight: 500,
                marginBottom: '5px',
              }"
            />
            <p>
              The pregnancy is divided into first trimester, second trimester
              part 1 and 2, and third trimester part 1 and 2 to provide
              exercises that are safe for each stage of the pregnancy. Each
              exercise comes with a video and a description so you can safely
              perform each exercise. Simple put in your due date and you will be
              taken to the proper stage.
            </p>
          </div>
          <img src="/image/pregnancy/before.png" alt="pregnancy" />
        </div>
        <div class="pregnancy__card">
          <div class="pregnancy__card--text">
            <TitleApp
              titleText="During pregnancy"
              position="start"
              size="h3"
              line="true"
            />
            <p
              class="pregnancy__card--text-first"
              :style="{
                width: '498px',
              }"
            >
              Working out during pregnancy has many benefits for both the mom
              and the baby. It can reduce back pain, help prevent gestational
              diabetes, promote good posture, strength and endurance, and also
              improve the ability to cope with labor.
            </p>
          </div>
          <img src="/image/pregnancy/during.png" alt="during" />
        </div>
      </div>
      <img
        class="background-img"
        src="/image/pregnancy/healthy.png"
        alt="healthy"
      />
    </section>
  </Container>
</template>

<script>
import TitleApp from "../../components/Shared/TitleApp.vue";
import Container from "../../components/Shared/Container.vue";
export default {
  name: "PregnancyBlock",
  components: {
    TitleApp,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.pregnancy {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 160px;
  height: auto;
  &__about {
    height: 117px;
    margin-top: 24px;
    margin-bottom: 60px;
    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
  }
  &__context {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__card {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 68px;
    justify-content: space-between;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
    &:last-child {
      margin-bottom: 0;
    }
    > img {
      width: 542px;
    }

    > p {
      padding-top: 24px;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
    }
    &--text {
      width: 604px;
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      &-first {
        margin-top: 24px;
        margin-bottom: 18px;
        max-width: 556px;
      }
    }
  }
}
.background-img {
  position: absolute;
  bottom: 502px;
  right: 0;
  z-index: -1;
}
</style>
