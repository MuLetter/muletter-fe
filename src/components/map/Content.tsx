import { white } from "@styles/color";
import _ from "lodash";
import styled from "styled-components";
import ContentItem from "./ContentItem";
import { ContentProps } from "./types";

export function Content({ mailBoxes }: ContentProps) {
  return (
    <Wrap>
      <Block>
        {_.map(mailBoxes, (mailBox) => (
          <ContentItem key={mailBox._id} mailBox={mailBox} />
        ))}
      </Block>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 172px 48px 80px;

  position: relative;
  width: 996px;
  height: calc(100vh - 200px - 120px - 450px + 160px);
  min-height: 420px;

  margin: 0 auto;
  transform: translateY(-120px);

  background: ${white[900]};
  border-radius: 16px;
  box-sizing: border-box;

  z-index: 1;

  overflow-y: scroll;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;
`;
