"use client";

import { HOME_PAGE, ORDER_PAGE } from "@/utils/routes";
import NavButton from "./Buttons/NavButton";

export default function NavBar() {
  return (
    <div className="w-screen flex flex-row justify-center align-center py-6">
      <div className="bg-grey rounded-full border-2 border-navy">
        <NavButton label="Home" href={HOME_PAGE} />
        <NavButton label="My Order" href={ORDER_PAGE} />
      </div>
    </div>
  );
}
