import { Button } from "@component/common";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import Status from "./Status";

function ProfileAndStatus() {
  const navigate = useNavigate();

  const toRegist = React.useCallback(() => {
    navigate("/mailbox/regist");
  }, [navigate]);

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
