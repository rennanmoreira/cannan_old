module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'Cannan',
    themeColor: '#525299',
    msTileColor: '#525299',
    manifestOptions: {
      background_color: '#525299'
    }
  },
  devServer: {
    port: 9000,
  },
}
