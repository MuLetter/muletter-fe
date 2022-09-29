import { RegistedMailBoxInformation } from "@store/types";
import client from "../client";
import { ResPostMailBox } from "./types";

const BASEPATH = "/mailbox";
export const postMailBox = async (mailBox: RegistedMailBoxInformation) => {
  const formData = new FormData();

  formData.append("title", mailBox.title);
  formData.append("image", mailBox.image);

  return (
    await client.post<ResPostMailBox>(`${BASEPATH}`, formData, {
      headers: {
        authorization: localStorage.getItem("muletter-token")!,
        "content-type": "multipart/form-data",
      },
    })
  ).data;
};
