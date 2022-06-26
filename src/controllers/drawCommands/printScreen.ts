import * as robot from 'robotjs';
import * as constants from '../../constants/constants'
import Jimp from 'jimp';

export const printScreen = async (x:number, y: number): Promise<Jimp> => {
  return new Promise((res) => {
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

    let position = 0;

    jimp.scanQuiet(
      0,
      0,
      jimp.bitmap.width,
      jimp.bitmap.height,
      (x:number, y:number, idx:number) => {
        jimp.bitmap.data[idx + 2] = print.image.readUInt8(position++)
        jimp.bitmap.data[idx + 1] = print.image.readUInt8(position++)
        jimp.bitmap.data[idx] = print.image.readUInt8(position++)
        jimp.bitmap.data[idx + 3] = print.image.readUInt8(position++)
      }
    )

    res(jimp);

  })
};
