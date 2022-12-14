import { FlattenSimpleInterpolation } from "styled-components";

export type Font =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "tag1"
  | "tag2";

export type FontStyles = {
  [key in Font]: FlattenSimpleInterpolation;
};
