<template>
  <header>
    <div
      v-if="post.cover"
      class="post-cover overflow-hidden relative"
      :class="[post.fullscreen ? 'fullscreen' : 'max-h-cover']"
    >
      <div
        v-if="isIdEven"
        class="absolute w-full h-full overlay-color-blue opacity-40"
      ></div>
      <div
        v-else
        class="absolute w-full h-full overlay-color-purble opacity-40"
      ></div>
      <div
        class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 absolute z-10"
        :class="[
          post.fullscreen
            ? 'flex flex-col items-center m-auto inset-0'
            : 'mx-auto bottom-0 inset-x-0 pb-16'
        ]"
      >
        <div class="m-auto">
          <h1
            class="text-3xl sm:text-5xl font-sans font-bold leading-tight mb-2 text-white"
          >
            {{ post.title }}
          </h1>
          <p class="text-white">
            <time :datetime="post.datetime" class="capitalize">{{
              formattedPublishDate
            }}</time> &bull; {{ post.timeToRead }} min read
          </p>
        </div>
      </div>
      <ClientOnly>
        <parallax :speed-factor="speedFactor" :sectionHeight="80">
          <img :src="post.cover" :alt="post.title" />
        </parallax>
      </ClientOnly>
    </div>
    <div v-else class="pt-24">
      <div class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto  mx-auto text-center px-6">
        <h1
          class="text-3xl sm:text-5xl leading-tight font-sans font-bold mb-2 text-black"
        >
          {{ post.title }}
        </h1>
        <p class="text-gray-700">

          <time :datetime="post.datetime" class="capitalize">{{
            formattedPublishDate
          }}</time>
          &bull;
          {{ post.timeToRead }} min read
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import moment from "moment";
import Parallax from "vue-parallaxy";

export default {
  props: ["post"],
  components: {
    Parallax
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37;
    },
    isIdEven() {
      // console.log(this.post);
      return true;
    }
  }
};
</script>

<style scoped>
.overlay-color-blue {
  background: #268bd2;
}
.overlay-color-purple {
  background: #3a3768;
}
</style>

