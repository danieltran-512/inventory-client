"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "Add" | "Remove";
}

function IconButton(props: Props) {
  const { variant, ...restProps } = props;

  let label = "+";
  if (variant === "Remove") {
    label = "-";
  }

  return (
    <button
      className="w-1/4 rounded bg-orange text-white hover:scale-95 disabled:bg-navy/10 transition ease-in-out"
      {...restProps}
    >
      {label}
    </button>
  );
}

export default IconButton;
