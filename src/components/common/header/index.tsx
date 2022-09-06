import { white } from "@styles/color";
import { fontStyles } from "@styles/font";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonGroup } from "../button";

export function Header() {
  return (
    <Container>
      <Block className="left">
        <Link to="/" className="logo">
          MuLetter
        </Link>
      </Block>
      <Block className="right">
        <ButtonGroup>
          <Button colorTheme="black">로그인</Button>
          <Button colorTheme="black">회원가입</Button>
        </ButtonGroup>
      </Block>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  min-height: 120px;

  padding: 0 80px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Block = styled.div`
  & > .logo {
    display: inline-block;

    ${fontStyles["h3"]}
    color: ${white[500]};
    font-weight: 900;
  }

  &.left {
    flex: 1;
  }

  &.right {
  }
`;
