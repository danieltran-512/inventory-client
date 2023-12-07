interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}

export default function Modal(props: Props) {
  const { children, isOpen } = props;

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center`}
    >
      <div className="bg-white rounded pt-10 px-8 z-10 mx-4 md:w-1/2">
        {children}
      </div>
      <div className="absolute z-0 w-screen h-screen bg-navy/40 " />
    </div>
  );
}
