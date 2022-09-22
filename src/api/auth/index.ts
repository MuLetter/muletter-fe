import client from "../client";
import { JoinForm, LoginForm, ResPostAuth } from "./types";

const BASEPATH = "/auth";

export const login = async (loginForm: LoginForm) =>
  (await client.post<ResPostAuth>(`${BASEPATH}`, loginForm)).data;
export const join = async (joinForm: JoinForm) =>
  (await client.post<ResPostAuth>(`${BASEPATH}/join`, joinForm)).data;
export const check = async (token: string) =>
  (
    await client.get(`${BASEPATH}`, {
      headers: {
        authorization: token,
      },
    })
  ).data;
