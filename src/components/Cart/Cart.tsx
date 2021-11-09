import React, { Component } from "react";
import { CartItem } from "./CartItem";

export class Cart extends Component {
  render() {
    return (
      <div>
        <h2>Cart</h2>
        <CartItem />
      </div>
    );
  }
}
