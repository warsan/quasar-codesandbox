// Конфигурация для вашего приложения

module.exports = function (ctx) {
  return {
    // загрузочный файл приложения (/src/boot)
    // --> загрузочные файлы являются частью "main.js"
    boot: [
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // это или "roboto-font", никогда не оба!

      'roboto-font', // необязательно, вы не привязаны к нему
      'material-icons' // необязательно, вы не привязаны к нему
    ],

    framework: {
      // это здесь для удобства,
      // но не рекомендуется в производстве!
      all: true,

      // iconSet: 'ionicons-v4'
      // lang: 'ru' // Язык квазаров
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history'
    },

    devServer: {
      open: false, // оставлю это здесь для Codesandbox наработок
      public: 'http://0.0.0.0' // оставлю это здесь для Codesandbox наработок
    },

    // animations: 'all' --- включает в себя все анимации
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    }
  }
}
