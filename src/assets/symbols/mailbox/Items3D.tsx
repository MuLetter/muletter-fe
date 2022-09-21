import { Button } from "@component/common/button";
import { white } from "@styles/color";
import React from "react";
import styled, { css } from "styled-components";
import { ButtonContentWrap, Content, ContentTail, ContentWrap } from "./styles";
import {
  ButtonContentProps,
  ContentControlProps,
  ContentStyleProps,
  LidStyleProps,
} from "./types";

export const MainItem = styled.div``;
export const SideItem = styled.div``;
export const Lid = styled.div<LidStyleProps>`
  width: 250px;
  height: 150px;

  background-color: ${white[500]};
  top: 25px;
  left: 25px !important;
  transform-origin: 50% 0 !important;
  transition: 0.3s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotateX(90deg);
    `}
`;

export function FrontItem() {
  return (
    <MainItem style={{ background: "transparent" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 3 2"
      >
        <path
          d="M 0 0
           V 2
           H 3 
           V 0
           Z"
          stroke="white"
          strokeWidth={50}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </MainItem>
  );
}

export function BoxContent({
  children,
  isView,
}: React.PropsWithChildren<ContentStyleProps & ContentControlProps>) {
  const refWrap = React.useRef<HTMLDivElement>(null);
  return (
    <ContentWrap
      ref={refWrap}
      isView={isView}
      className={`${isView ? "view" : ""}`}
    >
      <ContentTail xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 3">
        <path
          d="M 0 0
                H 7
                V 3
                Z
                "
          fill={white[900]}
        />
      </ContentTail>
      <Content className={`mailbox-content ${isView ? "view" : ""}`}>
        {children}
      </Content>
    </ContentWrap>
  );
}

export function ButtonContent({ buttons }: ButtonContentProps) {
  return (
    <ButtonContentWrap className="mailbox-content">
      {buttons.map(({ title, clickAction, type }) => (
        <Button
          colorTheme="outline"
          onClick={clickAction}
          key={`button-${title}`}
          type={type}
        >
          {title}
        </Button>
      ))}
    </ButtonContentWrap>
  );
}
