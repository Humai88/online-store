import React, { Component } from "react";
import PLP from "./components/PLP/PLP";
import { Route } from "react-router-dom";
import PDP from "./components/PDP/PDP";
import Cart from "./components/Cart/Cart";

export class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/products/:category" exact component={PLP} />
        <Route path="/products/:category/:id" exact component={PDP} />
        <Route path="/cart" exact component={Cart} />
      </>
    );
  }
}
