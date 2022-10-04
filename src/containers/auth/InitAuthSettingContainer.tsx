import { check } from "@api";
import { MailBoxLoading } from "@component/common";
import { authState, initAuthState } from "@store/atom";
import { BounceAnimationCont } from "@styles/block";
import { black } from "@styles/color";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

export function InitAuthSettingContainer() {
  const [, setInitAuth] = useRecoilState(initAuthState);
  const [token, setToken] = React.useState<string | null>(null);
  const setAuth = useSetRecoilState(authState);
  useQuery(["initAuthCheck"], () => check(token!), {
    onSuccess: (data) => {
      setTimeout(() => {
        setAuth(data);
        setInitAuth(true);
      }, 1000);
    },
    onError: () => {
      setInitAuth(true);
    },
    enabled: token !== null,
  });

  React.useEffect(() => {
    if (!localStorage.getItem("muletter-token")) setInitAuth(true);
    else setToken(localStorage.getItem("muletter-token"));
  }, [setInitAuth]);

  return (
    <Wrap>
      <BounceAnimationCont>
        <MailBoxLoading />
      </BounceAnimationCont>
    </Wrap>
  );
}

export const Wrap = styled.div`
  display: flex;

  position: fixed;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;

  background-color: ${black[700]};
`;
