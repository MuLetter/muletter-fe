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
  justify-content: center;
  align-items: center;

  height: 1500px;
`;
