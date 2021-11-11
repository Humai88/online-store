import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { BsCart2 } from "react-icons/bs";
import logo from "./../../assests/2021-11-06 21_23_46-Junior Frontend Test Designs (Public) – Figma.jpg";
import Categories from "./Categories";
import CartOverlay from "../Cart/CartOverlay";
import Currencies from "./Currencies";
import { connect } from "react-redux";
import { AppStore } from "../../redux/store/store";
import { CartItemType } from "../../redux/reducers/shopReducer";

class Navbar extends Component<NavbarPropsType, NavbarStateType> {
  constructor(props: NavbarPropsType) {
    super(props);
    this.state = { showCart: false, cartCount: 0 };
    this.toggleShowCart = this.toggleShowCart.bind(this);
  }
  componentDidUpdate(prevProps: NavbarPropsType, prevState: NavbarStateType) {
    let count = 0;
    this.props.cart.forEach((p) => (count += p.qty));
    if (
      this.state.cartCount !== prevState.cartCount ||
      this.props.cart !== prevProps.cart
    ) {
      this.setState({
        cartCount: count,
      });
    }
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
              <div className={styles.itemsCount}>{this.state.cartCount}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    cart: state.products.cart,
  };
};
export default connect(mapStateToProps, {})(Navbar);
// Types
type NavbarPropsType = MapStateToPropsType;
type NavbarStateType = {
  showCart: boolean;
  cartCount: number;
};
type MapStateToPropsType = {
  cart: CartItemType[];
};
