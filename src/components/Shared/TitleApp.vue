<template>
  <div :class="`title-${position}`">
    <template v-if="titleText">
      <h1 v-if="size === 'h1'" class="title__size" :style="{ color: color }">
        <slot>{{ titleText }}</slot>
      </h1>
      <h2
        v-else-if="size === 'h2'"
        class="title__size"
        :style="{ color: color }"
      >
        <slot>{{ titleText }}</slot>
      </h2>
      <h3
        v-else-if="size === 'h3'"
        class="title__size"
        :style="{ color: color }"
      >
        <slot>{{ titleText }}</slot>
      </h3>
      <h4
        v-else-if="size === 'h4'"
        class="title__size"
        :style="{ color: color }"
      >
        <slot>{{ titleText }}</slot>
      </h4>
      <h4 v-else class="title__size" :style="{ color: color }">
        <slot>{{ titleText }}</slot>
      </h4>
    </template>
    <div v-if="subtitle" class="block-title__subtitle">
      {{ subtitle }}
    </div>
    <div v-if="line" class="title__line"></div>
  </div>
</template>

<script>
export default {
  name: "TitleApp",
  props: {
    titleText: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    size: {
      type: String,
      default: "h1",
    },
    position: {
      type: String,
      default: "center",
    },
    line: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  &__line {
    height: 3px;
    width: 46px;
    background: #ff2d55;
    margin-top: 21px;
  }
}

.title-start {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.title-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
