import { white } from "@styles/color";
import { fontStyles } from "@styles/font";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Header() {
  return (
    <Container>
      <Block className="left">
        <Link to="/" className="logo">
          MuLetter
        </Link>
      </Block>
      <Block className="right"></Block>
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
  & > div {
    flex: 1;
  }
`;

const Block = styled.div`
  & > .logo {
    display: inline-block;

    ${fontStyles["h3"]}
    color: ${white[500]};
    font-weight: 900;

    margin: 32px 0 0;
  }

  &.left {
  }

  &.right {
  }
`;
