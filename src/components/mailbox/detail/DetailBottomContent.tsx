import styled from "styled-components";
import ReactiveBox from "./ReactiveBox";
import { SmallMusicItem } from "./SmallMusicItem";
import { DetailBottomContentProps } from "./types";

function DetailBottomContent({ tracks, isMe }: DetailBottomContentProps) {
  return (
    <Wrap>
      {isMe && <ReactiveBox />}
      <SmallMusicItem tracks={tracks} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export { DetailBottomContent };
