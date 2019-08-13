const base = require('./webpack.base.conf');

base.mode = 'development';
base.externals = [
  function(context, request, callback) {
    if(request[0] == '.') {
      callback();
    } else {
      callback(null, "require('" + request + "')");
    }
  }
],

module.exports = base;