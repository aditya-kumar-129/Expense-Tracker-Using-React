import React from "react";

// Implementing useContext
const CartContext = React.createContext({
  // storing the default values here
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
