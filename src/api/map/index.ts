import client from "@api/client";
import { IMailBox } from "@store/types";
import { ResGetMap } from "./types";

const BASEPATH = "/map";

export const getMap = async () =>
  (
    await client.get<ResGetMap>(`${BASEPATH}`, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;

export const getMailBoxByMap = async () =>
  (
    await client.get<IMailBox[]>(`${BASEPATH}/mailbox`, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;
