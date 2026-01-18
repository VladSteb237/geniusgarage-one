"use client";

// import { ReactNode } from "react";

// interface ButtonProps {
//   children: ReactNode;
//   className?: string;
//   appName: string;
// }

// export const Button = ({ children, className, appName }: ButtonProps) => {
//   return (
//     <button
//       className={className}
//       onClick={() => alert(`Hello from your ${appName} app!`)}
//     >
//       {children}
//     </button>
//   );
// };

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger"; // Add 'danger' variant
}
// Add comment
export function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseStyles = {
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };
  // Another comment - hash changes
  const variantStyles = {
    primary: { background: "#2563eb", color: "white" },
    secondary: { background: "#e5e7eb", color: "#1f2937" },
    danger: { background: "#ef4444", color: "white" }, // New variant!
  };

  return (
    <button
      className="bg-blue-500 bg-gray-200 text-gray-900"
      style={{ ...baseStyles, ...variantStyles[variant] }}
      onClick={onClick}>
      {children}
    </button>
  );
}
