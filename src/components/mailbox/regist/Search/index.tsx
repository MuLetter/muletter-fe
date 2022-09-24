import React from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import SelectList from "./SelectList";
import { SearchBarMode } from "./types";

function Search() {
  const [mode, setMode] = React.useState<SearchBarMode>("waiting");
  const modeChange = React.useCallback((mode: SearchBarMode) => {
    setMode(mode);
  }, []);

  const refInput = React.useRef<HTMLInputElement>(null);
  const [q, setQ] = React.useState<string>("");
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // debounceSearch.current(e);

      return () => {
        // queryClient.resetQueries(["searchTracks"], { exact: true });
      };
    },
    []
  );

  return (
    <>
      <SearchBar
        refInput={refInput}
        q={q}
        setQ={onChange}
        mode={mode}
        modeChange={modeChange}
      />
      {mode === "waiting" ? <SelectList /> : <SearchList />}
    </>
  );
}

export default Search;
