import { postMailBox, postMailBoxTracks } from "@api";
import { Button, ButtonGroup, MailBoxItem } from "@component/common";
import { registedMailBoxState, selectTracksState } from "@store/atom";
import { useMutation } from "@tanstack/react-query";
import { STrackToITrack } from "@utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function Confirm() {
  const [registedId, setRegistedId] = React.useState<string | null>(null);
  const mailBox = useRecoilValue(registedMailBoxState);
  const stracks = useRecoilValue(selectTracksState);
  const navigate = useNavigate();

  const { mutate: postMailBoxMutate } = useMutation(
    ["postMailBox"],
    postMailBox,
    {
      onSuccess: (data) => {
        console.log("postMailBox", data);
        setRegistedId(data._id);
      },
    }
  );
  const { mutate: postMailBoxTracksMutate } = useMutation(
    ["postMailBoxTrack"],
    postMailBoxTracks,
    {
      onSuccess: (data) => {
        console.log("postMailBoxTracks", data);
        navigate("/mailbox", { replace: true });
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

      postMailBoxTracksMutate({
        id: registedId,
        tracks,
      });
    }
  }, [registedId, stracks, postMailBoxTracksMutate]);

  return (
    <>
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
    </>
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
