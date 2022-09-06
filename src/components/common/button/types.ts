import { FlattenSimpleInterpolation } from "styled-components";

export type ButtonSizeType = "xs" | "s" | "m" | "l";
export type ButtonSizes = {
  [key in ButtonSizeType]: FlattenSimpleInterpolation;
};

export type ButtonColorThemeType = "white" | "black" | "outline";
export type ButtonColorTheme = {
  [key in ButtonColorThemeType]: FlattenSimpleInterpolation;
};

export interface ButtonStyleProps {
  size?: ButtonSizeType;
  colorTheme?: ButtonColorThemeType;
}
