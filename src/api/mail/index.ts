import client from "@api/client";

const BASEPATH = "/mail";

export const getMail = async (id: string) =>
  (
    await client.get(`${BASEPATH}/${id}`, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
      },
    })
  ).data;
