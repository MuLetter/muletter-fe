import axios from "axios";
import { ResSearch } from "./types";
import qs from "qs";

const APIURL = process.env.REACT_APP_SPOTIFY_API_URL;
export const getSearch = async (token: string, q: string, page: number) =>
  (
    await axios.get<ResSearch>(
      `${APIURL}/search?${qs.stringify({
        q,
        type: "track",
        market: "KR",
        limit: 10,
        offset: page * 10,
      })}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
