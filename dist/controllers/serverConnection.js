"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConnection = void 0;
const ws_1 = require("ws");
// @ts-ignore
const readableStream_1 = require("./readableStream");
const serverConnection = (ws) => __awaiter(void 0, void 0, void 0, function* () {
    const duplex = (ws_1.createWebSocketStream)(ws, { encoding: 'utf8', decodeStrings: false });
    duplex.on('readable', (readableStream_1.readableStream)(duplex));
    ws.on('close', () => ws.close());
});
exports.serverConnection = serverConnection;
