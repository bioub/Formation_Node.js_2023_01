import net from 'node:net';

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('client connected');
  socket.pipe(process.stdout); // les messages reçus par le serveur
  // s'afficheront dans le terminal
});

server.on('error', (err) => {
  console.log('error : ' + err.message);
});

server.on('listening', () => {
  console.log('server started');
});

server.listen(4000);
