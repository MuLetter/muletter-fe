import { black, white } from "@styles/color";
import { css } from "styled-components";
import { ButtonColorTheme, ButtonSizes } from "./types";

export const buttonSizes: ButtonSizes = {
  xs: css`
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
  `,
  s: css`
    font-size: 14px;
    height: 32px;
    padding: 0 12px;
  `,
  m: css`
    font-size: 16px;
    height: 40px;
    padding: 0 16px;
  `,
  l: css`
    font-size: 18px;
    height: 48px;
    padding: 0 24px;
  `,
};

export const buttonColorTheme: ButtonColorTheme = {
  white: css`
    background: ${white[500]};
    color: ${black[500]};

    &:hover,
    &:focus {
      background: ${white[600]};
      color: ${black[600]};
    }
  `,
  black: css`
    background: ${black[500]};
    color: ${white[500]};

    &:hover,
    &:focus {
      background: ${black[600]};
      color: ${white[600]};
    }
  `,
  outline: css`
    background: transparent;
    color: ${white[600]};
    border: 1px solid ${white[600]};

    &:hover,
    &:focus {
      background: ${white[50]};
    }
  `,
};
