"use client";

import clsx from "clsx";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  className,
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        "mt-6 w-full rounded-lg px-6 py-3 text-white font-semibold transition-all",
        "bg-blue-600 hover:bg-blue-700",
        "focus:outline-none focus:ring-2 focus:ring-blue-400",
        isDisabled &&
          "bg-gray-400 cursor-not-allowed hover:bg-gray-400",
        className
      )}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          {/* <Spinner /> */}
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
