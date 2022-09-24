import { check } from "@api";
import { authState } from "@store/atom";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

export function useAuth() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  const { mutate: checkMutate } = useMutation(check, {
    onSuccess: (data) => {
      setAuth(data);
    },
  });
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (token) checkMutate(token);
  }, [token, checkMutate]);

  React.useEffect(() => {
    if (auth)
      navigate("/", {
        replace: true,
      });
  }, [auth, navigate]);

  return setToken;
}
