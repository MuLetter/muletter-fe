import { Logo } from "@asset/logo";
import { authState } from "@store/atom";
import { white } from "@styles/color";
import { fontStyles } from "@styles/font";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Button, ButtonGroup } from "../button";
import Nav from "./Nav";

export function Header() {
  const auth = useRecoilValue(authState);

  console.log(auth);

  return (
    <Container>
      <Block className="left">
        <Link to="/" className="logo">
          <Logo />
        </Link>
      </Block>
      <Block className="right">
        {auth ? (
          <Nav nickname={auth.nickname} />
        ) : (
          <ButtonGroup>
            <Link to="/auth">
              <Button colorTheme="black">로그인</Button>
            </Link>
            <Link to="/auth/join">
              <Button colorTheme="black">회원가입</Button>
            </Link>
          </ButtonGroup>
        )}
      </Block>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  width: 100vw;
  min-height: 120px;

  padding: 0 80px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;

  z-index: 250;
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
