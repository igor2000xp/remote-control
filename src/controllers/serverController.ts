import robot from 'robotjs';
import { drawRectangle } from './drawCommands/drawRectangle';
import { drawCircle } from './drawCommands/drawCircle';
import { printScreen } from './drawCommands/printScreen';

export const serverController = ((command :string, props: string[]) => {
  let mouseNew: {x: number, y: number} = robot.getMousePos();
  const result = `${command}{${props[0]}px}\0`;

    switch (command.toString().trim()) {
      case 'mouse_position':
        return `${command}{${mouseNew.x}px},{${mouseNew.y}px}\0`;
      case 'mouse_up':
        robot.moveMouse(mouseNew.x,  mouseNew.y - Number(props[0]));
        return result;
      case 'mouse_down':
        robot.moveMouse(mouseNew.x,  mouseNew.y + Number(props[0]));
        return result;
      case 'mouse_left':
        robot.moveMouse(mouseNew.x - Number(props[0]),  mouseNew.y);
        return result;
      case 'mouse_right':
        robot.moveMouse(mouseNew.x + Number(props[0]),  mouseNew.y);
        return result;
      case 'draw_rectangle':
        drawRectangle(mouseNew.x, mouseNew.y, Number(props[0]), Number(props[1]));
        return `${command}{${props[0]}px},{${props[1]}px}\0`;
      case 'draw_circle':
        drawCircle(mouseNew.x, mouseNew.y, Number(props[0]));
        return `${command}{${props[0]}px}\0`;
      case 'draw_square':
        drawRectangle(mouseNew.x, mouseNew.y, Number(props[0]));
        return `${command}{${props[0]}px}\0`;
      case 'prnt_scrn':
        // robot.moveMouse(mouseNew.x + Number(props[0]),  mouseNew.y);
        printScreen(mouseNew.x, mouseNew.y);
        return `${command}{base64-string(png--buf)}\0`;
      default:
        return 'NO command';
    }
});


