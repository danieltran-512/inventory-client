"use client";

import useAddNewPart from "@/utils/hooks/useAddNewPart";
import { PartModel } from "@/utils/models/PartModel";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Buttons/Button";
import Modal from "./Modal";

interface Props {
  isOpen?: boolean;
  handleOpen: () => void;
  lastId: number;
}

export default function AddPartModal(props: Props) {
  const { isOpen, handleOpen, lastId } = props;

  const { data, loading, error, addNewPart } = useAddNewPart();

  const ref = React.useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formEntries = Object.fromEntries(formData);
    const { description, price, quantity } = formEntries;

    const item: PartModel = {
      id: lastId + 1,
      description: description.toString(),
      price: Number(price),
      quantity: Number(quantity),
    };

    await addNewPart(item);
  };

  React.useEffect(() => {
    if (!isOpen) {
      ref.current?.reset();
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (!loading && data) {
      handleOpen();
      router.refresh();
    }
  }, [loading, data]);

  return (
    <Modal isOpen={isOpen}>
      <h2 className="text-3xl">Add a new part</h2>

      <form ref={ref} className="space-y-4 py-8" onSubmit={handleSubmit}>
        <label className="block">
          <span className="block">Description</span>
          <input
            className="border-2 p-2 rounded border-navy w-full"
            placeholder="Description"
            name="description"
            required
          />
        </label>

        <div className="columns-2">
          <label className="block">
            <span className="block">Quantity</span>
            <input
              className="border-2 p-2 rounded border-navy w-full"
              placeholder="1"
              name="quantity"
              type="number"
              required
            />
          </label>

          <label className="block">
            <span className="block">Price</span>
            <input
              className="border-2 p-2 rounded border-navy w-full"
              placeholder="10.99"
              name="price"
              type="number"
              step="0.01"
              required
            />
          </label>
        </div>

        <p className="py-2">{error}</p>

        <div className="flex flex-row gap-4">
          <Button label="Add" type="submit" disabled={loading} />
          <Button
            label="Cancel"
            variant="navy"
            onClick={handleOpen}
            disabled={loading}
          />
        </div>
      </form>
    </Modal>
  );
}
