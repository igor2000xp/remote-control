"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverController = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
exports.serverController = ((command, props) => {
    let mouseNew = robotjs_1.default.getMousePos();
    const result = `${command}${props[0]}px\0`;
    switch (command.toString().trim()) {
        case 'mouse_position':
            return `${command}${mouseNew.x},${mouseNew.y}\0`;
        case 'mouse_up':
            robotjs_1.default.moveMouse(mouseNew.x, mouseNew.y - Number(props[0]));
            return result;
        case 'mouse_down':
            robotjs_1.default.moveMouse(mouseNew.x, mouseNew.y + Number(props[0]));
            return result;
        case 'mouse_left':
            robotjs_1.default.moveMouse(mouseNew.x - Number(props[0]), mouseNew.y);
            return result;
        case 'mouse_right':
            robotjs_1.default.moveMouse(mouseNew.x + Number(props[0]), mouseNew.y);
            return result;
        default:
            return 'NO command';
    }
});
