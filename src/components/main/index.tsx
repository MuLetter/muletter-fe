import { Mail3D, MailBox3D } from "@asset/symbols";
import { Button, VerticalTextItem } from "@component/common";
import { H1 } from "@styles/font";
import React from "react";
import { Link } from "react-router-dom";
import { DataCardWrap } from "./DataCard";
import { JoinIntroWrap, MailBoxIntroWrap, MailIntroWrap } from "./styles";

export function MailIntro() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      setRotate(true);
    }, 300);
  }, []);

  return (
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
        <Mail3D isOpen={open} isRotate={rotate} isDown />
      </div>
    </MailIntroWrap>
  );
}

export function MailBoxIntro() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);
  const [content, setContentView] = React.useState<boolean>(false);

  React.useEffect(() => {
    setRotate(true);

    setTimeout(() => {
      setTopAnchor(true);
      setOpen(true);
    }, 750);
  }, []);

  return (
    <MailBoxIntroWrap>
      <div className="mailbox-wrap">
        <H1 className="title">우체통에 당신의 음악들을 넣어주세요.</H1>
        <MailBox3D
          rotate={rotate}
          topAnchor={topAnchor}
          open={open}
          content={content}
          setContentView={setContentView}
        />
      </div>
      <VerticalTextItem text="MailBox" position="right" />
    </MailBoxIntroWrap>
  );
}

export function JoinIntro() {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  }, []);

  return (
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
        <Mail3D isOpen={open} isDown />
      </div>
    </JoinIntroWrap>
  );
}
