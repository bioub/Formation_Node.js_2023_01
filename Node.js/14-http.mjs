import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.write('{"msg": "Home"}');
  } else if (req.method === "GET" && req.url === '/hello') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.write('{"msg": "Hello"}');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'application/json');
    res.write('{"msg": "Not Found"}');
  }

  res.end();
});

server.on('error', (err) => {
  console.log('error : ' + err.message);
});

server.listen(4000, () => {
  console.log('server started');
});
