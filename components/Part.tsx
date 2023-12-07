"use client";

import formatCurrency from "@/utils/formatCurrency";
import useCart, { CartItemModel } from "@/utils/hooks/useCart";
import { PartModel } from "@/utils/models/PartModel";
import React from "react";
import IconButton from "./Buttons/IconButton";

interface Props {
  part: PartModel;
  showRemove?: boolean;
  isCart?: boolean;
}

export default function Part(props: Props) {
  const { part, showRemove, isCart } = props;
  const { id, description, quantity, price } = part;

  // Set current quantity based on cart status
  const [currentQuantity, setCurrentQuantity] = React.useState(0);

  // Set max limit of selection
  const [maxLimit, setMaxLimit] = React.useState<number | undefined>();

  const { cart, updateCart } = useCart();

  React.useEffect(() => {
    const foundItem = cart.find((item) => item.id === id);

    if (foundItem) {
      // Update current available quantity & initialise max limit of item if existed in cart
      setCurrentQuantity(
        isCart ? foundItem.quantity : quantity - foundItem.quantity
      );
      setMaxLimit(foundItem.maxItem);
    } else {
      setCurrentQuantity(quantity);
    }
  }, [cart]);

  const handleClick = (type: "add" | "remove") => {
    const cartItem: CartItemModel = {
      ...part,
      maxItem: isCart ? maxLimit || 0 : quantity,
    };
    updateCart(cartItem, type);

    if (isCart) {
      setCurrentQuantity(currentQuantity + 1 * (type === "add" ? 1 : -1));
    } else {
      setCurrentQuantity(currentQuantity + 1 * (type === "add" ? -1 : 1));
    }
  };

  const disableRemove = currentQuantity < 1;
  const disableAdd =
    isCart && maxLimit ? currentQuantity >= maxLimit : currentQuantity <= 0;

  return (
    <div
      className={`${
        currentQuantity > 0 ? "opacity-100" : "opacity-50"
      } my-2 flex flex-row gap-2`}
    >
      {showRemove && (
        <IconButton
          variant="Remove"
          onClick={() => handleClick("remove")}
          disabled={disableRemove}
        />
      )}

      <div className="w-full md:w-11/12 bg-navy text-white py-2 px-2 md:px-6 rounded md:flex flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl">{description}</h3>
          <p className="text-xs">{`${
            isCart ? "Quantity" : "Available for purchase"
          }: ${currentQuantity}`}</p>
        </div>
        <h2 className="md:text-xl">{`${formatCurrency(price)}/each`}</h2>
      </div>

      <IconButton
        variant="Add"
        onClick={() => handleClick("add")}
        disabled={disableAdd}
      />
    </div>
  );
}
