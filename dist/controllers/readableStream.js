"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readableStream = void 0;
// @ts-ignore
const serverController_1 = require("./serverController");
const readableStream = (duplex) => {
    let data = '';
    return () => {
        try {
            let chunk;
            while (null !== (chunk = duplex.read())) {
                data += chunk;
            }
            const [command, ...props] = data.split(' ');
            const runCommand = (serverController_1.serverController)(command, props);
            console.log(runCommand);
            duplex.write(runCommand.toString());
        }
        catch (err) {
            console.error(`${err.message}!`);
        }
        finally {
            data = '';
        }
    };
};
exports.readableStream = readableStream;
