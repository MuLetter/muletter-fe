import { Button, TextInput } from "@component/common";
import { H1 } from "@styles/font";
import { AuthForm, ButtonWrap, InputGroup } from "./styles";

export function LoginComponent() {
  return (
    <AuthForm>
      <H1 className="title">로그인</H1>
      <InputGroup>
        <TextInput
          type="text"
          styleTheme="outline-black"
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          type="password"
          styleTheme="outline-black"
          placeholder="비밀번호를 입력해주세요."
        />
      </InputGroup>
      <ButtonWrap>
        <Button type="submit" colorTheme="black">
          로그인
        </Button>
      </ButtonWrap>
    </AuthForm>
  );
}
