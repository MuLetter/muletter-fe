import { SpotifyToken } from "@store/types";

export interface LoginForm {
  username: string;
  password: string;
}

export interface JoinForm extends LoginForm {
  nickname: string;
  spotifyToken?: SpotifyToken;
}

export interface ResPostAuth {
  token: string;
}

export interface ResGetInfo {
  count: {
    mail: number;
    mailBox: number;
  };
}

export interface ResPostProfile {
  profile: string;
}
