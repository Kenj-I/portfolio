// const pkg = require('./package');

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
// 独自ドメインしようのためコメントアウト
// const baseRoute = env => (env === 'GH_PAGES' ? '/portfolio/' : '/');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    title: "Ken's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Webエンジニアとして働くKenのポートフォリオサイト。プロフィール、スキル、実績を紹介しています',
      },
      {
        property: 'og:description',
        content:
          'Webエンジニアとして働くKenのポートフォリオサイト。プロフィール、スキル、実績を紹介しています',
      },
      {
        property: 'og:image',
        content: 'https://kenj-i.github.io/portfolio/ogp.png',
      },
      { property: 'og:site_name', content: "Ken's Portfolio" },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@gootablog' },
      { property: 'twitter:creator', content: '@gootablog' },
      {
        property: 'twitter:description',
        content:
          'Webエンジニアとして働くKenのポートフォリオサイト。プロフィール、スキル、実績を紹介しています',
      },
      {
        property: 'twitter:image',
        content: 'https://kenj-i.github.io/portfolio/ogp.png',
      },
      {
        property: 'google-site-verification',
        content: '3TJvlHPaG_Ysuwnex4cM1d27iWtKc-VYciCxdEC7zeU',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand',
      },
    ],
  },

  router: {
    // base: baseRoute(process.env.DEPLOY_ENV),
    base: '/',
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,
  // loading: { color: '#5DA9C3' },

  /*
  ** Global CSS
  */
  css: ['@/assets/sass/reset.scss', '@/assets/sass/common.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader',
      ['@/assets/sass/variables.scss', '@/assets/sass/mixin.scss'],
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-100349346-3',
      },
    ],
    '@nuxtjs/sitemap',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
