// import * as React from "react";
// import { cn } from "./lib/utils";

// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         ref={ref}
//         className={cn(
//           "flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-100",
//           "placeholder:text-zinc-500",
//           "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700",
//           "disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         {...props}
//       />
//     );
//   }
// );

// Input.displayName = "Input";

// export { Input };
import * as React from "react";
import { cn } from "./lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4",
          "text-sm text-zinc-100 placeholder:text-zinc-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
