import { postMailBox } from "@api/mailbox";
import { Button, ButtonGroup, MailBoxItem } from "@component/common";
import { registedMailBoxState, selectTracksState } from "@store/atom";
import { useMutation } from "@tanstack/react-query";
import { STrackToITrack } from "@utils";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function Confirm() {
  const [registedId, setRegistedId] = React.useState<string | null>(null);
  const mailBox = useRecoilValue(registedMailBoxState);
  const stracks = useRecoilValue(selectTracksState);

  const { mutate: postMailBoxMutate } = useMutation(
    ["postMailBox"],
    postMailBox,
    {
      onSuccess: (data) => {
        console.log(data);

        setRegistedId(data.id);
      },
    }
  );

  const onRegist = React.useCallback(() => {
    if (mailBox) {
      postMailBoxMutate(mailBox);
    }
  }, [mailBox, postMailBoxMutate]);

  React.useEffect(() => {
    if (registedId) {
      const tracks = STrackToITrack(stracks);

      console.log(tracks);
    }
  }, [registedId, stracks]);

  return (
    <ConfirmWrap>
      <MailBoxItem
        mailBox={{ title: mailBox!.title, image: mailBox!.imageLinkBak }}
        tracks={stracks}
        isAutoOpen
      />
      <ButtonGroup>
        <Button type="button" colorTheme="outline" onClick={onRegist}>
          등록하기
        </Button>
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
