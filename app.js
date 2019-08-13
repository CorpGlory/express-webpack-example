import { MODULE_CONST } from './test_module'

var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send("Hello world!");
});

app.get('/test-module', function(req, res) {
  res.send(MODULE_CONST);
});

app.listen(3000);