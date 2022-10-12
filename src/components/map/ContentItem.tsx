import { STrack } from "@api/types";
import { MiniAlbumArt, MiniAlbumArtCount } from "@component/common";
import { ITrack } from "@store/types";
import { black, white } from "@styles/color";
import { P4 } from "@styles/font";
import _ from "lodash";
import styled from "styled-components";
import { ItemProps } from "./types";

function ContentItem({ mailBox }: ItemProps) {
  return (
    <Wrap>
      <Image
        src={`${process.env.REACT_APP_API_SERVER}/${mailBox.image}`}
        alt="mailbox-img"
      />
      <Content>
        <P4>{mailBox.title}</P4>
        <MiniAlbumArtGroup>
          {_.map(_.sampleSize(mailBox.tracks, 5), (track: STrack | ITrack) => (
            <MiniAlbumArt image={track.album.images[0].url} key={track.id} />
          ))}
          {mailBox.tracks.length > 5 && (
            <MiniAlbumArtCount>+{mailBox.tracks.length - 5}</MiniAlbumArtCount>
          )}
        </MiniAlbumArtGroup>
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  width: 100%;
  height: 120px;

  background-color: ${white[900]};

  padding: 16px;
  box-sizing: border-box;

  border-radius: 8px;

  overflow: visible;

  column-gap: 16px;
`;

const Image = styled.img`
  width: 192px;
  height: 120px;

  object-fit: cover;
  border-radius: 8px;

  align-self: flex-end;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  & > p {
    color: ${black[600]};
  }
`;

const MiniAlbumArtGroup = styled.div`
  display: flex;

  flex-direction: row;
  column-gap: 10px;
`;

export default ContentItem;
