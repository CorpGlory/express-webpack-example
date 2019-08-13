var base = require('./webpack.base.conf');

base.mode = 'production';
base.externals = [
  function(context, request, callback) {

    if(request.toString === './view') {
      console.log('context: ', context)
      console.log('request: ', request.toString())
    }
    
    //callback(null, "require('" + request + "')");
    callback();
    
  }
],

module.exports = base;
