import { Button } from "@component/common";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import Status from "./Status";

function ProfileAndStatus() {
  return (
    <Block>
      <Profile />
      <Status />
      <Link to="/mailbox/regist">
        <Button colorTheme="outline">우체통 등록하기</Button>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  a {
    display: inline-block;

    width: 190px;
    margin: 32px 0 0;

    & > button {
      width: 100%;
    }
  }
`;

export default ProfileAndStatus;
