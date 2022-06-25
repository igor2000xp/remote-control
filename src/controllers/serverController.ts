import WebSocket from 'ws';
import robot from 'robotjs';
import Jimp from 'jimp';

export const serverController = ((data:string, ws: WebSocket) => {
    console.log(data.toString());
  let mouseNew: {x: number, y: number} = robot.getMousePos();
    switch (data.toString().trim()) {

      case 'mouse_position':
        ws.send(`mouse_position${mouseNew.x},${mouseNew.y}`);
        break;
      case 'mouse_up 10':
        robot.moveMouse(mouseNew.x,  mouseNew.y - 10);
        ws.send(`mouse_up10px`);
        break;
      case 'mouse_down 10':
        robot.moveMouse(mouseNew.x,  mouseNew.y + 10);
        ws.send(`mouse_down10px`);
        break;
      case 'mouse_left 10':
        robot.moveMouse(mouseNew.x - 10,  mouseNew.y);
        ws.send(`mouse_left10px`);
        break;
      case 'mouse_right 10':
        robot.moveMouse(mouseNew.x + 10,  mouseNew.y);
        ws.send(`mouse_right10px`);
        break;
    }
});


