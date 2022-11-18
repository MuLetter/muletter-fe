import { LetterLoading, MailBoxLoading } from "@component/common";
import { black } from "@styles/color";
import React from "react";
import styled from "styled-components";

export function LoadingPresentation() {
  const [isTwo, setIsTwo] = React.useState<boolean>(false);

  React.useEffect(() => {
    setInterval(() => {
      setIsTwo((prev) => !prev);
    }, 3000);
  }, []);

  return isTwo ? (
    <Wrap>
      <MailBoxLoading />
    </Wrap>
  ) : (
    <LetterLoading />
  );
}

const Wrap = styled.div`
  display: flex;

  position: fixed;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;

  background-color: ${black[700]};
`;
