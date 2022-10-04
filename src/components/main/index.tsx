import { STrack } from "@api/types";
import { Mail3D, MailBox3D } from "@asset/symbols";
import {
  BasicListWrap,
  BasicMusicItem,
  Button,
  MusicCard,
  VerticalTextItem,
} from "@component/common";
import { useSample } from "@hooks";
import { ITrack } from "@store/types";
import { BounceAnimationCont } from "@styles/block";
import { H1 } from "@styles/font";
import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { DataCardWrap } from "./DataCard";
import {
  JoinIntroWrap,
  MailBoxIntroWrap,
  MailIntroWrap,
  MusicCardWrap,
} from "./styles";

export function MailIntro() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [items, onSamples] = useSample(5);

  React.useEffect(() => {
    if (items) {
      setTimeout(() => {
        setOpen(true);
        setRotate(true);
      }, 300);
    }
  }, [items]);

  React.useEffect(() => {
    (onSamples as () => void)();
  }, [onSamples]);

  return (
    <BounceAnimationCont>
      <MailIntroWrap>
        <div className="service-info">
          <H1 className="title">
            오직 당신만을 위한
            <br />
            음악 편지
          </H1>
          <div className="content">
            <VerticalTextItem text="팀 따스함" />
            <DataCardWrap />
          </div>
        </div>
        <div className="mail-wrap">
          <Mail3D isOpen={open} isRotate={rotate} isDown>
            {items && (
              <BasicListWrap>
                {_.map(items as ITrack[], (track) => (
                  <BasicMusicItem key={track.id} {...track} />
                ))}
              </BasicListWrap>
            )}
          </Mail3D>
        </div>
      </MailIntroWrap>
    </BounceAnimationCont>
  );
}

export function MailBoxIntro() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);
  const [content, setContentView] = React.useState<boolean>(false);
  const [items, onSamples] = useSample(5);

  React.useEffect(() => {
    if (items) {
      setRotate(true);

      setTimeout(() => {
        setTopAnchor(true);
        setOpen(true);
      }, 750);
    }
  }, [items]);

  React.useEffect(() => {
    (onSamples as () => void)();
  }, [onSamples]);

  return (
    <BounceAnimationCont>
      <MailBoxIntroWrap>
        <H1 className="title">
          우체통에
          <br />
          당신의 음악들을
          <br />
          넣어주세요.
        </H1>
        <div className="mailbox-wrap">
          <MailBox3D
            rotate={rotate}
            topAnchor={topAnchor}
            open={open}
            content={content}
            setContentView={setContentView}
          >
            {items && (
              <MusicCardWrap>
                {_.map(items as STrack[], (track) => (
                  <MusicCard key={track.id} track={track} />
                ))}
              </MusicCardWrap>
            )}
          </MailBox3D>
        </div>
        <VerticalTextItem text="MailBox" position="right" />
      </MailBoxIntroWrap>
    </BounceAnimationCont>
  );
}

export function JoinIntro() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [items, onSamples] = useSample(5);

  React.useEffect(() => {
    if (items) {
      setTimeout(() => {
        setOpen(true);
      }, 300);
    }
  }, [items]);

  React.useEffect(() => {
    (onSamples as () => void)();
  }, [onSamples]);

  return (
    <BounceAnimationCont>
      <JoinIntroWrap>
        <VerticalTextItem text="Letter" />
        <div className="join-info">
          <H1 className="title">
            당신만을 위한
            <br />
            음악들을 적어서
            <br />
            보내드릴게요.
          </H1>
          <Link to="/auth/join">
            <Button colorTheme="black">가입하기</Button>
          </Link>
        </div>
        <div className="mail-wrap">
          <Mail3D isOpen={open} isDown>
            {items && (
              <BasicListWrap>
                {_.map(items as ITrack[], (track) => (
                  <BasicMusicItem key={track.id} {...track} />
                ))}
              </BasicListWrap>
            )}
          </Mail3D>
        </div>
      </JoinIntroWrap>
    </BounceAnimationCont>
  );
}
