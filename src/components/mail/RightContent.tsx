import { IconButton } from "@component/common";
import styled from "styled-components";
import { MdOutlineHeadphones, MdForwardToInbox } from "react-icons/md";
import { RightContentProps } from "./types";

function RightContent({ onPlay, onReply }: RightContentProps) {
  return (
    <Wrap>
      <IconButton onClick={onReply} colorTheme="black">
        <MdForwardToInbox />
      </IconButton>
      <IconButton onClick={onPlay} colorTheme="black">
        <MdOutlineHeadphones />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
`;

export { RightContent };
