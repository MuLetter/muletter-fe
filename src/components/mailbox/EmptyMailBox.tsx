import { Button, MailBoxLoading } from "@component/common";
import { white } from "@styles/color";
import { H5, P2 } from "@styles/font";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function EmptyMailBox() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <H5>등록된 우체통이 없습니다!</H5>
      <MailBoxLoading isDontAni />
      <P2>지금 우체통을 등록하시고, 노래를 추천받아보세요!</P2>
      <Button colorTheme="outline" onClick={() => navigate("/mailbox/regist")}>
        우체통 등록하기
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${white[500]};

  & > button {
    width: 320px;
  }

  & > h5 {
    margin: 0 0 4px;
  }

  & > p {
    margin: 24px 0 16px;
  }
`;

export default EmptyMailBox;
