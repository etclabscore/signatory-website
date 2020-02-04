const emoji = require("remark-emoji");

module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: "Signatory",
    description: "",
    logoUrl: "https://user-images.githubusercontent.com/10556209/73570773-a07fb900-4432-11ea-8ed1-3bf525af04d9.png",
    primaryColor: "#3f51b5", //material-ui primary color
    secondaryColor: "#f50057", //material-ui secondary colo
    author: "",
    menuLinks: [
      {
        name: "Home",
        link: "/",
        ignoreNextPrev: true
      },
      {
        name: "Getting Started",
        link: "/getting-started"
      },
      {
        name: "API Documentation",
        link: "/api-documentation"
      }
    ],
    footerLinks: [
      {
        name: "Github",
        link: "https://github.com/etclabscore/signatory"
      }
    ]
  },
  plugins: [
    "@etclabscore/gatsby-theme-pristine",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "signatory",
        short_name: "signatory",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#3f51b5",
        display: "minimal-ui",
        icon: "src/images/signatory_logo.png", // This path is relative to the root of the site.
      },
    }
  ],
}
