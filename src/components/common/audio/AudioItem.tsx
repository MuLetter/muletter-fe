import { black, white } from "@styles/color";
import { P3, Tag1 } from "@styles/font";
import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { ItemProps } from "./types";

export function AudioItem({ onNewPlay, track }: ItemProps) {
  return (
    <Item onClick={() => onNewPlay(track.id)}>
      <AlbumArt src={track.album.images[0].url} />
      <Content>
        <Tag1 className="artists-name">
          {_.join(
            _.map(track.artists, ({ name }) => name),
            " ,"
          )}
        </Tag1>
        <P3 className="track-name">{track.name}</P3>
      </Content>
    </Item>
  );
}

export function AudioListWrap({ children }: React.PropsWithChildren<any>) {
  return (
    <Wrap>
      <Block>{children}</Block>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  top: 148.5px;
  left: 0;

  width: 400px;
  height: calc(600px - 148.5px);

  padding: 24px;

  box-sizing: border-box;

  z-index: 3;

  overflow-y: scroll;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;

const Item = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;

  align-items: center;

  height: 80px;

  background: ${white[600]};
  border-radius: 16px;

  padding: 0 16px;

  column-gap: 8px;
`;

const AlbumArt = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 8px;
`;

const Content = styled.div`
  flex: 1;

  color: ${black[600]};

  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;
