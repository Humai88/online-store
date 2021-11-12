import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { v4 } from "uuid";
import {
  setTotalItemsCountAC,
  setTotalPriceAC,
} from "../../redux/actions/shopActions";
import { CartItemType } from "../../redux/reducers/shopReducer";
import { AppStore } from "../../redux/store/store";
import { Button } from "../../UI-kit/Button";
import { Modal } from "../../UI-kit/Modal";
import CartItem from "./CartItem";
import styles from "./CartOverlay.module.scss";
class CartOverlay extends Component<PropsType> {
  componentDidMount() {
    const productsInCart = this.props.cart;
    const currentCurrency = this.props.currentCurrency;
    this.props.setTotalItemsCountAC(productsInCart);
    this.props.setTotalPriceAC(productsInCart, currentCurrency);
  }
  componentDidUpdate(prevProps: PropsType) {
    const productsInCart = this.props.cart;
    const currentCurrency = this.props.currentCurrency;
    if (productsInCart !== prevProps.cart) {
      this.props.setTotalItemsCountAC(productsInCart);
    }
    if (
      productsInCart !== prevProps.cart ||
      currentCurrency !== prevProps.currentCurrency
    ) {
      this.props.setTotalPriceAC(productsInCart, currentCurrency);
    }
  }

  render() {
    const { toggleShowCart, totalCount, currentCurrency, totalPrice } =
      this.props;

    return (
      <Modal onClose={toggleShowCart}>
        <div className={styles.cartWrapper}>
          <div className={styles.cartItems}>My bag, {totalCount}</div>
          {this.props.cart.map((p) => {
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
          <div className={styles.totalPrice}>
            <div className={styles.total}>Total</div>
            <div className={styles.total}>
              {currentCurrency}
              {totalPrice.toFixed(2)}
            </div>
          </div>
          <div className={styles.btnsWrapper}>
            <NavLink to="/cart">
              <Button onClick={toggleShowCart} className={styles.btnWhite}>
                view bag
              </Button>
            </NavLink>
            <Button className={styles.btn}>check out</Button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    cart: state.products.cart,
    totalCount: state.products.totalCount,
    currentCurrency: state.products.currentCurrency,
    totalPrice: state.products.totalPrice,
  };
};
export default withRouter(
  connect(mapStateToProps, { setTotalItemsCountAC, setTotalPriceAC })(
    CartOverlay
  )
);

//Types
interface CartOverlayPropsType extends RouteComponentProps {
  toggleShowCart: () => void;
}
type MapDispatchType = {
  setTotalItemsCountAC: (productsInCart: CartItemType[]) => void;
  setTotalPriceAC: (
    productsInCart: CartItemType[],
    currentCurrency: string
  ) => void;
};
type MapStateToPropsType = {
  cart: CartItemType[];
  totalCount: number;
  currentCurrency: string;
  totalPrice: number;
};

type PropsType = MapDispatchType & CartOverlayPropsType & MapStateToPropsType;
