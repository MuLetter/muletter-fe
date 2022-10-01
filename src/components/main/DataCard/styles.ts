import { white } from "@styles/color";
import styled, { css } from "styled-components";
import { DataCardStyleProps } from "./types";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const DataCardBlock = styled.div`
  width: 350px;
  height: 150px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${white[500]};
  & > .title {
    display: inline-block;
    position: absolute;
    left: 8px;
    top: -11px;
  }
`;

export const DataCardSvg = styled.svg<DataCardStyleProps>`
  width: 350px;
  height: 150px;

  position: absolute;
  top: 0;
  left: 0;

  ${({ pathLength }) =>
    pathLength &&
    css`
      & > path.start {
        stroke-dasharray: ${pathLength};
        stroke-dashoffset: ${pathLength};
      }

      & > path.end {
        transition: 1s;
        stroke-dashoffset: 0 !important;
      }
    `}
`;
