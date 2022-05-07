const handleFn = require('../app');
const http = require('http');

const server = http.createServer(handleFn);

function serverLog() {
    console.log('run.')
}

server.listen(3000, serverLog)