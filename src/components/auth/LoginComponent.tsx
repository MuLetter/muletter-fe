import { Button, TextInput } from "@component/common";
import { H1 } from "@styles/font";
import { AuthForm, ButtonWrap, InputGroup } from "./styles";
import { LoginProps } from "./types";

export function LoginComponent({ register, onSubmit }: LoginProps) {
  return (
    <AuthForm onSubmit={onSubmit}>
      <H1 className="title">로그인</H1>
      <InputGroup>
        <TextInput
          type="text"
          styleTheme="outline-black"
          placeholder="아이디를 입력해주세요."
          {...register("username")}
        />
        <TextInput
          type="password"
          styleTheme="outline-black"
          placeholder="비밀번호를 입력해주세요."
          {...register("password")}
        />
      </InputGroup>
      <ButtonWrap marginTop={40}>
        <Button type="submit" colorTheme="black">
          로그인
        </Button>
      </ButtonWrap>
    </AuthForm>
  );
}
