import { LogoWhite } from "@asset/spotify";
import { Button, TextInput } from "@component/common";
import { H1, Tag1 } from "@styles/font";
import { AuthForm, ButtonWrap, InputGroup } from "./styles";
import { JoinProps } from "./types";

export function JoinComponent({ oauthUrl, onSpotifyOAuth }: JoinProps) {
  return (
    <AuthForm>
      <H1 className="title">회원가입</H1>
      <InputGroup>
        <TextInput
          type="text"
          styleTheme="outline-black"
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          type="text"
          styleTheme="outline-black"
          placeholder="닉네임을 입력해주세요."
        />
        <TextInput
          type="password"
          styleTheme="outline-black"
          placeholder="비밀번호를 입력해주세요."
        />
      </InputGroup>
      <ButtonWrap marginTop={24}>
        <Tag1>
          Spotify 계정을 연결하시면,
          <br />
          스트리밍 서비스를 이용하실 수 있습니다.
        </Tag1>
        <Button
          type="button"
          colorTheme="black"
          size="m"
          disabled={!oauthUrl}
          onClick={oauthUrl ? onSpotifyOAuth : undefined}
        >
          <img src={LogoWhite} alt="spotify-logo-white" />
          <span>Spotify 계정 연동하기</span>
        </Button>
      </ButtonWrap>
      <ButtonWrap marginTop={32}>
        <Button type="submit" colorTheme="black">
          가입하기
        </Button>
      </ButtonWrap>
    </AuthForm>
  );
}
