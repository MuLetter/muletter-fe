import client from "../client";
import { ResGetSpotifyOAuth } from "./types";

export const getSpotifyOAuth = async () =>
  (await client.get<ResGetSpotifyOAuth>(`/spotify-oauth`)).data;
