export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  layoutTransition: 'page',
  ssr : false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tawahaj',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap' },
    ],
    script : [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "@/assets/sass/global.scss",
    "remixicon/fonts/remixicon.css",
    "@/assets/sass/res.scss",
    "aos/dist/aos.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~/plugins/all.js", mode: "client"}
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //  '@nuxtjs/auth-next',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCZnL2uzq54F3-7fkA2ocHS7pqZMPmdHPk",
          authDomain: "tawahaja.firebaseapp.com",
          projectId: "tawahaja",
          storageBucket: "tawahaja.appspot.com",
          messagingSenderId: "264912912085",
          appId: "1:264912912085:web:494ed808e5143c5740ec5c"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
          storage : true
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    //  middleware: ['all']
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'data'
  //       },
  //       endpoints: {
  //         login: { url: 'https://reqres.in/api/login', method: 'post' },
  //         logout: { url: 'https://reqres.in/api/logout', method: 'post' },
  //         user: { url: 'https://reqres.in/api/users', method: 'get' }
  //       }
  //     }
  //   }
  // },
  loading: {
    color: '#ff6665',
    height: '5px'
  },
  loadingIndicator : {
    name: 'folding-cube',
    color: '#ff6665',
    background: 'white'
  }
}
