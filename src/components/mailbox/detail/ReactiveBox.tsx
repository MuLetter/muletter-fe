import { IconButton } from "@component/common";
import { AiOutlineLike, AiOutlineBook } from "react-icons/ai";
import styled from "styled-components";

function ReactiveBox() {
  return (
    <Wrap>
      <IconButton>
        <AiOutlineLike />
      </IconButton>
      <IconButton>
        <AiOutlineBook />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;

  row-gap: 4px;
`;

export default ReactiveBox;
