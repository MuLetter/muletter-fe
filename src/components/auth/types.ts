import { JoinForm, LoginForm, SpotifyUser } from "@api/types";
import { UseFormType } from "@common/types";
import { SpotifyToken } from "@store/types";

export interface JoinProps extends UseFormType<JoinForm> {
  oauthUrl?: string | null;
  onSpotifyOAuth?: () => void;
  spotifyToken: SpotifyToken | null;
  spotifyProfile: SpotifyUser | null;
}

export interface LoginProps extends UseFormType<LoginForm> {}

export interface OAuthRedirectQuery {
  code: string;
  state: string;
}
