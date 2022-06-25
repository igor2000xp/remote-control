import Jimp from 'jimp';
import { httpServer } from './src/http_server/index.js';
import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!!!!`);
httpServer.listen(HTTP_PORT);

// const socket = new WebSocket('ws://localhost');


const wss = new WebSocketServer({ port: 8080 });
wss.onopen = () => console.log('open');
wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    // в data будет `mouse_position`
    // нам надо получить позицию мышки
    console.log(data.toString());
    const {x, y} = robot.getMousePos()

    // теперь отправляем
    ws.send(`mouse_position${x},${y}`)
  });
  ws.send('something!!!!!!!!!!!!');
  ws.on('close', () => ws.close());
});

// ws.on('close', () => ws.close();
// wss.on('close', () => wss.close());
process.on('SIGINT', () => wss.close());

// process.on('SIGINT', () => {
//
// });

// const wss = new WebSocketServer({ port: 8080 });
//
// wss.on('connection', (ws) => {
//   ws.on('message', (data) => {
//     // в data будет `mouse_position`
//     // нам надо получить позицию мышки
//     const { x, y } = robot.getMousePos()
//     // теперь отправляем
//     ws.send(`mouse_position `)
//   });
//
//   ws.send('something');
// });
// const socket = new WebSocketServer({
//   port: 8080,
// });
//
// socket.on('connection', onConnect);
//
// function onConnect(wsClient) {
//   console.log('Новый пользователь');
//   // отправка приветственного сообщения клиенту
//   wsClient.send('Привет');
//   wsClient.on('message', function(message) {
//     /* обработчик сообщений от клиента */
//   },
//   wsClient.on('close', function() {
//     // отправка уведомления в консоль
//     console.log('Пользователь отключился');
//   }))
// }
//
// socket.onmessage = function(event) {
//   console.log(`[message] Данные получены с сервера: ${event.data}`);
// };
//
// socket.onclose = function(event) {
//   if (event.wasClean) {
//     console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//   } else {
//     // например, сервер убил процесс или сеть недоступна
//     // обычно в этом случае event.code 1006
//     console.log('[close] Соединение прервано');
//   }
// };
//
// socket.onerror = function(error) {
//   console.log(`[error] ${error.message}`);
// };
// ws.listen({})

// ws.on('connection', onConnect);
//
//
// ws.on('connection', function (ws) {
//   ws.on('message', function (data) {
//     console.log('received %s', data);
//   });
//   ws.send('something');
// });
//
// ws.on('close', () => {
//
// });

// "use strict";
// exports.__esModule = true;
// var ws_1 = require("ws");
// var socket = new ws_1["default"]('ws:/localhost');
// var wss = new ws_1.WebSocketServer({
//   port: 8080
// });
// wss.on('connection', function (ws) {
//   ws.on('message', function (data) {
//     console.log('received %s', data);
//   });
//   ws.send('something');
// });
wss.on('close', function () {
  console.log('close');
});
