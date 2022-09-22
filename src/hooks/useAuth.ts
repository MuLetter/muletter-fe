import { check } from "@api";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export function useAuth() {
  const { mutate: checkMutate } = useMutation(check, {
    onSuccess: (data) => {
      console.log("Check", data);
    },
  });
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (token) checkMutate(token);
  }, [token, checkMutate]);

  return setToken;
}
