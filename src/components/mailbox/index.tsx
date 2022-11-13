import styled from "styled-components";
import MailBoxList from "./MailBoxList";
import ProfileAndStatus from "./ProfileAndStatus";

export * from "./regist";
export * from "./detail";
export function MailBoxComponent() {
  return (
    <Block>
      <ProfileAndStatus />
      <MailBoxList />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  padding: 0 0 24px;
  margin: 78px 0 120px;

  min-width: 1280px;
  max-width: 1440px;
`;
