"use client";

import React from "react";
import { PropsWithChildren } from "react";
import { PartModel } from "../models/PartModel";

export interface CartItemModel extends PartModel {
  maxItem: number;
}

interface CartModel {
  cart: CartItemModel[];
  updateCart: (v: CartItemModel, type: "add" | "remove") => void;
  emptyCart: () => void;
}

const CartContext = React.createContext({} as CartModel);

export function CartProvider(props: PropsWithChildren<{}>) {
  const { children } = props;

  const [cart, setCart] = React.useState<CartItemModel[]>([]);

  const updateCart = (item: CartItemModel, type: "add" | "remove") => {
    const findItem = cart.find((cartItem) => cartItem.id === item.id);

    if (findItem) {
      let newArr = [...cart];
      const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);

      const newItem = findItem;

      if (type === "add") {
        newItem.quantity += 1;
      } else {
        newItem.quantity -= 1;
      }

      if (newItem.quantity > 0) {
        newArr[indexItem] = newItem;
        setCart(newArr);
      } else {
        setCart(cart.filter((i_, index) => index !== indexItem));
      }
    } else {
      const newItem = item;
      newItem.quantity = 1;

      setCart((oldArr) => [...oldArr, newItem]);
    }
  };

  const emptyCart = () => setCart([]);

  const value = { cart, updateCart, emptyCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

const useCart = () => React.useContext(CartContext);

export default useCart;
