import { black } from "@styles/color";
import styled from "styled-components";

export function MapComponent() {
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  position: relative;
  width: 900px;
  height: 450px;

  margin: 0 auto;

  border-radius: 16px;

  background: linear-gradient(90deg, #2880d8 0%, #ac73cf 51.56%, #ee68a4 100%);
  box-shadow: 4px 4px 4px ${black[900]};
  z-index: 2;
`;
