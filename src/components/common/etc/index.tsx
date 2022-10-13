import { white } from "@styles/color";
import { Tag1 } from "@styles/font";
import styled from "styled-components";
import { verticalTextItemPosition } from "./styles";
import {
  VerticalTextItemControlProps,
  VerticalTextItemStyleProps,
} from "./types";

// export * from "./Audio";
export function VerticalTextItem({
  text,
  ...styleProps
}: VerticalTextItemControlProps & VerticalTextItemStyleProps) {
  return (
    <VerticalTextItemWrap {...styleProps}>
      <Tag1>{text}</Tag1>
    </VerticalTextItemWrap>
  );
}

export const VerticalTextItemWrap = styled.div<VerticalTextItemStyleProps>`
  width: 80px;
  height: 100%;
  color: ${white[500]};
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    ${({ position }) =>
      position
        ? verticalTextItemPosition[position]
        : verticalTextItemPosition["left"]};
  }
`;
