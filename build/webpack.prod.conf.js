const base = require('./webpack.base.conf');
const webpack = require('webpack')
const resolve = require('path').resolve


base.mode = 'production';
base.plugins = [
  new webpack.ContextReplacementPlugin(
    /express\/lib/,
    resolve(__dirname, '../node_modules'),
    {
      'ejs': 'ejs'
    }
  )
]
base.stats = {
  warningsFilter: /require\.extensions/
}

module.exports = base;
