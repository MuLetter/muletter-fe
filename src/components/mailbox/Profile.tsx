import { authState } from "@store/atom";
import { white } from "@styles/color";
import { P1 } from "@styles/font";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function Profile() {
  const auth = useRecoilValue(authState);

  return (
    <Block>
      <P1>{auth!.username}</P1>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  padding: 24px 0 28px;
  box-sizing: border-box;

  color: ${white[500]};

  & > p {
    font-weight: bold;
  }

  background: ${white[900]};
  border-radius: 8px;
`;

export default Profile;
