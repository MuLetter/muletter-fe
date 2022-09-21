import { css } from "styled-components";
import { VerticalTextItemPosition } from "./types";

export const verticalTextItemPosition: VerticalTextItemPosition = {
  left: css`
    transform-origin: 0% 50%;
    transform: rotateZ(-90deg) translateY(50%);
  `,
  right: css`
    transform-origin: 100% 50%;
    transform: rotateZ(90deg) translateY(50%);
  `,
};
