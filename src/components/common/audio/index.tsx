import { audioTrackState } from "@store/atom";
import { P4, Tag1 } from "@styles/font";
import { useRecoilValue } from "recoil";
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
import { AudioItem, AudioListWrap } from "./AudioItem";
import { usePlaybackVer2 } from "@hooks";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export function Audio() {
  const refWrap = React.useRef<HTMLDivElement>(null);
  const refAlbumArt = React.useRef<HTMLImageElement>(null);
  // 사용자가 추가한 재생 리스트
  const audioTracks = useRecoilValue(audioTrackState);
  // 현재 재생 중인 음악
  const [mode, setMode] = React.useState<AudioMode>("mini");
  const [isPlay, track, tracks, player] = usePlaybackVer2(
    refWrap,
    audioTracks!
  );

  React.useEffect(() => {
    setTimeout(() => {
      setMode("full");
    }, 300);
  }, []);

  const changeMode = React.useCallback(
    (e: React.MouseEvent, mode: AudioMode) => {
      e.stopPropagation();
      setMode(mode);
    },
    []
  );

  return track ? (
    <AudioWrap
      ref={refWrap}
      className={mode}
      onMouseEnter={
        mode !== "full" ? (e) => changeMode(e, "mini-ex") : undefined
      }
      onMouseLeave={mode !== "full" ? (e) => changeMode(e, "mini") : undefined}
    >
      <SwitchTransition>
        <CSSTransition
          key={`albumart-bg-${track.id}`}
          nodeRef={refAlbumArt}
          addEndListener={(done: any) => {
            refAlbumArt.current!.addEventListener("transitionend", done, false);
          }}
          classNames={"img-opacity"}
          timeout={500}
        >
          <AlbumArt
            ref={refAlbumArt}
            src={track.album.images[0].url}
            alt="album-art"
          />
        </CSSTransition>
      </SwitchTransition>
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
        <IconButton className="shuffle-btn" onClick={player.shuffle}>
          <BsShuffle />
        </IconButton>
        <IconButton className="close-btn" onClick={player.disconnect}>
          <BsXLg />
        </IconButton>
        <Tag1 className="artists-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </Tag1>
        <P4 className="track-title">{track.name}</P4>
        <IconWrap className="icon-wrap">
          <IconGroup>
            <IconButton onClick={player.prev}>
              <BsFillSkipBackwardFill />
            </IconButton>
            {isPlay ? (
              <IconButton onClick={player.pause}>
                <BsFillPauseFill />
              </IconButton>
            ) : (
              <IconButton onClick={player.play}>
                <BsFillPlayFill />
              </IconButton>
            )}
            <IconButton onClick={player.next}>
              <BsFillSkipForwardFill />
            </IconButton>
          </IconGroup>
        </IconWrap>
      </TitleWrap>
      {mode === "full" && (
        <AudioListWrap>
          {_.map(tracks, (audioTrack) => (
            <AudioItem
              key={(audioTrack as STrack).id}
              onNewPlay={player.newPlay}
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
