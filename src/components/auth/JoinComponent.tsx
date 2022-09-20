import { Button, TextInput } from "@component/common";
import { H1 } from "@styles/font";
import { AuthForm, ButtonWrap, InputGroup } from "./styles";

export function JoinComponent() {
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
      <ButtonWrap>
        <Button type="submit" colorTheme="black">
          가입하기
        </Button>
      </ButtonWrap>
    </AuthForm>
  );
}
