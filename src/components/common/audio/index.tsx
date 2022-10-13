import { audioTrackState } from "@store/atom";
import { P4, Tag1 } from "@styles/font";
import { useRecoilValue } from "recoil";
import { AlbumArt, AudioWrap, IconGroup, IconWrap, TitleWrap } from "./styles";
import _ from "lodash";
import { IconButton } from "../button";
import {
  BsFillPauseFill,
  BsFillPlayFill,
  BsArrowUpShort,
  BsArrowDownShort,
} from "react-icons/bs";
import React from "react";
import { AudioMode } from "./types";
import { STrack } from "@api/types";
import { ITrack } from "@store/types";
import { usePlayback } from "@hooks";

export function Audio() {
  const refAudio = React.useRef<HTMLAudioElement>(null);
  // 사용자가 추가한 재생 리스트

  const audioTracks = useRecoilValue(audioTrackState);
  // 현재 재생 중인 음악
  const [track, setTrack] = React.useState<STrack | ITrack | null>(null);
  const [status, setStatus] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<AudioMode>("mini");

  // auth가 있다면 정상 동작가능, 아니면 preview_url
  const [isUse, onNewPlay, onPlay, onPause] = usePlayback();

  React.useEffect(() => {
    if (track && isUse) {
      setStatus(true);
      onNewPlay(track.id);
    }
  }, [isUse, onNewPlay, track]);

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

      if (isUse) {
        if (status) {
          onPlay();
          setStatus(true);
        } else {
          onPause();
          setStatus(false);
        }
      } else {
        if (status) {
          refAudio.current!.play();
          setStatus(true);
        } else {
          refAudio.current!.pause();
          setStatus(false);
        }
      }
    },
    [isUse, onPlay, onPause]
  );

  const changeMode = React.useCallback(
    (e: React.MouseEvent, mode: AudioMode) => {
      e.stopPropagation();
      setMode(mode);
    },
    []
  );

  return track ? (
    <AudioWrap
      className={mode}
      onMouseEnter={
        mode !== "full" ? (e) => changeMode(e, "mini-ex") : undefined
      }
      onMouseLeave={mode !== "full" ? (e) => changeMode(e, "mini") : undefined}
    >
      <AlbumArt src={track.album.images[0].url} alt="album-art" />
      <TitleWrap className="title-wrap">
        <Tag1 className="artists-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </Tag1>
        <P4 className="track-title">{track.name}</P4>
        <IconWrap className="icon-wrap">
          <IconGroup>
            {status ? (
              <IconButton onClick={(e) => changeStatus(e, false)}>
                <BsFillPauseFill />
              </IconButton>
            ) : (
              <IconButton onClick={(e) => changeStatus(e, true)}>
                <BsFillPlayFill />
              </IconButton>
            )}
            {mode === "full" ? (
              <IconButton onClick={(e) => changeMode(e, "mini-ex")}>
                <BsArrowDownShort />
              </IconButton>
            ) : (
              <IconButton onClick={(e) => changeMode(e, "full")}>
                <BsArrowUpShort />
              </IconButton>
            )}
          </IconGroup>
        </IconWrap>
        {/* <P1 className="comming-soon" style={{ margin: "24px 0 0" }}>
          Playlist Comming Soon :)
        </P1> */}
      </TitleWrap>
      {!isUse && (
        <audio ref={refAudio} src={track.preview_url!} autoPlay></audio>
      )}
    </AudioWrap>
  ) : (
    <></>
  );
}
