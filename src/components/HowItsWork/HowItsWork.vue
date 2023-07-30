<template>
  <Container>
    <section class="how-work">
      <TitleApp :size="'h2'" :titleText="'How does it work?'" />
      <div class="how-work__text">
        <TitleApp
          :line="'center'"
          :size="'h2'"
          :subtitle="'Easy, fun & essential training for moms'"
        />
        <div class="how-work__info">
          <div class="how-work__card">
            <div class="how-work__icon">
              <img
                src="/image/howitwork/first.svg"
                alt="first"
                width="24"
                height="24"
              />
            </div>
            <div class="how-work__date">
              <span>Browse exercises</span>
              <p>
                Browse over 100 exercises with a video or picture and a
                description.
              </p>
            </div>
          </div>
          <div class="how-work__card">
            <div class="how-work__icon">
              <img
                src="/image/howitwork/second.svg"
                alt="second"
                width="24"
                height="24"
              />
            </div>
            <div class="how-work__date">
              <span>Create timeline</span>
              <p>
                Take pictures along the way during and after the pregnancy to
                see the transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import TitleApp from "../Shared/TitleApp.vue";
import Container from "../Shared/Container.vue";

export default {
  name: "HowItsWork",
  components: {
    TitleApp,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.how-work {
  height: 380px;
  margin-bottom: 160px;
  &__text {
    margin-top: 24px;

    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
  }
  &__info {
    display: flex;
    margin-top: 60px;
  }
  &__card {
    display: flex;
  }
  &__icon {
    width: 56px;
    height: 56px;
    padding: 16px;
    border-radius: 50%;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 42px;
  }
  &__card:last-child {
    margin-left: 41px;
    width: 596px;
  }
}
</style>
