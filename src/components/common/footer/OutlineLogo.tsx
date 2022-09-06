import { white } from "@styles/color";
import styled from "styled-components";

function OutlineLogo() {
  return (
    <SVG xmlns="https://www.w3.org/2000/svg" width="100%" height="100%">
      <LogoText x="0px" y="196">
        MuLetter
      </LogoText>
      <LogoText x="50%" y="196">
        MuLetter
      </LogoText>
    </SVG>
  );
}

const SVG = styled.svg`
  display: flex;
`;

const LogoText = styled.text`
  font-size: 196px;
  font-weight: 700;
  line-height: 225px;
  letter-spacing: 0.05em;

  fill: transparent;
  stroke: ${white[700]};
  stroke-width: 2px;
`;

export default OutlineLogo;
