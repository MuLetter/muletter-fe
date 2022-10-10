import client from "@api/client";
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
