import client from "@api/client";
import { ResDisLike, ResLike, ResMail } from "./types";

const BASEPATH = "/mail";

export const getMail = async (id: string) =>
  (
    await client.get<ResMail>(`${BASEPATH}/${id}`, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;

export const likeMusic = async (data: ResLike) =>
  (
    await client.patch(`${BASEPATH}/like`, data, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;

export const disLikeMusic = async (data: ResDisLike) =>
  (
    await client.patch(`${BASEPATH}/dislike`, data, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;
