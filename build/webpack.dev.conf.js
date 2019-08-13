const base = require('./webpack.base.conf');
const webpack = require('webpack')


base.mode = 'development';
base.externals = [
  function(context, request, callback) {
    
    if(request.toString() === './view') {
      console.log('context: ', context)
      console.log('request: ', request.toString())
    }

    // if(request[0] == '.') {
      callback();
    // } else {
    //   callback(null, "require('" + request + "')");
    // }
  }
]

base.plugins = [
  new webpack.ContextReplacementPlugin(
    /\.\/node_modules\/express\/lib sync recursive/,
    // Regular expression to match the files
    // that should be imported
    /ejs/
  )
]

module.exports = base;