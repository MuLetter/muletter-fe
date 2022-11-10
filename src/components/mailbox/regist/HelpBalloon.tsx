import styled from "styled-components";

function HelpBalloon() {
  return (
    <Wrap xmlns="http://www.w3.org/2000/svg">
      <path
        d="
      M 0 10
      L 0 38
      C 0 38 0 48 8 48
      L 242 48
      C 242 48 250 48 250 38
      L 250 10
      C 250 10 250 0 242 0
      L 8 0
      C 
      "
      />
    </Wrap>
  );
}

const Wrap = styled.svg`
  & > path {
    width: 250px;
    height: 64px;
    fill: none;

    stroke: #fff;
    stroke-width: 2px;
  }
`;

export { HelpBalloon };
