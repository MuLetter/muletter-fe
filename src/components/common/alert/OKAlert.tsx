import { STrack } from "@api/types";
import { BounceAnimationCont } from "@styles/block";
import { black, white } from "@styles/color";
import { H1, H3 } from "@styles/font";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../button";
import { MusicCard } from "../card";
import { OKAlertProps } from "./types";

export function OKAlert({ title, subtitle, tracks }: OKAlertProps) {
  const navigate = useNavigate();

  return (
    <Wrap>
      <BounceAnimationCont>
        <H1 className="title">{title}</H1>
        <Row className="tracks">
          {_.map(_.take(tracks as STrack[], 5), (track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </Row>
        <H3 className="description">{subtitle}</H3>
        <Button
          colorTheme="outline"
          onClick={() => navigate("/mailbox", { replace: true })}
        >
          확인
        </Button>
      </BounceAnimationCont>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: ${black[700]};

  color: ${white[500]};

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  z-index: 50000;

  & .title,
  .description {
    margin: 0 0 32px;
  }

  & .description {
    color: ${white[700]};
  }

  & button {
    width: 280px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  column-gap: 20px;

  margin: 0 0 24px;
`;
