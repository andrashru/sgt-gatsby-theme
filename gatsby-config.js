/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SGT`,
    description: `Описание сайта`,
    image: `/images/icon.png`,
    siteUrl: `https://s-g-t.ru`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
