import { Button, ButtonGroup, MailBoxItem } from "@component/common";
import styled from "styled-components";

function Confirm() {
  return (
    <ConfirmWrap>
      <MailBoxItem />
      <ButtonGroup>
        <Button colorTheme="outline">이전으로</Button>
        <Button colorTheme="outline">등록하기</Button>
      </ButtonGroup>
    </ConfirmWrap>
  );
}

const ConfirmWrap = styled.div`
  margin: 64px 0 0;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  row-gap: 48px;
`;

export default Confirm;
