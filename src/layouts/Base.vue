<template>
  <div class="container base">
    <div class="content">
      <Header></Header>
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<style scoped >
.content {
  flex: 1 0 auto;
}

.base {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
