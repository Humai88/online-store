import React, { Component } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import { AppStore } from "../../redux/store/store";
import { CartItemType } from "../../redux/reducers/shopReducer";
import {
  removeProductFromCartAC,
  setTotalPriceAC,
} from "../../redux/actions/shopActions";
import { connect } from "react-redux";
import { currencyConverter } from "../../helpers/functions";
class Cart extends Component<CartPPropsType> {
  componentDidUpdate(prevProps: CartPPropsType) {
    const { cart, currentCurrency } = this.props;
    if (
      cart !== prevProps.cart ||
      currentCurrency !== prevProps.currentCurrency
    ) {
      this.props.setTotalPriceAC(cart, currentCurrency);
    }
  }
  render() {
    const { cart, totalPrice, currentCurrency } = this.props;
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Cart</h2>
        {cart.map((p) => {
          return (
            <CartItem
              id={p.id}
              qty={p.qty}
              key={p.id}
              brand={p.brand}
              name={p.name}
              prices={p.prices}
              attributes={p.attributes}
              gallery={p.gallery}
            />
          );
        })}
        <div className={styles.totalPrice}>
          <div className={styles.total}>Total</div>
          <div className={styles.total}>
            <span
              dangerouslySetInnerHTML={{
                __html: currencyConverter(currentCurrency),
              }}
            ></span>
            {totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    cart: state.products.cart,
    currentCurrency: state.products.currentCurrency,
    totalPrice: state.products.totalPrice,
  };
};
export default connect(mapStateToProps, {
  removeProductFromCartAC,
  setTotalPriceAC,
})(Cart);
//Types
type CartPPropsType = MapStateToPropsType & MapDispatchType;

type MapDispatchType = {
  removeProductFromCartAC: (productId: string) => void;
  setTotalPriceAC: (
    productsInCart: CartItemType[],
    currentCurrency: string
  ) => void;
};
type MapStateToPropsType = {
  cart: CartItemType[];
  currentCurrency: string;
  totalPrice: number;
};
