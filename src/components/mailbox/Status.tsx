import React from "react";
import styled from "styled-components";
import { BsMailbox } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
import { white } from "@styles/color";
import { P3 } from "@styles/font";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "@api";

function StatusItem({ children }: React.PropsWithChildren<any>) {
  return <ItemBlock>{children}</ItemBlock>;
}

function Status() {
  const { data: myInfo } = useQuery(["getMyInfo"], getInfo);
  return (
    <Block>
      {myInfo && (
        <>
          <StatusItem>
            <BsMailbox size={36} />
            <P3>{myInfo.count.mailBox} 개</P3>
          </StatusItem>
          <StatusItem>
            <GrMailOption size={36} />
            <P3>{myInfo.count.mail} 개</P3>
          </StatusItem>
        </>
      )}
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

  color: ${white[500]};

  & * {
    stroke: ${white[500]};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;

export default Status;
