// require('dotenv').config()
export default {
  env: {
    nodeEnv: process.env.NODE_ENV || "development",
    redirectURI: process.env.REDIRECT_URI || "http://localhost:3000/profile"
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Apollify",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { name: "keywords", content: "spotify, artists, playlist, apollify" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        async: true
      }
    ],
    script: [{ src: "/adsense.js" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#1db954" },
  manifest: {
    name: "Apollify",
    short_name: "Apollify",
    description: process.env.npm_package_description || "",
    theme_color: "#4a148c",
    lang: "en"
  },
  /*
   ** Global CSS
   */
  css: [],
  serverMiddleware: ["redirect-ssl"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    }
  }
};
