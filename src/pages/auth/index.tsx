import { Button } from "@component/common";
import { JoinContainer, LoginContainer } from "@container";
import { H3, P2 } from "@styles/font";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AuthBoard, FormWrap, NavItem } from "./styles";

export function AuthPage() {
  const { pathname } = useLocation();

  return (
    <AuthBoard>
      <NavItem>
        <H3 className="title">계정이 있으신가요?</H3>
        <P2 className="description">
          오늘은 어떤 노래들이 편지에 적혀있을까요?
          <br />
          로그인 후 확인해보세요.
        </P2>
        <Link to="/auth">
          <Button colorTheme="outline">로그인</Button>
        </Link>
      </NavItem>
      <NavItem>
        <H3 className="title">계정이 없으신가요?</H3>
        <P2 className="description">
          서비스를 이용하기 위해서는 계정이 필요합니다.
          <br />
          가입을 진행해주세요.
        </P2>
        <Link to="/auth/join">
          <Button colorTheme="outline">회원가입</Button>
        </Link>
      </NavItem>
      <FormWrap className={`${pathname.includes("join") ? "join" : "login"}`}>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </FormWrap>
    </AuthBoard>
  );
}

export function LoginPage() {
  return <LoginContainer />;
}

export function JoinPage() {
  return <JoinContainer />;
}
