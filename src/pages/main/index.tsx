import { MainContainer } from "@container";
import { authState } from "@store/atom";
import { white } from "@styles/color";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

export function MainPage() {
  const auth = useRecoilValue(authState);

  React.useEffect(() => {
    console.log("auth", auth);
  }, [auth]);

  return (
    <Screen>
      <MainContainer />
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;

  & .title {
    color: ${white[500]};
    letter-spacing: -0.05em;
  }
`;
