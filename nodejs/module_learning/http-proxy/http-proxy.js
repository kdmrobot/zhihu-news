var http = require('http');
var httpProxy = require('http-proxy')

//
// Basic Http Proxy Server
//
var proxy = httpProxy.createServer({

})
proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('host', "ws.webxml.com.cn");
});
http.createServer(function (req, res){
    proxy.web(req, res, {
        target:' http://ws.webxml.com.cn'
    })
}).listen(9003);