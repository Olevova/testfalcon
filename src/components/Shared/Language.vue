<template>
  <div class="languge" @click="toggle">
    <div class="languge__select">
      <button class="languge__btn">{{ selected }}</button>
      <img src="../../../public/image/languges/arrow-down.svg" alt="arrow" />
    </div>
    <ul class="languge__container" v-show="showLanguges">
      <li
        v-for="languge in languges"
        :key="languge.lng"
        @click="selectOption(languge)"
      >
        <img :src="languge.img" :alt="languge.lng" />
        {{ languge.lng }}
      </li>
    </ul>
  </div>
</template>

<script>
import languges from "../../data/languges.js";
export default {
  name: "LangugePanel",
  data() {
    return { languges, selected: "Eng", showLanguges: false };
  },
  methods: {
    toggle() {
      this.showLanguges = !this.showLanguges;
    },
    selectOption(languge) {
      this.selected = languge.short;
      this.showLanguges = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.languge {
  width: 61px;
  height: 28px;
  background-color: inherit;
  margin-left: 38px;
  cursor: pointer;
  &__select {
    display: flex;
  }
  &__btn {
    background-color: inherit;
    color: rgba(35, 21, 62, 1);
    width: 100%;
    height: 100%;
    border: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  &__container {
    width: 145px;
    height: 70px;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > li {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      color: rgba(35, 21, 62, 1);

      > img {
        margin-right: 7px;
      }
    }
  }
}
</style>
