var express = require('express');
var app = express.createServer();

app.use(express.static(__dirname + '/public'));
app.use('/engine',express.static(__dirname + '/engine'));

module.exports = app

var ipaddr  = process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_INTERNAL_PORT || process.env.C9_PORT || 8080;

app.listen(port,ipaddr, function(){
  console.log("server listening on %d in %s mode", port, app.settings.env);
});


