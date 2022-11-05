import { ResSearch } from "@api/types";
import { MusicCardProps } from "@component/common/types";
import { FetchNextPageOptions, InfiniteData } from "@tanstack/react-query";

export type SearchBarMode = "waiting" | "searching";

export interface SearchItemProps extends MusicCardProps {
  isSelect: boolean;
}

export interface SearchBarProps {
  mode: "waiting" | "searching";
  modeChange: (mode: SearchBarMode) => void;
  refInput: React.Ref<HTMLInputElement>;
  setQ: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchListProps {
  data?: InfiniteData<ResSearch>;
  nextPage: (options?: FetchNextPageOptions) => void;
  isRefetching?: boolean;
  isFechingNextPage?: boolean;
}

export interface SearchItemStyleProps {
  isLoad: boolean;
  loadDuration: number;
}
