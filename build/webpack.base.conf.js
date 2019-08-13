const path = require('path');


function resolve(p) {
  return path.resolve(__dirname, './../', p);
}

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: [ './app.js' ],
  output: {
    filename: "app.js",
    path: resolve('dist')
  },
}