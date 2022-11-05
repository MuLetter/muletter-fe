import { patchReactiveMailbox } from "@api";
import { IconButton } from "@component/common";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import styled from "styled-components";
import { ReactiveBoxProps } from "./types";

function ReactiveBox({ mailbox }: ReactiveBoxProps) {
  const [like, setLike] = React.useState<boolean>(
    mailbox.isLike ? mailbox.isLike : false
  );
  const { mutate: reactiveMutate } = useMutation(
    ["reactiveMutation"],
    async (isLike: boolean) =>
      await patchReactiveMailbox({ id: mailbox._id, isLike }),
    {
      onSuccess: () => {
        setLike((prev) => !prev);
      },
    }
  );

  const reactive = React.useCallback(() => {
    reactiveMutate(!like);
  }, [like, reactiveMutate]);

  return (
    <Wrap>
      {like ? (
        <IconButton onClick={reactive}>
          <AiFillLike />
        </IconButton>
      ) : (
        <IconButton>
          <AiOutlineLike onClick={reactive} />
        </IconButton>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;

  row-gap: 4px;
`;

export default ReactiveBox;
