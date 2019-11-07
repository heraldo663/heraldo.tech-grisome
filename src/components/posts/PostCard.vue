<template>
  <div class="card">
    <div class="image"></div>
    <div class="content">
      <h3 class="h3">{{post.node.title}}</h3>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>