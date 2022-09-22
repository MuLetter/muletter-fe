import { JoinForm, LoginForm } from "@api/types";
import { UseFormType } from "@common/types";

export interface JoinProps extends UseFormType<JoinForm> {
  oauthUrl?: string | null;
  onSpotifyOAuth?: () => void;
}

export interface LoginProps extends UseFormType<LoginForm> {}

export interface OAuthRedirectQuery {
  code: string;
  state: string;
}
