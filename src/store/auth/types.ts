import { SpotifyUser } from "@api/types";

export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: number;
  scope?: string;
  isExpires?: boolean;
}

export interface IAuth {
  id: string;
  username: string;
  nickname: string;
  profile?: string;
  spotifyProfile?: SpotifyUser;
  spotifyToken: SpotifyToken;
}
