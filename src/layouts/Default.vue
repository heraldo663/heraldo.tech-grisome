<template>
  <div class="body min-h-full flex flex-col">
    <div class="flex-grow">
      <Header></Header>
      <div>
        <slot />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import config from "~/.temp/config.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer },
  computed: {
    config() {
      return config;
    }
  }
};
</script>

<style src="~/assets/css/main.css"></style>
