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
      & > .icon-wrap {
        display: none;
      }
    }
  }

  &.mini-ex {
    & > .title-wrap {
      transform: translateY(0);
    }
  }

  &.full {
    width: 400px;
    height: 600px;
    cursor: default;

    & > .title-wrap {
      & > .icon-wrap {
        border-bottom: 2px solid ${white[600]};
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

  & > .artists-names,
  .track-title {
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    text-align: center;
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
