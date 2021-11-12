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
import { setTotalItemsCountAC } from "../../redux/actions/shopActions";

class Navbar extends Component<NavbarPropsType, NavbarStateType> {
  constructor(props: NavbarPropsType) {
    super(props);
    this.state = { showCart: false };
    this.toggleShowCart = this.toggleShowCart.bind(this);
  }
  componentDidMount() {
    const productsInCart = this.props.cart;
    this.props.setTotalItemsCountAC(productsInCart);
  }
  componentDidUpdate(prevProps: NavbarPropsType) {
    const productsInCart = this.props.cart;
    if (productsInCart !== prevProps.cart) {
      this.props.setTotalItemsCountAC(productsInCart);
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
                className={styles.cartIcon}
                onClick={this.toggleShowCart}
                style={
                  this.props.totalCount > 0
                    ? {
                        color: "#2f7c43",
                      }
                    : { color: "black" }
                }
              />
              <div
                style={
                  this.props.totalCount > 0
                    ? {
                        background: "#2f7c43",
                      }
                    : { background: "black" }
                }
                className={styles.itemsCount}
              >
                {this.props.totalCount}
              </div>
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
    totalCount: state.products.totalCount,
  };
};
export default connect(mapStateToProps, { setTotalItemsCountAC })(Navbar);
// Types
type NavbarPropsType = MapStateToPropsType & MapDispatchType;
type NavbarStateType = {
  showCart: boolean;
};
type MapStateToPropsType = {
  cart: CartItemType[];
  totalCount: number;
};
type MapDispatchType = {
  setTotalItemsCountAC: (productsInCart: CartItemType[]) => void;
};
