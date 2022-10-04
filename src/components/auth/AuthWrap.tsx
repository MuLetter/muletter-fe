import { authState } from "@store/atom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export function AuthWrap({ children }: React.PropsWithChildren<any>) {
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth) {
      alert("로그인이 필요한 서비스 입니다.");
      navigate("/auth", { replace: true });
    }
  }, [navigate, auth]);

  if (!auth) {
    return <></>;
  }

  return <>{children}</>;
}
