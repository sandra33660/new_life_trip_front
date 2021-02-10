import React from "react";
import Screen from "../Screen/index";
import Cart from "../Cart/index";

import { useList } from "react-use";

export default function CartScreen() {
  const [cart] = useList([]);
  return (
    <Screen>
      <Cart cart={cart} />
    </Screen>
  );
}
