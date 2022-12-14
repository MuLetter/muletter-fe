import { black, white } from "@styles/color";
import styled from "styled-components";

export const AudioWrap = styled.div`
  position: fixed;

  bottom: 32px;
  right: 32px;

  width: 200px;
  height: 200px;
  border-radius: 16px;

  z-index: 5000;
  background: black;

  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  & .comming-soon {
    display: none;
  }

  &.mini {
    & > .title-wrap {
      transform: translateY(120px);
      & > .icon-wrap,
      .size-btn,
      .close-btn,
      .shuffle-btn {
        display: none;
      }
    }
  }

  &.mini-ex {
    & > .title-wrap {
      transform: translateY(0);

      & > .artists-names {
        margin: 32px 0 0;
      }
    }
  }

  &.full {
    width: 400px;
    height: 600px;
    cursor: default;

    & > .title-wrap {
      & > .artists-names {
        margin: 32px 0 0;
      }
      & > .icon-wrap {
        border-bottom: 2px solid ${white[600]};
      }

      & > .size-btn {
        transform: rotate(180deg);
      }
    }

    & .comming-soon {
      display: block;
    }
  }
`;

export const AlbumArt = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 0.25s;

  &.img-opacity-exit {
    opacity: 1;
  }

  &.img-opacity-exit-active {
    opacity: 0;
  }

  &.img-opacity-enter {
    opacity: 0;
  }

  &.img-opacity-enter-active {
    opacity: 1;
  }
`;

export const TitleWrap = styled.div`
  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background: ${black[700]};
  /* backdrop-filter: blur(10px); */

  color: ${white[500]};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 20px 12px 0;
  box-sizing: border-box;

  transition: 0.3s;

  z-index: 2;

  & > .artists-names,
  .track-title {
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  & > .size-btn {
    position: absolute;
    top: 16px;
    left: 16px;

    width: 32px;
    height: 32px;

    transition: 0.3s;
  }

  & > .shuffle-btn {
    position: absolute;
    top: 16px;
    right: 48px;

    width: 32px;
    height: 32px;
  }

  & > .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }
`;

export const IconWrap = styled.div`
  width: 100%;
  margin: 8px 0 0;
`;

export const IconGroup = styled.div`
  width: 100%;
  padding: 0 0 6px;

  display: flex;
  flex-direction: row;

  justify-content: center;
`;
