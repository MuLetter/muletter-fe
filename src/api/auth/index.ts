import { IAuth } from "@store/types";
import client from "../client";
import { JoinForm, LoginForm, ResGetInfo, ResPostAuth } from "./types";

const BASEPATH = "/auth";

export const login = async (loginForm: LoginForm) =>
  (await client.post<ResPostAuth>(`${BASEPATH}`, loginForm)).data;
export const join = async (joinForm: JoinForm) =>
  (await client.post<ResPostAuth>(`${BASEPATH}/join`, joinForm)).data;
export const check = async (token: string) =>
  (
    await client.get<IAuth>(`${BASEPATH}`, {
      headers: {
        authorization: token,
      },
    })
  ).data;
export const getInfo = async () =>
  (
    await client.get<ResGetInfo>(`${BASEPATH}/info`, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;
export const uploadProfile = async (formData: FormData) =>
  (
    await client.post(`${BASEPATH}/profile`, formData, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
        "content-type": "multipart/form-data",
      },
    })
  ).data;
