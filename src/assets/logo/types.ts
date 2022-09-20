import { FlattenSimpleInterpolation } from "styled-components";

export type LogoColorThemeType = "white" | "white-outline";
export type LogoColorTheme = {
  [key in LogoColorThemeType]: FlattenSimpleInterpolation;
};
export interface LogoStyleProps {
  colorTheme?: LogoColorThemeType;
}
