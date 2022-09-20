import { white } from "@styles/color";
import styled, { css } from "styled-components";
import { LogoColorTheme, LogoStyleProps } from "./types";

export const logoColorTheme: LogoColorTheme = {
  white: css`
    fill: ${white[500]};
  `,
  "white-outline": css`
    fill: none;
    stroke: ${white[500]};
  `,
};

export const LogoSVG = styled.svg<LogoStyleProps>`
  width: 147px;
  height: 27px;

  & > path {
    transition: 0.3s;
    ${({ colorTheme }) =>
      colorTheme ? logoColorTheme[colorTheme] : logoColorTheme["white"]}
  }
`;
