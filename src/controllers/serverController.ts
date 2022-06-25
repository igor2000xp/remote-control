import robot from 'robotjs';

export const serverController = ((command :string, props: string[]) => {
  let mouseNew: {x: number, y: number} = robot.getMousePos();
  const result = `${command}${props[0]}px\0`;

    switch (command.toString().trim()) {
      case 'mouse_position':
        return `${command}${mouseNew.x},${mouseNew.y}\0`;
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
      default:
        return 'NO command';
    }
});


