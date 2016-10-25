#!/usr/bin/env node

var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({
  method: 'POST',
  url: 'login'
});
var req = http.get({
  host: '10.1.10.20',
  port: 21691,
  path: '/tub/v1/data'
});

req.on('response', function(res){
  res.setEncoding('utf8');
  var buffer = '';
  res.on('data', function(data){
    buffer += data;
  });
  res.on('end', function(){
    console.log(JSON.parse(buffer));
  });
});

req.on('error', function(err){
  if (err) {
    console.log(err);
  }
});

req.end();
