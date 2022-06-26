import { httpServer } from './http_server';
import WebSocket, { WebSocketServer } from 'ws';
import { serverConnection } from './controllers/serverConnection';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { cwd } from 'process';

dotenv.config({ path: resolve(cwd(), '.env') });

const HTTP_PORT = process.env.HTTP_PORT || 3000;
export const WSS_PORT = process.env.WSS_PORT || 8080;

httpServer.listen(HTTP_PORT);
httpServer.on('listening', () => console.log(`Start static http server on the ${HTTP_PORT} port`))

export const wss: WebSocket.Server<WebSocket.WebSocket> = new WebSocketServer({ port: Number(WSS_PORT) });

wss.on('listening', () => console.log(`Start WebSocket server on the ${WSS_PORT} port`));
wss.on('connection', serverConnection);
wss.on('close', () => {
  wss.close();
  process.exit(0);
});
process.on('SIGINT', () => {
  wss.close();
  process.exit(0);
});
