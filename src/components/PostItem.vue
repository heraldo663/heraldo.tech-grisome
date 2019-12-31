<template>
  <article class="mb-8 lg:w-1/2">
    <g-link :to="`${post.path}/`">
      <div class="px-6">
        <div class="border-2 rounded-p shadow">
          <div class="relative">
            <div
              class="absolute w-full h-full overlay-color opacity-35 rounded-t-p"
            ></div>
            <g-image class="rounded-t-p" :src="post.cover"></g-image>
          </div>
          <header class="text-left p-4">
            <h3
              class="text-2xl sm:text-3xl font-sans mb-1 sm:mb-2 text-black-500 font-bold"
            >
              {{ post.title }}
            </h3>
            <small class="text-gray-700 text-xs">
              Published at
              <time :datetime="post.datetime" class="text-gray-700 text-xs">{{
                formatPublishDate(post.datetime)
              }}</time>
              <span v-if="post.author || (post.tags && post.tags.length > 0)"
                >·</span
              >
              <span>{{ post.timeToRead }} min read</span>
            </small>
          </header>
          <p
            class="leading-normal text-black-600 text-base p-4"
            v-html="excerpt(post, 220, ' ...')"
          ></p>
        </div>
      </div>
    </g-link>
  </article>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    }
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format("ll");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
      }

      length = length || 240;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  }
};
</script>

<style scoped>
.g-image {
  width: 100%;
  object-fit: cover;
  max-height: 210px;
}

.overlay-color {
  transition: .2s;
  background: #268bd2;
}

.shadow {
  transition: .2s;
}

.shadow:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
.shadow:hover .overlay-color {
  opacity: .45;
}


article:nth-child(2n) .overlay-color {
  background: #3a3768;
}
</style>
