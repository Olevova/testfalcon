<template>
  <ContainerApp>
    <section class="posts">
      <TitleApp :titleText="'Our blog posts'" :size="'h2'" :line="true" />
      <div class="posts__block">
        <div class="post__column">
          <BlogPost
            :description="items[0].description"
            :date="items[0].date"
            :imgSrc="items[0].imgUrl"
            :author="items[0].author"
            :big="true"
          />
        </div>
        <div class="post__column">
          <div class="post__row">
            <BlogPost
              v-for="(item, index) in filteredItems"
              :key="index"
              :description="item.description"
              :date="item.date"
              :imgSrc="item.imgUrl"
              :author="item.author"
              :big="false"
            />
          </div>
        </div>
      </div>
      <div class="post__link">
        <a href="#" class="post__link--context">
          Like what you see? View more
          <img src="../../../public/image/posts/button_right.svg" alt="arrow" />
        </a>
      </div>
    </section>
  </ContainerApp>
</template>

<script>
import BlogPost from "./BlogPost.vue";
import TitleApp from "../Shared/TitleApp.vue";
import ContainerApp from "../Shared/Container.vue";

export default {
  name: "BlogPostsSection",
  components: {
    BlogPost,
    TitleApp,
    ContainerApp,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredItems() {
      return this.items.slice(1, 5);
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  margin-bottom: 80px;
  max-width: 1240px;
  &__block {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 16px;
    margin-top: 60px;
    margin-bottom: 36px;
  }
}

.post__column {
  display: flex;
  flex-direction: column;
}

.post__row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  grid-row-gap: 32px;
}
.post__link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
&--context{
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    padding-left: 9px;
  }
}

}
</style>
