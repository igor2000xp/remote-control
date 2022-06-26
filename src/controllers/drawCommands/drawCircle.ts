import * as robot from 'robotjs';

export const drawCircle = (x:number,y:number, rad:number) => {
  robot.dragMouse(x + rad, y);
  robot.mouseToggle('down');

  for (let i = 0; i <= rad * Math.PI * 2; i += 1) {
    const _x = x + (rad * Math.cos(i/rad));
    const _y = y + (rad * Math.sin(i/rad));
    robot.dragMouse(_x, _y);
  }

  robot.dragMouse(x, y);
  robot.mouseToggle('up')
};
