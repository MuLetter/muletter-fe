import { STrack } from "@api/types";
import { MiniAlbumArt, MiniAlbumArtCount } from "@component/common";
import { ITrack } from "@store/types";
import { black, white } from "@styles/color";
import { P4, Tag2 } from "@styles/font";
import _ from "lodash";
import styled from "styled-components";
import { ItemProps } from "./types";
import {
  AiOutlineUser,
  AiOutlineLike,
  AiOutlineMail,
  AiFillLike,
} from "react-icons/ai";

function ContentItem({ mailBox, onClick }: ItemProps) {
  return (
    <Wrap onClick={() => onClick(mailBox._id)}>
      <Image
        src={`${process.env.REACT_APP_API_SERVER}/${mailBox.image}`}
        alt="mailbox-img"
      />
      <Content>
        <P4>{mailBox.title}</P4>
        <MiniAlbumArtGroup>
          {_.map(_.sampleSize(mailBox.tracks, 10), (track: STrack | ITrack) => (
            <MiniAlbumArt image={track.album.images[0].url} key={track.id} />
          ))}
          {mailBox.tracks.length > 10 && (
            <MiniAlbumArtCount>+{mailBox.tracks.length - 10}</MiniAlbumArtCount>
          )}
        </MiniAlbumArtGroup>
      </Content>
      <SubContent>
        <SubInformation>
          <SubBlock>
            {mailBox.isLike ? (
              <AiFillLike color={black[600]} size={28} />
            ) : (
              <AiOutlineLike color={black[600]} size={28} />
            )}

            <Tag2>{mailBox.likeCount}</Tag2>
          </SubBlock>
          <SubBlock>
            <AiOutlineMail color={black[600]} size={28} />
            <Tag2>{mailBox.mailCount}</Tag2>
          </SubBlock>
        </SubInformation>
        <AuthProfile>
          {mailBox.user?.profile ? (
            <img
              src={`${process.env.REACT_APP_API_SERVER}/${
                mailBox.user!.profile
              }`}
              alt="profile"
            />
          ) : (
            <AiOutlineUser />
          )}
          <P4>{mailBox.user!.nickname}</P4>
        </AuthProfile>
      </SubContent>
    </Wrap>
  );
}

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  height: 100%;
`;

const SubInformation = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  flex: 1;
`;

const SubBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  align-items: center;

  color: ${black[600]};
`;

const AuthProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 120px;

  color: ${black[700]};
  column-gap: 4px;
  height: 24px;

  & > img {
    width: 24px;
    height: 24px;

    border-radius: 12px;
  }
`;

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
