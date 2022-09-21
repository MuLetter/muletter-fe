import { MainContainer } from "@container";
import { white } from "@styles/color";
import styled from "styled-components";

export function MainPage() {
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
