"use client";

import React from "react";
import Button from "../Buttons/Button";
import AddPartModal from "../Modals/AddPartModal";

interface Props {
  lastId: number;
}

export default function AddNewPartSection(props: Props) {
  const { lastId } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button label="Add new part" onClick={handleOpen} />

      <AddPartModal isOpen={isOpen} handleOpen={handleOpen} lastId={lastId} />
    </>
  );
}
