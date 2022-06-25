import WebSocket, { WebSocketServer } from 'ws';

// const ws = new WebSocket('ws:/localhost:8080');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    // в data будет `mouse_position`
    // нам надо получить позицию мышки
    // const { x, y } = robot.getMousePos()
    // теперь отправляем
    ws.send(`mouse_position `)
  });

  ws.send('something');
});
// const socket = new WebSocketServer({
//   port: 8080,
// });
//
// socket.on('connection', (ws) => {
//   console.log('started');
//   ws.on('message', (data) => {
//     console.log('received %s', data);
//   });
//   ws.send('something');
// });
//
// socket.on('close', () => {
//
// });
