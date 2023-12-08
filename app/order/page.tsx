"use client";

import Button from "@/components/Buttons/Button";
import ContentContainer from "@/components/ContentContainer";
import Part from "@/components/Part";
import useCart from "@/utils/hooks/useCart";
import { PartModel } from "@/utils/models/PartModel";
import { ORDER_CONFIRMATION_PAGE } from "@/utils/routes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { cart, emptyCart } = useCart();

  const partItems: PartModel[] = cart.map(
    ({ id, description, quantity, price }) => ({
      id,
      description,
      quantity,
      price,
    })
  );

  const router = useRouter();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = () => {
    const href = `${ORDER_CONFIRMATION_PAGE}?${createQueryString(
      "partItems",
      JSON.stringify(partItems)
    )}`;

    router.push(href);

    setTimeout(() => {
      emptyCart();
    }, 2000);
  };

  return (
    <ContentContainer>
      <h1 className="pb-6 text-3xl">Your current order</h1>
      {cart?.map((item) => (
        <Part key={`part_${item.id}`} part={item} showRemove isCart />
      ))}

      {cart.length > 0 ? (
        <Button label="Place Order" onClick={handleSubmit} />
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </ContentContainer>
  );
}
