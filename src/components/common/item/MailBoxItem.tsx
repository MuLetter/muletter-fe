import { black } from "@styles/color";
import styled from "styled-components";

export function MailBoxItem() {
  return <MailBoxItemWrap></MailBoxItemWrap>;
}

const MailBoxItemWrap = styled.div`
  position: relative;
  width: 400px;
  height: 250px;

  background: ${black[500]};
`;
