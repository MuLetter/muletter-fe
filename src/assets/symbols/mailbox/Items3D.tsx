import { black, white } from "@styles/color";
import styled, { css } from "styled-components";
import { LidStyleProps } from "./types";

export const MainItem = styled.div``;
export const SideItem = styled.div``;
export const Lid = styled.div<LidStyleProps>`
  width: 250px;
  height: 150px;

  background-color: ${white[500]};
  top: 25px;
  left: 25px !important;
  transform-origin: 50% 0 !important;
  transition: 0.3s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotateX(90deg);
    `}
`;

export function FrontItem() {
  return (
    <MainItem style={{ background: "transparent" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 3 2"
      >
        <path
          d="M 0 0
           V 2
           H 3 
           V 0
           Z"
          stroke="white"
          strokeWidth={50}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </MainItem>
  );
}
