import { white } from "@styles/color";
import React from "react";
import styled from "styled-components";

function StatusItem({ children }: React.PropsWithChildren<any>) {
  return <ItemBlock>{children}</ItemBlock>;
}

function Status() {
  return (
    <Block>
      <StatusItem></StatusItem>
      <StatusItem></StatusItem>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;

  margin: 16px 0 0;

  display: flex;
  flex-direction: row;

  column-gap: 12px;
`;

const ItemBlock = styled.div`
  flex: 1;

  height: 62px;
  background: ${white[900]};
  border-radius: 8px;
`;

export default Status;
