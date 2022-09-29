export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: number;
  scope: string;
}

export interface SpotifyUser {
  display_name: string;
  email: string;
  external_urls: SExternalUrls;
  followers: SFollowers;
  href: string;
  id: string;
  images: SAlbumImage[];
  type: string;
  uri: string;
}

export interface SExternalUrls {
  spotify: string;
}

export interface SFollowers {
  href: null;
  total: number;
}

export interface SImage {
  height: number;
  url: string;
  width: number;
}

export interface ResSearch {
  tracks: STracks;
}

export interface STracks {
  href: string;
  items: STrack[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface STrack {
  album: SAlbum;
  artists: SArtist2[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SExternalIds;
  external_urls: SExternalUrls4;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  label?: number;
}

export interface SArtist {
  external_urls: SExternalUrls;
  followers: SArtistFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SArtistFollowers {
  href: any;
  total: number;
}

export interface SAlbum {
  album_type: string;
  artists: SArtist1[];
  external_urls: SExternalUrls2;
  href: string;
  id: string;
  images: SImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface SArtist1 {
  external_urls: SExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SExternalUrls {
  spotify: string;
}

export interface SExternalUrls2 {
  spotify: string;
}

export interface SAlbumImage {
  height: number;
  url: string;
  width: number;
}

export interface SArtist2 {
  external_urls: SExternalUrls3;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SExternalUrls3 {
  spotify: string;
}

export interface SExternalIds {
  isrc: string;
}

export interface SExternalUrls4 {
  spotify: string;
}
