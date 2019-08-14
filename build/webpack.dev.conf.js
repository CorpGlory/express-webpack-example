const base = require('./webpack.base.conf');
const webpack = require('webpack')
const path = require('path')


function resolve(p) {
  return path.resolve(__dirname, './../', p);
}


base.mode = 'development';
base.externals = [
  function(context, request, callback) {
    if(request[0] == '.') {
      callback();
    } else {
      callback(null, "require('" + request + "')");
    }
  }
]

// base.plugins = [
//   new webpack.ContextReplacementPlugin(
//     /express\/lib/,
//     resolve('node_modules'),
//     {
//       'ejs': 'lodash'
//     }
//   )
// ]

module.exports = base;