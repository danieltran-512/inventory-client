"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  href: string;
}

function NavButton(props: Props) {
  const { label, href, ...restProps } = props;

  const pathname = usePathname();

  let texAndBgColor = "text-navy";
  if (href === pathname) {
    texAndBgColor = "bg-navy text-white";
  } else {
    texAndBgColor += " hover:bg-navy/50 hover:text-white hover:scale-95";
  }

  return (
    <Link href={href}>
      <button
        className={`transition ease-in-out rounded-full px-6 py-2 ${texAndBgColor}`}
        {...restProps}
      >
        {label}
      </button>
    </Link>
  );
}

export default React.forwardRef(NavButton);
