export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: number;
  scope?: string;
}

export interface IAuth {
  id: string;
  username: string;
  nickname: string;
  spotifyToken: SpotifyToken;
}
