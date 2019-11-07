<template>
  <BaseLayout>
    <Hero></Hero>
    <About></About>
    <PostList listTItle="Latests Posts"></PostList>
  </BaseLayout>
</template>



<script>
import PostList from "../components/posts/PostList";
import About from "../components/About";
import Hero from "../components/Hero";
export default {
  components: { PostList, About, Hero },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
