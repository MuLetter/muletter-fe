import styled from "styled-components";
import ReactiveBox from "./ReactiveBox";
import { SmallMusicItem } from "./SmallMusicItem";
import { SmallMusicItemProps } from "./types";

function DetailBottomContent({ tracks }: SmallMusicItemProps) {
  return (
    <Wrap>
      <ReactiveBox />
      <SmallMusicItem tracks={tracks} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export { DetailBottomContent };
