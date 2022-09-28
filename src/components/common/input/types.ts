import { FlattenSimpleInterpolation } from "styled-components";

export type TextInputThemeType = "fill" | "outline-black" | "outline-white";
export type TextInputTheme = {
  [key in TextInputThemeType]: FlattenSimpleInterpolation;
};
export interface TextInputStyleProps {
  styleTheme?: TextInputThemeType;
}
export interface FileInputProps {
  setImage: (image: Blob) => void;
}
