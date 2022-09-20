import { fontStyles } from "@styles/font";
import styled from "styled-components";
import { textInputTheme } from "./styles";
import { TextInputStyleProps } from "./types";

export const TextInput = styled.input<TextInputStyleProps>`
  display: block;
  width: 100%;
  padding: 0 12px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;

  ${fontStyles["p2"]}
  ${({ styleTheme }) =>
    styleTheme ? textInputTheme[styleTheme] : textInputTheme["fill"]};
`;
