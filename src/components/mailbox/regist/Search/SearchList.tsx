import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { SearchListProps } from "./types";
import { STrack } from "@api/types";
import SearchItem from "./SearchItem";
import { ControlWizardContext } from "@context";

function SearchList({
  data,
  nextPage,
  isRefetching,
  isFechingNextPage,
}: SearchListProps) {
  const refWrap = React.useRef<HTMLDivElement>(null);
  const { selectedTracks } = React.useContext(ControlWizardContext);
  const [selected, setSelected] = React.useState<STrack[]>([]);

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
  }, [nextFetch]);

  React.useEffect(() => {
    setSelected(selectedTracks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrap ref={refWrap} className="search-list">
      {data &&
        data.pages.map((page) =>
          page.tracks.items.map((track) => (
            <SearchItem
              track={track}
              key={track.id}
              isSelect={
                _.find(selected, (st) => st.id === track.id) !== undefined
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
