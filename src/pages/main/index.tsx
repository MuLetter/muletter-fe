import { MailBox3D } from "@asset/symbols";
import styled from "styled-components";

export function MainPage() {
  return (
    <Screen>
      <MailBox3D />
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 600px;
`;
