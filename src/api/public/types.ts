import { SpotifyToken, SpotifyUser } from "@api/types";

export interface OAuthMemoryData {
  [key: string]: any;
  pathname: string;
}

export interface OAuthMemory {
  state: string;
  data?: OAuthMemoryData;
}

export interface ResGetSpotifyOAuth {
  url: string;
  memory: OAuthMemory;
}

export interface ResGetSpotifyOAuthToken {
  spotifyToken: SpotifyToken;
  spotifyProfile: SpotifyUser;
  memory: OAuthMemory;
}

export interface PostOAuthBakParams {
  state: string;
  data: any;
}
