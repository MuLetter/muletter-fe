import styled from "styled-components";
import { buttonColorTheme, buttonSizes } from "./styles";
import { ButtonStyleProps } from "./types";

export const Button = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 6px;
  font-weight: 700;
  outline: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.25s;

  ${({ colorTheme }) =>
    colorTheme ? buttonColorTheme[colorTheme] : buttonColorTheme["white"]}
  ${({ size }) => (size ? buttonSizes[size] : buttonSizes["m"])}

  & > img {
    width: 20px;
    height: 20px;

    margin: 0 10px 0 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;
