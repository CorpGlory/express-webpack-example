const resolve = require('path').resolve


module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: [ './app.js' ],
  output: {
    filename: "app.js",
    path: resolve(__dirname, './../dist')
  }
}
