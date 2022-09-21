import { FlattenSimpleInterpolation } from "styled-components";

export type VerticalTextItemPositionType = "left" | "right";
export type VerticalTextItemPosition = {
  [key in VerticalTextItemPositionType]: FlattenSimpleInterpolation;
};
export interface VerticalTextItemControlProps {
  text: string;
}
export interface VerticalTextItemStyleProps {
  position?: VerticalTextItemPositionType;
}
