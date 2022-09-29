import { Button } from "@component/common";
import { registedMailBoxState, selectTracksState } from "@store/atom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Profile from "./Profile";
import Status from "./Status";

function ProfileAndStatus() {
  const setMailBox = useSetRecoilState(registedMailBoxState);
  const setTracks = useSetRecoilState(selectTracksState);
  const navigate = useNavigate();

  const toRegist = React.useCallback(() => {
    setMailBox(null);
    setTracks([]);
    navigate("/mailbox/regist");
  }, [setMailBox, setTracks, navigate]);

  return (
    <Block>
      <Profile />
      <Status />
      <Button type="button" colorTheme="outline" onClick={toRegist}>
        우체통 등록하기
      </Button>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  button {
    display: inline-block;

    width: 190px;
    margin: 32px 0 0;
    width: 100%;
  }
`;

export default ProfileAndStatus;
