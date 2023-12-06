"use client";

import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="w-screen flex flex-row justify-center align-center py-6">
      <div className="bg-grey rounded-full border-2 border-navy">
        <NavButton label="Home" href="/" />
        <NavButton label="My Order" href="/order" />
      </div>
    </div>
  );
}
