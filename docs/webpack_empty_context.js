function webpackEmptyContext(req) {
  var e = new Error("Cannot find module '" + req + "'");
  e.code = 'MODULE_NOT_FOUND';
  throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";

//# sourceURL=webpack:///./node_modules/express/lib_sync?