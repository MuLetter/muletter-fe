export interface JoinProps {
  oauthUrl?: string | null;
  onSpotifyOAuth?: () => void;
}

export interface OAuthRedirectQuery {
  code: string;
  state: string;
}
