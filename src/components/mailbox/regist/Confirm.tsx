import { postMailBox, postMailBoxTracks } from "@api";
import { Button, ButtonGroup, MailBoxItem } from "@component/common";
import { ControlMailboxContext, ControlWizardContext } from "@context";
import { useMutation } from "@tanstack/react-query";
import { STrackToITrack } from "@utils";
import React from "react";
import styled from "styled-components";
import { ConfirmControlProps } from "./types";

function Confirm({ next }: ConfirmControlProps) {
  const { closeAction } = React.useContext(ControlMailboxContext);
  const [registedId, setRegistedId] = React.useState<string | null>(null);
  const { content: mailBox, selectedTracks: stracks } =
    React.useContext(ControlWizardContext);

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
        next();
      },
    }
  );

  const onRegist = React.useCallback(() => {
    if (mailBox) {
      closeAction();
      setTimeout(() => {
        postMailBoxMutate(mailBox);
      }, 1000);
    }
  }, [mailBox, closeAction, postMailBoxMutate]);

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
