<template>
  <Layout class="bg-white">
    <main>
      <Hero></Hero>
      <About id="about"></About>
      <section class="mx-auto max-w-6xl">
        <SectionTitle>Latest posts</SectionTitle>
        <div class="flex flex-wrap posts">
          <post-item v-for="edge in posts" :key="edge.node.id" :post="edge.node" />
        </div>
      </section>
      <!-- <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" /> -->

      <Contact id="contact"></Contact>
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
import Contact from "@/components/Contact";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter,
    Hero,
    About,
    SectionTitle,
    Contact
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
      return `${this.config.siteUrl}/images/author/heraldo.png`;
    },

    posts() {
      return this.$page.posts.edges.filter(edge => edge.node.draft !== true);
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
          path
          cover
          draft
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
