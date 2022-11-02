import { FlattenSimpleInterpolation } from "styled-components";

export type ButtonSizeType = "xs" | "s" | "m" | "l";
export type ButtonSizes = {
  [key in ButtonSizeType]: FlattenSimpleInterpolation;
};

export type ButtonColorThemeType =
  | "white"
  | "black"
  | "outline"
  | "outline-black";
export type ButtonColorTheme = {
  [key in ButtonColorThemeType]: FlattenSimpleInterpolation;
};

export interface ButtonStyleProps {
  size?: ButtonSizeType;
  colorTheme?: ButtonColorThemeType;
  isBlock?: boolean;
  margin?: string;
}

export interface IconButtonStyleProps {
  colorTheme?: ButtonColorThemeType;
}
