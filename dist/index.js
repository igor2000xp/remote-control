"use strict";
exports.__esModule = true;
var index_js_1 = require("./http_server");
var ws_1 = require("ws");
var HTTP_PORT = 3000;
var WS_PORT = 8000;
console.log("Start static http server on the ".concat(HTTP_PORT.toString(), " port!"));
index_js_1.httpServer.listen(HTTP_PORT);
const socket = new ws_1.WebSocketServer('ws:/localhost');
