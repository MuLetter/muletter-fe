import { audioTrackState } from "@store/atom";
import { P1, P4, Tag1 } from "@styles/font";
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

function Audio() {
  const refAudio = React.useRef<HTMLAudioElement>(null);
  const audioTrack = useRecoilValue(audioTrackState);
  const [status, setStatus] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<AudioMode>("mini");

  React.useEffect(() => {
    if (audioTrack) {
      setStatus(true);
    }
  }, [audioTrack]);

  React.useEffect(() => {
    if (refAudio.current) {
      refAudio.current!.addEventListener("ended", () => {
        setStatus(false);
      });
    }
  }, [audioTrack]);

  const changeStatus = React.useCallback(
    (e: React.MouseEvent, status: boolean) => {
      e.stopPropagation();

      if (status) {
        refAudio.current!.play();
        setStatus(true);
      } else {
        refAudio.current!.pause();
        setStatus(false);
      }
    },
    []
  );

  const changeMode = React.useCallback(
    (e: React.MouseEvent, mode: AudioMode) => {
      e.stopPropagation();
      setMode(mode);
    },
    []
  );

  return audioTrack ? (
    <AudioWrap
      className={mode}
      onMouseEnter={
        mode !== "full" ? (e) => changeMode(e, "mini-ex") : undefined
      }
      onMouseLeave={mode !== "full" ? (e) => changeMode(e, "mini") : undefined}
    >
      <AlbumArt src={audioTrack.album.images[0].url} alt="album-art" />
      <TitleWrap className="title-wrap">
        <Tag1 className="artists-names">
          {_.join(
            _.flatten(_.map(audioTrack.artists, ({ name }) => name)),
            ","
          )}
        </Tag1>
        <P4 className="track-title">{audioTrack.name}</P4>
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
        <P1 className="comming-soon" style={{ margin: "24px 0 0" }}>
          Playlist Comming Soon :)
        </P1>
      </TitleWrap>
      <audio ref={refAudio} src={audioTrack.preview_url} autoPlay></audio>
    </AudioWrap>
  ) : (
    <></>
  );
}

export default Audio;
