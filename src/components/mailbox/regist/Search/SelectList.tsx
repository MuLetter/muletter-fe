import { Track } from "@api/types";
import { selectTracksState } from "@store/atom";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import _ from "lodash";
import { MusicCard } from "@component/common";

const CHUNKSIZE = 5;
function SelectList() {
  const [tracks, setSelectTracks] = useRecoilState(selectTracksState);

  const removeSelects = React.useCallback(
    (track: Track) => {
      setSelectTracks(_.filter(tracks, (st) => st.id !== track.id));
    },
    [tracks, setSelectTracks]
  );

  return (
    <Wrap>
      {_.chunk(tracks, CHUNKSIZE).map((track, idx) => (
        <Row key={`track-row-${idx}`}>
          {_.map(track, (t) => (
            <MusicCard track={t} key={t.id} selectAction={removeSelects} />
          ))}
          {track.length < CHUNKSIZE &&
            _.range(CHUNKSIZE - track.length).map((_, eidx) => (
              <div className="empty" key={`empty-col-${eidx}`} />
            ))}
        </Row>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  overflow-y: scroll;
  align-items: center;

  margin: 16px;

  row-gap: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;

  flex-wrap: wrap;
  column-gap: 16px;

  width: 100%;
  box-sizing: border-box;

  & > .empty {
    width: 160px;
  }

  /* & > *:nth-child(1) {
  } */
  /* 
  & > *:not(:nth-child(1)) {
    margin: 0 0 0 -20px;
  } */
`;

export default SelectList;
