import { WebSocket, createWebSocketStream } from 'ws';
import { readableStream } from './readableStream';

export const serverConnection = async (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false});
  duplex.on('readable', readableStream(duplex));
  ws.on('close', () => ws.close());
};
