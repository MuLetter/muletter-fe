import { ResSearch } from "@api/types";
import { SelectItemProps } from "@component/common/types";
import { FetchNextPageOptions, InfiniteData } from "@tanstack/react-query";

export type SearchBarMode = "waiting" | "searching";

export interface SearchItemProps extends SelectItemProps {
  removeAction: (...args: any) => void;
  isSelect: boolean;
}

export interface SearchBarProps {
  mode: "waiting" | "searching";
  modeChange: (mode: SearchBarMode) => void;
  refInput: React.Ref<HTMLInputElement>;
  q: string;
  setQ: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchListProps {
  data?: InfiniteData<ResSearch>;
  nextPage: (options?: FetchNextPageOptions) => void;
  isRefetching?: boolean;
  isFechingNextPage?: boolean;
  setSearchBarUnmount: (status: boolean) => void;
}

export interface SearchItemStyleProps {
  isLoad: boolean;
  loadDuration: number;
}
