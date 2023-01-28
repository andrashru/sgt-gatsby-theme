/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Современные Горные Технологии`,
    description: `Совершенствуем технологии, сохраняем опыт.`,
    image: `/images/icon.png`,
    siteUrl: `https://s-g-t.ru`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
