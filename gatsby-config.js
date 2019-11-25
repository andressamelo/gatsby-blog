require("dotenv").config()

const queries = require("./src/utils/algolia")

module.exports = {
  siteMetadata: {
    title: `Hello!`,
    author: `Andressa Melo`,
    description: `My name is Andressa Melo and I'm a Front-end developer. I've been creating functional projects, agile, with semantic codification, up-to-date and clean.`,
    siteUrl: `https://andressamelo-blog.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andressa Melo`,
        short_name: `Andressa Melo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e6c800`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "andressamelo.com.br",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}