import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContentContainer(props: Props) {
  const { children } = props;

  return (
    <main className="flex flex-col w-screen items-center px-4 gap-10">
      <div className="md:w-1/2 xs:w-screen bg-grey h-fit py-6 px-4 rounded border-2 border-navy">
        {children}
      </div>
    </main>
  );
}
