import { black, white } from "@styles/color";
import { H3, P2 } from "@styles/font";
import styled from "styled-components";
import OutlineLogo from "./OutlineLogo";

export function Footer() {
  return (
    <Container>
      <BackLogo>
        <OutlineLogo />
      </BackLogo>
      <CenterColor />
      <FrontLogo>
        <H3 className="title">MuLetter</H3>
        <P2 className="copyright">
          ©2022. iamformegusto. all rights reserved.
        </P2>
      </FrontLogo>
    </Container>
  );
}

const Container = styled.footer`
  position: relative;
  height: 200px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const BackLogo = styled.div`
  display: flex;
`;
const CenterColor = styled.div`
  background-color: ${black[900]};
`;
const FrontLogo = styled.div`
  color: ${white[500]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  & > .title {
    font-weight: bold;
  }
`;
