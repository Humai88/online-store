import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { BsCart2 } from "react-icons/bs";
import logo from "./../../assests/2021-11-06 21_23_46-Junior Frontend Test Designs (Public) – Figma.jpg";
import Categories from "./Categories";
import CartOverlay from "../Cart/CartOverlay";
import Currencies from "./Currencies";

export class Navbar extends Component<NavbarPropsType, NavbarStateType> {
  constructor(props: NavbarPropsType) {
    super(props);
    this.state = { showCart: false };
    this.toggleShowCart = this.toggleShowCart.bind(this);
  }
  toggleShowCart() {
    this.setState((prevState) => ({
      showCart: !prevState.showCart,
    }));
  }
  render() {
    return (
      <>
        {this.state.showCart && (
          <CartOverlay toggleShowCart={this.toggleShowCart} />
        )}
        <div className={styles.wrapper}>
          <ul>
            <Categories />
          </ul>
          <img src={logo} className={styles.logo}></img>
          <div className={styles.cartSection}>
            <Currencies />
            <div>
              <BsCart2
                onClick={this.toggleShowCart}
                style={{
                  fontSize: "1.4rem",
                  marginLeft: "0.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Types
type NavbarPropsType = {};
type NavbarStateType = {
  showCart: boolean;
};
