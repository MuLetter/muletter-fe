import { check } from "@api";
import { authState } from "@store/atom";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useSetRecoilState } from "recoil";

export function useAuth() {
  const setAuth = useSetRecoilState(authState);
  const { mutate: checkMutate } = useMutation(check, {
    onSuccess: (data) => {
      setAuth(data);
    },
  });
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (token) checkMutate(token);
  }, [token, checkMutate]);

  return setToken;
}
