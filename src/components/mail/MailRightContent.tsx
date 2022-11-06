import { likeMusic } from "@api";
import { IconButton } from "@component/common";
import React from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import styled from "styled-components";
import { MailRightContentProps } from "./types";

function MailRightContent({ isLike, track, mailBoxId }: MailRightContentProps) {
  const [like, setLike] = React.useState<boolean>(isLike ? isLike : false);
  const changeLike = React.useCallback(() => {
    likeMusic({
      mailBoxId: mailBoxId,
      track: track,
      isLike: !like,
    }).catch(() => {
      setLike((prev) => !prev);
    });
    setLike(!like);
  }, [like, mailBoxId, track]);

  return (
    <IconGroup>
      <IconButton onClick={changeLike} colorTheme="black">
        {like ? <BsSuitHeartFill /> : <BsSuitHeart />}
      </IconButton>
    </IconGroup>
  );
}

export const IconGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 96px;
`;

export { MailRightContent };
