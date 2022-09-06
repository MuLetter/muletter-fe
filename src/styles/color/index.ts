import { Palette } from "./types";
import {
  Black2Gen,
  BlackGen,
  Blue2Gen,
  BlueGen,
  Purple2Gen,
  PurpleGen,
  White2Gen,
  WhiteGen,
} from "./utils";

export * from "./utils";
export const white: Palette = {
  50: White2Gen.rgba(0.4),
  100: White2Gen.rgba(0.5),
  200: White2Gen.rgba(0.7),
  300: White2Gen.rgba(0.8),
  400: White2Gen.rgba(0.9),
  500: WhiteGen.rgb,
  600: WhiteGen.rgba(0.8),
  700: WhiteGen.rgba(0.7),
  800: WhiteGen.rgba(0.6),
  900: WhiteGen.rgba(0.5),
};
export const black: Palette = {
  50: BlackGen.rgba(0.4),
  100: BlackGen.rgba(0.5),
  200: BlackGen.rgba(0.7),
  300: BlackGen.rgba(0.8),
  400: BlackGen.rgba(0.9),
  500: Black2Gen.rgba(0.9),
  600: Black2Gen.rgba(0.8),
  700: Black2Gen.rgba(0.7),
  800: Black2Gen.rgba(0.6),
  900: Black2Gen.rgba(0.5),
};
export const blue: Palette = {
  50: BlueGen.rgba(0.4),
  100: BlueGen.rgba(0.5),
  200: BlueGen.rgba(0.7),
  300: BlueGen.rgba(0.8),
  400: BlueGen.rgba(0.9),
  500: Blue2Gen.rgba(0.9),
  600: Blue2Gen.rgba(0.8),
  700: Blue2Gen.rgba(0.7),
  800: Blue2Gen.rgba(0.5),
  900: Blue2Gen.rgba(0.4),
};
export const purple: Palette = {
  50: PurpleGen.rgba(0.4),
  100: PurpleGen.rgba(0.5),
  200: PurpleGen.rgba(0.7),
  300: PurpleGen.rgba(0.8),
  400: PurpleGen.rgba(0.9),
  500: Purple2Gen.rgba(0.9),
  600: Purple2Gen.rgba(0.8),
  700: Purple2Gen.rgba(0.7),
  800: Purple2Gen.rgba(0.5),
  900: Purple2Gen.rgba(0.4),
};
