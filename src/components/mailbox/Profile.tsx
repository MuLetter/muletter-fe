import { authState } from "@store/atom";
import { black, white } from "@styles/color";
import { P1, Tag1 } from "@styles/font";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@component/common";
import { LogoWhite } from "@asset/spotify";

function Profile() {
  const auth = useRecoilValue(authState);

  return (
    <Block>
      <Image>
        <AiOutlineUser />
      </Image>
      <P1 className="username">{auth!.username}</P1>
      {auth?.spotifyToken.isExpires ? (
        <Tag1 className="spotify-notify">
          Spotify 계정 연동시간이 만료되었습니다.
        </Tag1>
      ) : (
        <Tag1 className="spotify-notify">
          Spotify 계정을 연결하시면,
          <br />
          스트리밍 서비스를 이용하실 수 있습니다.
        </Tag1>
      )}

      <Button type="button" colorTheme="black" size="m">
        <img src={LogoWhite} alt="spotify-logo-white" />
        <span>Spotify 계정 연동하기</span>
      </Button>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 28px;
  box-sizing: border-box;

  color: ${white[500]};

  background: ${white[900]};
  border-radius: 8px;

  & > .spotify-notify {
    margin: 24px 0 10px;
    width: 248px;
    color: ${black[500]};
    padding: 0 8px;

    box-sizing: border-box;
  }

  & > button {
    margin: 0;
    width: 248px;

    display: flex;
    align-items: center;
  }
`;

const Image = styled.div`
  width: 150px;
  height: 150px;

  & > * {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  border-radius: 75px;
  border: 2px solid ${white[700]};
  margin: 0 0 12px;
  box-sizing: border-box;
  overflow: hidden;
`;

export default Profile;
