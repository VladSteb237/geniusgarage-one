import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "./lib/utils";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
        />
        <input
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950",
            "pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
