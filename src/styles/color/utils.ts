import _ from "lodash";

export class ColorGenerator {
  private _rgb: [r: number, g: number, b: number];
  hex: string;

  constructor(rgb: [r: number, g: number, b: number]) {
    this.hex = `#${_.invokeMap(rgb, "toString", 16).join("")}`;
    this._rgb = rgb;
  }

  get rgb() {
    return `rgb(${_.join(this._rgb, ",")})`;
  }

  rgba(opacity: number) {
    return `rgba(${_.join(this._rgb, ",")}, ${opacity})`;
  }
}

// 숫자가 낮을 수록 좀 더 흰색, 검은색에 가까움
export const WhiteGen = new ColorGenerator([255, 255, 255]);
export const White2Gen = new ColorGenerator([247, 250, 252]);

export const BlackGen = new ColorGenerator([26, 32, 44]);
export const Black2Gen = new ColorGenerator([51, 51, 51]);

export const BlueGen = new ColorGenerator([44, 82, 130]);
export const Blue2Gen = new ColorGenerator([26, 54, 93]);

export const PurpleGen = new ColorGenerator([233, 216, 253]);
export const Purple2Gen = new ColorGenerator([214, 188, 250]);
