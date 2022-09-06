import { black, white } from "@styles/color";
import styled from "styled-components";

export const AuthBoard = styled.div`
  display: flex;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 1280px;
  height: 500px;
  padding: 0 48px;
  box-sizing: border-box;

  margin: auto;
  background: ${black[900]};

  flex-direction: row;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: ${white[500]};

  & > .title {
    margin: 0 0 16px;
  }

  & > .description {
    margin: 0 0 32px;
  }

  & > a {
    align-self: flex-end;
  }
`;

export const FormWrap = styled.div`
  position: absolute;
  top: -48px;
  left: 48px;

  width: 592px;
  height: 592px;

  background: ${white[500]};
  box-shadow: 4px 4px 4px ${black[900]};
  transition: 0.35s ease-out;

  &.join {
    transform: translateX(100%);
  }
`;
