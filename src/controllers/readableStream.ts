
// @ts-ignore
import { serverController } from './serverController.ts';
import { Duplex } from 'ws';

export const readableStream = (duplex: Duplex) => {
  let data = '';

  return () => {
    try {
      let chunk;
      while ( null !== (chunk = duplex.read()) ) {
        data += chunk;
      }
      const [command, ...props] = data.split(' ');
      const runCommand = serverController(command, props);
      console.log(runCommand);

      duplex.write(runCommand.toString());

    } catch ( err ) {
      console.error(`${err.message}!`);
    } finally {
      data = '';
    }
  }
};
