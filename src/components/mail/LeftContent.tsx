import { black } from "@styles/color";
import { fontStyles } from "@styles/font";
import styled from "styled-components";
import { LeftContentProps } from "./types";

function LeftContent({ date }: LeftContentProps) {
  return <DateFont>{date}</DateFont>;
}

const DateFont = styled.p`
  ${fontStyles["p4"]}

  color: ${black[700]}
`;

export { LeftContent };
