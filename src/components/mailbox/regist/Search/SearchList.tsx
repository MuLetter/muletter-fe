// import { Track } from "@api/types";
import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { SearchListProps } from "./types";
import { Track } from "@api/types";
import { useRecoilState } from "recoil";
import { selectTracksState } from "@store/atom";
import SearchItem from "./SearchItem";

function SearchList({
  data,
  nextPage,
  isRefetching,
  isFechingNextPage,
}: SearchListProps) {
  const refWrap = React.useRef<HTMLDivElement>(null);
  const [selectTracks, setSelectTracks] = useRecoilState(selectTracksState);
  const refSelected = React.useRef<Track[]>(selectTracks);

  const selectItem = React.useCallback((track: Track) => {
    refSelected.current = _.concat(refSelected.current, track);
    // setSelectTracks(_.concat(selectTracks, track));
  }, []);

  const removeItem = React.useCallback((track: Track) => {
    refSelected.current = _.dropWhile(
      refSelected.current,
      (st) => st.id === track.id
    );
  }, []);

  const throttleScroll = React.useRef<() => void>(
    _.throttle(() => {
      nextPage();
    }, 1000)
  );

  React.useEffect(() => {
    if (isRefetching && !isFechingNextPage)
      refWrap.current?.scrollTo({ top: 0 });
  }, [isRefetching, isFechingNextPage]);

  const nextFetch = React.useCallback(() => {
    const top = refWrap.current!.scrollTop;
    const height = refWrap.current!.clientHeight;
    const sHeight = refWrap.current!.scrollHeight;

    if (top >= sHeight - height - 40) {
      throttleScroll.current();
    }
  }, []);

  React.useEffect(() => {
    if (refWrap.current) refWrap.current!.addEventListener("scroll", nextFetch);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      setSelectTracks(refSelected.current);
    };
  }, [setSelectTracks, nextFetch]);

  return (
    <Wrap ref={refWrap}>
      {data &&
        data.pages.map((page) =>
          page.tracks.items.map((track) => (
            <SearchItem
              track={track}
              key={track.id}
              selectAction={selectItem}
              removeAction={removeItem}
              isSelect={
                _.find(refSelected.current, (st) => st.id === track.id) !==
                undefined
              }
            />
          ))
        )}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 16px;
  flex: 1;
  overflow-y: scroll;
`;

export default SearchList;
