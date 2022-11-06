import client from "@api/client";
import { ITrack } from "@store/types";
import { ResLike, ResMail } from "./types";

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
  client.patch(`${BASEPATH}/${data.isLike ? "like" : "dislike"}`, data, {
    headers: {
      authorization: localStorage.getItem("muletter-token")!,
    },
  });

export const replyMail = async (id: string) =>
  (
    await client.post<ITrack[]>(
      `${BASEPATH}/reply/${id}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("muletter-token")!,
        },
      }
    )
  ).data;
