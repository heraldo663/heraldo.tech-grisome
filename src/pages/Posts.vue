<template>
  <Layout class="bg-white">
    <main>
      <section class="mx-auto max-w-6xl">
        <div class="py-24">
          <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6">
            <h1
              class="text-3xl sm:text-5xl inline-block leading-tight font-sans font-bold mb-2 border-b-2 text-black-400 border-blue-300"
            >Latest posts</h1>
          </div>
        </div>
        <div class="flex flex-wrap posts">
          <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
      </section>
      <!-- <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" /> -->
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";
import PostItem from "@/components/PostItem";
import Pagination from "@/components/Pagination";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SectionTitle from "@/components/SectionTitle";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter,
    Hero,
    About,
    SectionTitle
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/bleda-card.png`;
    }
  }
};
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          draft
          path
          cover
          tags {
            id
            title
            path
          }
          author {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
