import { ITrack } from "@store/types";
import client from "../client";
import {
  PostOAuthBakParams,
  ResGetSpotifyOAuth,
  ResGetSpotifyOAuthToken,
} from "./types";

export const getSpotifyOAuth = async () =>
  (await client.get<ResGetSpotifyOAuth>(`/spotify-oauth`)).data;

export const getSpotifyOAuthToken = async (search: string) =>
  (await client.get<ResGetSpotifyOAuthToken>(`/spotify-oauth/token${search}`))
    .data;

export const postOAuthBak = async ({ state, data }: PostOAuthBakParams) =>
  (await client.post(`/spotify-oauth/${state}`, data)).data;

export const getServiceInfo = async () => (await client.get("/service")).data;

export const getSample = async (size: number) =>
  (await client.get<ITrack[]>(`/random-music?size=${size}`)).data;
