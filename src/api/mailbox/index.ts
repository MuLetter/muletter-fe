import { RegistedMailBoxInformation } from "@store/types";
import client from "../client";
import { ReqPostMailBoxTrackParams, ResPostMailBox } from "./types";

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

export const postMailBoxTracks = async ({
  id,
  tracks,
}: ReqPostMailBoxTrackParams) =>
  (
    await client.post<any>(
      `${BASEPATH}/${id}`,
      {
        tracks,
      },
      {
        headers: {
          authorization: localStorage.getItem("muletter-token")!,
        },
      }
    )
  ).data;
