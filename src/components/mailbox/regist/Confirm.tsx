import { Button, ButtonGroup, MailBoxItem } from "@component/common";
import { registedMailBoxState, selectTracksState } from "@store/atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function Confirm() {
  const mailBox = useRecoilValue(registedMailBoxState);
  const tracks = useRecoilValue(selectTracksState);

  return (
    <ConfirmWrap>
      <MailBoxItem
        mailBox={{ title: mailBox!.title, image: mailBox!.imageLinkBak }}
        tracks={tracks!}
        isAutoOpen
      />
      <ButtonGroup>
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

  row-gap: 72px;
`;

export default Confirm;
