var http = require('http');
const qs = require('node:querystring');

function fn(req,res) {
    if(req.method === 'GET'){
        const method = req.method
        const requestUrl = req.url.split('?')[0]
        const query = req.url.split('?')[1];
        const queryObj = qs.parse(query);

        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.end(JSON.stringify({
            requestUrl,
            query,
            queryObj,
            method,
        }))
    }
}

var server = http.createServer(fn);

function fn2() {
    console.log('run.')
}

server.listen(3000, fn2)