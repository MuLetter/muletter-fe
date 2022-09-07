import { black, white } from "@styles/color";
import React from "react";
import styled from "styled-components";
import { BoxContent, FrontItem, Lid, MainItem, SideItem } from "./Items3D";

export function MailBox3D() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [contentView, setContentView] = React.useState<boolean>(false);
  const refLid = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (refLid.current) {
      refLid.current.addEventListener("transitionend", (e) => {
        if (e.propertyName === "transform") {
          if (refLid.current!.classList.contains("open")) setContentView(true);
        }
      });
    }
  }, []);

  const contentAnimationEnd = React.useCallback((state: boolean) => {
    setOpen(state);
  }, []);

  return (
    <>
      <MailBox>
        <MailBoxWrap
          onClick={
            contentView ? () => setContentView(false) : () => setOpen(!open)
          }
        >
          <MainItem className="main top" />
          <MainItem className="main back" />
          <MainItem className="main bottom" />
          <SideItem className="side left" />
          <SideItem className="side right" />
          <FrontItem />
          <Lid
            isOpen={open}
            className={`${open ? "open" : "close"}`}
            ref={refLid}
          />
        </MailBoxWrap>
      </MailBox>
      <BoxContent isView={contentView} animationEnd={contentAnimationEnd} />
    </>
  );
}

const MailBox = styled.div`
  position: absolute;
  top: 17.07px;
  left: 54.04px;
  perspective: 1000px;
`;

const MailBoxWrap = styled.div`
  display: inline-block;
  transform-style: preserve-3d;
  position: relative;
  width: 300px;
  height: 200px;

  transform-origin: 0% 0%;
  transform: rotateX(-10deg) rotateY(25deg);

  & > div {
    transform-style: preserve-3d;
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
