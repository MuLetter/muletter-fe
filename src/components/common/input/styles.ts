import { black, white } from "@styles/color";
import { css } from "styled-components";
import { TextInputTheme } from "./types";

export const textInputTheme: TextInputTheme = {
  fill: css`
    border: 2px solid ${black[100]};
    background: ${white[500]};
    color: ${black[300]};
    &:focus {
      border: 2px solid ${black[300]};
    }
    &::placeholder {
      color: ${black[100]};
    }
  `,
  "outline-black": css`
    border: 2px solid ${black[900]};
    background: transparent;
    color: ${black[500]};
    &:focus {
      border: 2px solid ${black[500]};
    }
    &::placeholder {
      color: ${black[900]};
    }
  `,
  "outline-white": css`
    border: 2px solid ${white[900]};
    background: transparent;
    color: ${white[500]};

    &:focus {
      border: 2px solid ${white[500]};
    }
    &::placeholder {
      color: ${white[900]};
    }
  `,
};
