import { authState } from "@store/atom";
import { black, white } from "@styles/color";
import { H6, P1, Tag1 } from "@styles/font";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Button } from "@component/common";
import { LogoWhite } from "@asset/spotify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSpotifyOAuth, postOAuthBak } from "@api";
import React from "react";
import ProfileUploader from "./ProfileUploader";

function Profile() {
  const auth = useRecoilValue(authState);
  const [oauthUrl, setSpotifyUrl] = React.useState<string | null>(null);
  const [oauthState, setOAuthState] = React.useState<string | null>(null);
  useQuery(["getSpotifyOAuth"], getSpotifyOAuth, {
    onSuccess: ({ url, memory }) => {
      const { state } = memory;
      setOAuthState(state as string);
      setSpotifyUrl(url);
    },
    enabled: !auth?.spotifyProfile,
  });

  const { mutate: bakMutate } = useMutation(postOAuthBak, {
    onSuccess: () => {
      if (oauthUrl) {
        window.location.href = oauthUrl;
      }
    },
  });

  const onSpotifyOAuth = React.useCallback(() => {
    if (oauthState)
      bakMutate({
        state: oauthState!,
        data: {
          pathname: "/mailbox",
          userToken: localStorage.getItem("muletter-token"),
        },
      });
  }, [bakMutate, oauthState]);

  return (
    <Block>
      <ProfileUploader />
      {/* <img src={auth.spotifyProfile.images[0].url} alt="spotify-profile" /> */}
      <P1 className="username">{auth!.username}</P1>
      {auth?.spotifyProfile ? (
        <></>
      ) : auth?.spotifyToken.isExpires ? (
        <Tag1 className="spotify-notify">
          Spotify 계정 연동시간이 만료되었습니다.
        </Tag1>
      ) : (
        <Tag1 className="spotify-notify">
          Spotify 계정을 연결하시면,
          <br />
          스트리밍 서비스를 이용하실 수 있습니다.
        </Tag1>
      )}

      {auth?.spotifyProfile ? (
        <>
          <a
            href={auth.spotifyProfile.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <SpotifyView>
              <img
                src={auth.spotifyProfile.images[0].url}
                alt="spotify-profile"
              />
              <H6>{auth.spotifyProfile.display_name}</H6>
            </SpotifyView>
          </a>
        </>
      ) : (
        <Button
          type="button"
          colorTheme="black"
          size="m"
          disabled={!oauthUrl}
          onClick={oauthUrl ? onSpotifyOAuth : undefined}
          className="spotify-oauth-btn"
        >
          <img src={LogoWhite} alt="spotify-logo-white" />
          <span>Spotify 계정 연동하기</span>
        </Button>
      )}
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 28px;
  box-sizing: border-box;

  color: ${white[500]};

  background: ${white[900]};
  border-radius: 8px;

  & > .spotify-notify {
    margin: 24px 0 10px;
    width: 248px;
    color: ${black[500]};
    padding: 0 8px;

    box-sizing: border-box;
  }

  & > .spotify-oauth-btn {
    margin: 0 !important;
    width: 248px !important;

    display: flex;
    align-items: center;
  }
`;

const SpotifyView = styled.div`
  width: 248px;
  height: 48px;

  border-radius: 24px;
  margin: 24px 0 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  column-gap: 12px;

  color: ${white[500]};
  & > img {
    width: 24px;
    height: 24px;

    border-radius: 12px;
    object-fit: cover;
  }
`;

export default Profile;
