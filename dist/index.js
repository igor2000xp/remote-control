"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wss = void 0;
// import Jimp from 'jimp';
// @ts-ignore
const index_1 = require("./http_server/index");
// import robot from 'robotjs';
// @ts-ignore
const ws_1 = require("ws");
// @ts-ignore
const serverConnection_1 = require("./controllers/serverConnection");
const dotenv = __importStar(require("dotenv"));
const path_1 = require("path");
const process_1 = require("process");
dotenv.config({ path: (0, path_1.resolve)((0, process_1.cwd)(), '.env') });
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const WSS_PORT = process.env.WSS_PORT || 8080;
console.log(`Start static http server on the ${HTTP_PORT} port!!!!`);
index_1.httpServer.listen(HTTP_PORT);
exports.wss = new ws_1.WebSocketServer({ port: Number(WSS_PORT) });
exports.wss.on('connection', serverConnection_1.serverConnection);
exports.wss.on('close', () => {
    exports.wss.close();
    process.exit(0);
});
process.on('SIGINT', () => {
    exports.wss.close();
    process.exit(0);
});
