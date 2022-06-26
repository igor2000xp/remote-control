import * as robot from 'robotjs';

export const drawRectangle = (x: number, y: number, lengthX: number, lengthY?: number) => {
  const lineX = lengthX;
  const lineY = lengthY ? lengthY : lengthX;
  let currentX = x;
  let currentY = y;

  console.log(`x=${x}, y=${y}, lineX=${lineX}, lengthY=${lengthY}`);

  robot.mouseToggle('down');

    for (let i = 0; i < lineX; i += 1) {
      currentX += 1;
      robot.dragMouse(currentX, currentY);
    }
    for ( let i =0; i < lineY; i += 1 ) {
      currentY += 1;
      robot.dragMouse(currentX, currentY);
    }
    for ( let i = 0; i < lineX; i += 1 ) {
      currentX -= 1;
      robot.dragMouse(currentX, currentY);
    }
    for ( let i =0; i < lineY; i += 1 ) {
      currentY -= 1;
      robot.dragMouse(currentX, currentY);
    }
  robot.mouseToggle('up');
};
