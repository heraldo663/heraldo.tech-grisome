<template>
  <div class="posts">
    <h2 class="h2">{{listTItle}}</h2>
    <div v-for="post in $static.allWordPressPost.edges" v-bind:key="post.id">
      <PostCard :post="post"></PostCard>
    </div>
  </div>
</template>

<static-query>
query {
  allWordPressPost {
    edges {
      node {
        id,
        title,
        excerpt
      }
    }
  }
}
</static-query>

<script>
import PostCard from "./PostCard";

export default {
  components: { PostCard },
  props: ["listTItle"]
};
</script>

<style lang="scss" scoped>
h2 {
  display: inline-block;
  margin-bottom: 50px;
}
</style>