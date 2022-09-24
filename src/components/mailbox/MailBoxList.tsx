import { white } from "@styles/color";
import styled from "styled-components";

function MailBoxList() {
  return <Block></Block>;
}

const Block = styled.div`
  flex: 1;
  height: 500px;

  background: ${white[900]};
  border-radius: 8px;
`;

export default MailBoxList;
