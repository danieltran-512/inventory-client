"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "orange" | "navy";
  loading?: boolean;
}

export default function Button(props: Props) {
  const { label, variant = "orange", loading, ...restProps } = props;

  let bgColor = "bg-orange";
  if (variant === "navy") {
    bgColor = "bg-navy";
  }

  return (
    <div className="w-full">
      <button
        className={`w-full py-4 ${bgColor} text-white rounded hover:scale-95 transition ease-in-out disabled:opacity-50`}
        disabled={loading}
        {...restProps}
      >
        {label.toUpperCase()}
      </button>
    </div>
  );
}
