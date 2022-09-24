import { black, white } from "@styles/color";
import styled, { css } from "styled-components";
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

export const FileUploadBlock = styled.div`
  position: relative;
  width: 400px;
  height: 250px;

  & > label {
    position: absolute;
    width: 400px;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${black[900]};
    cursor: pointer;
  }

  & > img {
    position: absolute;
    width: 400px;
    height: 250px;

    object-fit: cover;
  }

  & > input[type="file"] {
    display: none;
  }
`;
