import { black, white } from "@styles/color";
import React from "react";
import styled from "styled-components";
import { FrontItem, Lid, MainItem, SideItem } from "./Items3D";

export function MailBox3D() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <MailBox>
      <MailBoxWrap onClick={() => setOpen(!open)}>
        <MainItem className="main top" />
        <MainItem className="main back" />
        <MainItem className="main bottom" />
        <SideItem className="side left" />
        <SideItem className="side right" />
        <FrontItem />
        <Lid isOpen={open} />
      </MailBoxWrap>
    </MailBox>
  );
}

const MailBox = styled.div`
  perspective: 1000px;
`;

const MailBoxWrap = styled.div`
  transform-style: preserve-3d;
  position: relative;
  width: 300px;
  height: 200px;

  transform: rotateX(-25deg) rotateY(25deg);

  & > div {
    position: absolute;
    left: 0;
    right: 0;
    background: ${white[500]};

    transform-origin: 50% 50%;
  }

  & > .main {
    width: 100%;
    height: 100%;
  }

  & > .back,
  .bottom,
  .right {
    background: ${black[700]};
  }

  & > .side {
    width: 200px;
    height: 200px;
  }

  & > .back {
    transform: translateZ(-200px);
  }

  & > .top {
    transform: rotateX(90deg) translateY(-100px) translateZ(100px);
  }

  & > .bottom {
    transform: rotateX(90deg) translateY(-100px) translateZ(-100px);
  }

  & > .right {
    left: 100px;
    transform: rotateY(90deg) translateX(100px) translateZ(100px);
  }

  & > .left {
    transform: rotateY(90deg) translateX(100px) translateZ(-100px);
  }
`;
