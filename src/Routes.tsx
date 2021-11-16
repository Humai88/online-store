import React, { Component } from "react";
import PLP from "./components/PLP/PLP";
import { Redirect, Route } from "react-router-dom";
import PDP from "./components/PDP/PDP";
import Cart from "./components/Cart/Cart";

export class Routes extends Component {
  render() {
    return (
      <>
        <Route
          exact
          path={"/"}
          render={() => <Redirect to="/products/clothes" />}
        />
        <Route path="/products/:category" exact component={PLP} />
        <Route path="/products/:category/:id" exact component={PDP} />
        <Route path="/cart" exact component={Cart} />
      </>
    );
  }
}
