const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    // Konfiguriere den Loader für Bilder
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // erhöhe den Limit-Wert, wenn du möchtest
        options.limit = 10240 // zum Beispiel 10kb
        return options
      })
  }
})
