const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  devServer: {
    port: 8888,
    noInfo: true,
    compress: true
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'docs'),
        // Required - Routes to render.
        routes: ['/']
      })
    ]
  },
  pwa: {
    name: 'Muiscas RC',
    display: 'fullscreen',
    themeColor: '#d50000',
    backgroundColor: '#1a1a1a',
    msTileColor: '#1a1a1a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon16: 'img/icons/icon.png',
      favicon32: 'img/icons/icon.png'
    }
  // }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/club/' : '/'
}
