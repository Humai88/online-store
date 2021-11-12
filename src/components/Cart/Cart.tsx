import React, { Component } from "react";
import { v4 } from "uuid";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import { AppStore } from "../../redux/store/store";
import { CartItemType } from "../../redux/reducers/shopReducer";
import { removeProductFromCartAC } from "../../redux/actions/shopActions";
import { connect } from "react-redux";
class Cart extends Component<CartPPropsType> {
  render() {
    const { cart } = this.props;
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Cart</h2>
        {cart.map((p) => {
          return (
            <CartItem
              id={p.id}
              qty={p.qty}
              key={v4()}
              brand={p.brand}
              name={p.name}
              prices={p.prices}
              attributes={p.attributes}
              gallery={p.gallery}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    cart: state.products.cart,
  };
};
export default connect(mapStateToProps, { removeProductFromCartAC })(Cart);
//Types
type CartPPropsType = MapStateToPropsType & MapDispatchType;

type MapDispatchType = {
  removeProductFromCartAC: (productId: string) => void;
};
type MapStateToPropsType = {
  cart: CartItemType[];
};
