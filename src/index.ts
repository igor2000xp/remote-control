// import Jimp from 'jimp';
import { httpServer } from './http_server';
// import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';
import { serverConnection } from './controllers/serverConnection';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { cwd } from 'process';

dotenv.config({ path: resolve(cwd(), '.env') });

const HTTP_PORT = process.env.HTTP_PORT || 3000;
const WSS_PORT = process.env.WSS_PORT || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!!!!`);
httpServer.listen(HTTP_PORT);

export const wss: WebSocket.Server<WebSocket.WebSocket> = new WebSocketServer({ port: Number(WSS_PORT) });

wss.on('connection', serverConnection);

wss.on('close', () => {
  wss.close();
  process.exit(0);
});
process.on('SIGINT', () => {
  wss.close();
  process.exit(0);
});
