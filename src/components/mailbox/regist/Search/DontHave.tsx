import { Mail2DLetter } from "@asset/symbols";
import { OpacityAni } from "@styles/block";
import { H5 } from "@styles/font";
import styled from "styled-components";

function DontHave() {
  return (
    <Wrap>
      <H5>음악을 등록해주세요.</H5>
      <Mail2DLetter />
    </Wrap>
  );
}

const Wrap = styled.div`
  perspective: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0 0;

  row-gap: 24px;
  height: 100%;

  animation: ${OpacityAni} 0.3s linear;

  & svg {
    transform-origin: 50% 50%;
    transform: rotateX(25deg) rotateY(-25deg) rotateZ(25deg);
  }
`;

export default DontHave;
