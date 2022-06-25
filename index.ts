// import Jimp from 'jimp';
import { httpServer } from './src/http_server/index.js';
// import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';
// @ts-ignore
import { serverController } from './src/controllers/serverController.ts';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!!!!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });
wss.onopen = () => console.log('open');
wss.on('connection', function connection(ws: WebSocket) {
  ws.on('message', (data) => {
    serverController(data, ws);
  });
  ws.send('something!!!!!!!!!!!!');
  ws.on('close', () => ws.close());
});

// ws.on('close', () => ws.close();
// wss.on('close', () => wss.close());
process.on('SIGINT', () => wss.close());

wss.on('close', function () {
  console.log('close');
});
