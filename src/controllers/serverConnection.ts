import { WebSocket, createWebSocketStream, Duplex } from 'ws';
// @ts-ignore
import { serverController } from './serverController.ts';
// @ts-ignore
import { readableStream } from './readableStream.ts';

export const serverConnection = async (ws: WebSocket) => {
  const duplex: Duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false});
  duplex.on('readable', readableStream(duplex));
  ws.on('close', () => ws.close());
};
