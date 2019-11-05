// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/sass/*.scss")]
    });
}

module.exports = {
  siteName: `Heraldo's Blog`,
  siteUrl: "https://heraldo.tech",
  siteDescription: `This is my personal blog where i share my software development experiences.`,
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-XXXXXXXXX-X"
      }
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900
      }
    },
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://cms.heraldo.tech",
        apiBase: "wp-json",
        typeName: "WordPress",
        perPage: 100,
        concurrent: 10
      }
    }
  ],
  templates: {
    WordPressPost: "/:year/:slug"
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
