const withTypescript = require('@zeit/next-typescript')
const I18nPlugin = require('i18n-webpack-plugin')
const languages = require(`./i18n/${process.env.LANG_TYPE !== 'demo' ? process.env.LANG_TYPE : 'zh'}`)

const isProd = process.env.NODE_ENV === 'production'

module.exports = withTypescript({
  webpack(config) {
    config.plugins.push(
      new I18nPlugin(languages)
    )
    config.module.rules.push({
      test: /\.tsx$/,
      enforce: 'pre',
      use: [
        {
          loader: 'tslint-loader',
        }
      ]
    })
    return config
  },
  assetPrefix: isProd ? `/${process.env.LANG_TYPE}` : '',
})