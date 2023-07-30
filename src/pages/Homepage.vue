<template>
    <HeroApp />
   
    <HowItsWork />
    <PregnancyBlock />
    <BlogPostsSection :items="posts" />
    <SendData />

</template>

<script>
import BlogPostsSection from "../components/BlogPosts/BlogPostsSection.vue";
import posts from "../data/postsData.js";
import HeroApp from "../components/Hero/HeroApp.vue";
import HowItsWork from "../components/HowItsWork/HowItsWork.vue";
import SendData from "../components/Send/SendData.vue";
import PregnancyBlock from "../components/PregnancyBlock/PregnancyBlock.vue";

export default {
  name: "App",
  components: {
    BlogPostsSection,
    HeroApp,
    HowItsWork,
    SendData,
    PregnancyBlock,
  },
  data() {
    return { posts };
  },
};
</script>

<style lang="scss" scoped></style>
