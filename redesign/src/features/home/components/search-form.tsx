import type { SyntheticEvent } from "react";

import { Button } from "@/components/button";

import { suggestionQueries } from "../constants/home-lists";

// Chỉ giao diện: gõ, bấm Tìm, bấm gợi ý chưa gọi gì. Nối tìm kiếm ở handleSearchSubmit và onClick của chip.
export default function SearchForm() {
  function handleSearchSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <form className="mt-6 flex max-w-xl gap-2" role="search" onSubmit={handleSearchSubmit}>
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Tìm app theo việc bạn cần</span>
          <input
            type="search"
            placeholder="Ví dụ: ghi chi tiêu gia đình"
            className="h-12 w-full rounded-xl border border-border-strong bg-surface px-4 text-base text-foreground outline-hidden transition-colors placeholder:text-muted focus:border-focus focus:ring-2 focus:ring-focus [&::-webkit-search-cancel-button]:appearance-none"
          />
        </label>
        <Button type="submit" variant="primary" className="h-12 min-h-12 shrink-0 px-5 py-0">
          Tìm
        </Button>
      </form>

      <div className="mt-4 flex items-center gap-3">
        <span className="hidden shrink-0 text-sm text-muted lg:inline">Mọi người hay tìm:</span>
        {/* Không wrap (R6): màn hẹp cuộn ngang, thanh cuộn ẩn. */}
        <div className="scrollbar-clean min-w-0 overflow-x-auto py-0.5">
          <div className="flex items-center gap-2 px-1">
            {suggestionQueries.map((query) => (
              <Button
                key={query}
                variant="ghost"
                className="h-8 min-h-8 shrink-0 rounded-full bg-foreground/5 px-3 py-0 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
              >
                {query}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
