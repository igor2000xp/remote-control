// import Jimp from 'jimp';
import { httpServer } from './src/http_server/index.js';
// import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';
// @ts-ignore
import { serverConnection } from './src/controllers/serverConnection.ts';
// @ts-ignore
import { serverController } from './src/controllers/serverController.ts';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { cwd } from 'process';

dotenv.config({ path: resolve(cwd(), '.env') });

const HTTP_PORT = process.env.HTTP_PORT || 3000;
const WSS_PORT = process.env.WSS_PORT || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!!!!`);
httpServer.listen(HTTP_PORT);

export const wss: WebSocket.Server<WebSocket.WebSocket> = new WebSocketServer({ port: WSS_PORT });

wss.on('connection', serverConnection);

wss.on('close', () => {
  wss.close();
});
process.on('SIGINT', () => wss.close());
