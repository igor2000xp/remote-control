import * as robot from 'robotjs';
import * as constants from '../../constants/constants'
import Jimp from 'jimp';

export const printScreen = async (x:number, y: number) => {
  const print = robot.screen.capture(
    x - constants.WIDE_SCREEN_CAPTURE / 2,
    y + constants.HEIGHT_SCREEN_CAPTURE / 2,
    constants.WIDE_SCREEN_CAPTURE,
    constants.HEIGHT_SCREEN_CAPTURE);

  const jimp = new Jimp({
    "data": print.image,
    "width": constants.WIDE_SCREEN_CAPTURE,
    "height": constants.HEIGHT_SCREEN_CAPTURE
  });

  return await jimp.getBase64Async(Jimp.MIME_JPEG);

};
