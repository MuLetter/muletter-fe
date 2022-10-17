import { audioTrackState } from "@store/atom";
import { P4, Tag1 } from "@styles/font";
import { useRecoilState, useRecoilValue } from "recoil";
import { AlbumArt, AudioWrap, IconGroup, IconWrap, TitleWrap } from "./styles";
import _ from "lodash";
import { IconButton } from "../button";
import {
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillSkipBackwardFill,
  BsArrowUpLeft,
  BsFillSkipForwardFill,
  BsShuffle,
  BsXLg,
} from "react-icons/bs";
import React from "react";
import { AudioMode } from "./types";
import { STrack } from "@api/types";
import { ITrack } from "@store/types";
import { usePlayback } from "@hooks";
import { AudioItem, AudioListWrap } from "./AudioItem";

export function Audio() {
  const refWrap = React.useRef<HTMLDivElement>(null);
  // 사용자가 추가한 재생 리스트
  const [audioTracks, setAudioTracks] = useRecoilState(audioTrackState);
  // 현재 재생 중인 음악
  const [track, setTrack] = React.useState<STrack | ITrack | null>(null);
  const [status, setStatus] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<AudioMode>("mini");

  // auth가 있다면 정상 동작가능, 아니면 preview_url
  const [isUse, _onNewPlay, onPlay, onPause, disConnect] = usePlayback(refWrap);

  React.useEffect(() => {
    setTimeout(() => {
      setMode("full");
    }, 300);
  }, []);

  const onNewPlay = React.useCallback(
    (track: STrack) => {
      _onNewPlay(track);
      setTrack(track);
    },
    [_onNewPlay]
  );

  React.useEffect(() => {
    if (track) {
      setStatus(true);
      _onNewPlay(track as STrack);
    }
  }, [_onNewPlay, track]);

  React.useEffect(() => {
    if (audioTracks && audioTracks.length > 0) setTrack(audioTracks[0]);
  }, [audioTracks]);

  // React.useEffect(() => {
  //   if (audioTrack) {
  //     setStatus(true);
  //   }
  // }, [audioTrack]);

  // React.useEffect(() => {
  //   if (refAudio.current) {
  //     refAudio.current!.addEventListener("ended", () => {
  //       setStatus(false);
  //     });
  //   }
  // }, [audioTrack]);

  const changeStatus = React.useCallback(
    (e: React.MouseEvent, status: boolean) => {
      e.stopPropagation();

      if (status) {
        onPlay();
        setStatus(true);
      } else {
        onPause();
        setStatus(false);
      }
    },
    [onPlay, onPause]
  );

  const changeMode = React.useCallback(
    (e: React.MouseEvent, mode: AudioMode) => {
      e.stopPropagation();
      setMode(mode);
    },
    []
  );

  const close = React.useCallback(() => {
    if (isUse) disConnect();
    setTimeout(() => {
      setAudioTracks(null);
    }, 300);
  }, [setAudioTracks, isUse, disConnect]);

  return track ? (
    <AudioWrap
      ref={refWrap}
      className={mode}
      onMouseEnter={
        mode !== "full" ? (e) => changeMode(e, "mini-ex") : undefined
      }
      onMouseLeave={mode !== "full" ? (e) => changeMode(e, "mini") : undefined}
    >
      <AlbumArt src={track.album.images[0].url} alt="album-art" />
      <TitleWrap className="title-wrap">
        {mode === "full" ? (
          <IconButton
            className="size-btn"
            onClick={(e) => changeMode(e, "mini-ex")}
          >
            <BsArrowUpLeft />
          </IconButton>
        ) : (
          <IconButton
            className="size-btn"
            onClick={(e) => changeMode(e, "full")}
          >
            <BsArrowUpLeft />
          </IconButton>
        )}
        <IconButton
          className="shuffle-btn"
          onClick={(e) => changeMode(e, "mini-ex")}
        >
          <BsShuffle />
        </IconButton>
        <IconButton className="close-btn" onClick={(e) => close()}>
          <BsXLg />
        </IconButton>
        <Tag1 className="artists-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </Tag1>
        <P4 className="track-title">{track.name}</P4>
        <IconWrap className="icon-wrap">
          <IconGroup>
            <IconButton onClick={(e) => changeStatus(e, true)}>
              <BsFillSkipBackwardFill />
            </IconButton>
            {status ? (
              <IconButton onClick={(e) => changeStatus(e, false)}>
                <BsFillPauseFill />
              </IconButton>
            ) : (
              <IconButton onClick={(e) => changeStatus(e, true)}>
                <BsFillPlayFill />
              </IconButton>
            )}
            <IconButton onClick={(e) => changeStatus(e, true)}>
              <BsFillSkipForwardFill />
            </IconButton>
          </IconGroup>
        </IconWrap>
      </TitleWrap>
      {mode === "full" && (
        <AudioListWrap>
          {_.map(audioTracks, (audioTrack) => (
            <AudioItem
              key={(audioTrack as STrack).id}
              onNewPlay={onNewPlay}
              track={audioTrack as STrack}
            />
          ))}
        </AudioListWrap>
      )}
    </AudioWrap>
  ) : (
    <></>
  );
}

export function AudioListener() {
  const audioTracks = useRecoilValue(audioTrackState);
  return audioTracks ? <Audio /> : <></>;
}
