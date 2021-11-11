import React, { Component } from "react";
import PLP from "./components/PLP/PLP";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PDP from "./components/PDP/PDP";
import Cart from "./components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <main className={styles.main}>
          <Switch>
            <Route path="/products/:category" exact component={PLP} />
            <Route path="/products/:category/:id" exact component={PDP} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
