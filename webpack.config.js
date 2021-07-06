const path = require('path')
const createWebpackConfig = require('@0y0/webpack-config-react')
const pkg = require('./package')

const isDev = process.env.NODE_ENV !== 'production'
const rootDir = __dirname
const srcDir = path.join(rootDir, 'src')
const distDir = path.join(rootDir, 'dist')
const staticDir = path.join(srcDir, 'static')
const indexJs = path.join(srcDir, 'index.js')
const indexHtml = path.join(srcDir, 'index.html')
const publicPath = '/sbs/'
const assetPath = '/assets'
const serviceWorkerPath = '/sw.js'

module.exports = createWebpackConfig({
  isDev,
  appName: pkg.name,
  rootDir,
  srcDir,
  distDir,
  staticDir,
  jsChunks: { index: indexJs },
  htmlChunks: { index: indexHtml },
  publicPath,
  assetPath,
  serviceWorkerPath,
  resolveAlias: { '@src': srcDir },
  chunkGroups: {
    app: { test: /[\\/]src[\\/]/, enforce: true },
    vendors: { test: /[\\/]node_modules[\\/]/, enforce: true }
  },
  variables: {
    'app.env.NAME': pkg.name,
    'app.env.REVISION': pkg.version,
    'app.env.ENABLE_SERVICE_WORKER': !isDev
  },
  useSourceMap: true,
  useWebpackAnalyzer: false,
  host: 'localhost',
  port: 8080
})
