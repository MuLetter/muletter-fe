import { white } from "@styles/color";
import styled from "styled-components";

export function Content() {
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  position: relative;
  width: 996px;
  height: calc(100vh - 200px - 120px - 450px + 160px);
  min-height: 420px;

  margin: 0 auto;
  transform: translateY(-120px);

  background: ${white[900]};
  border-radius: 16px;

  z-index: 1;
`;
