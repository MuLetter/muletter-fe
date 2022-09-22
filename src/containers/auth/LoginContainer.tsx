import { login } from "@api";
import { LoginForm } from "@api/types";
import { LoginComponent } from "@component";
import { useAuth } from "@hooks";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export function LoginContainer() {
  const setToken = useAuth();
  const { register, handleSubmit } = useForm<LoginForm>();
  const { mutate: loginMutate } = useMutation(login, {
    onSuccess: ({ token }) => {
      setToken(token);
    },
  });
  const onSubmit: SubmitHandler<LoginForm> = React.useCallback(
    (data) => {
      loginMutate(data);
    },
    [loginMutate]
  );

  return (
    <LoginComponent register={register} onSubmit={handleSubmit(onSubmit)} />
  );
}
