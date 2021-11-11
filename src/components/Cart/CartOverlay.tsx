import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { v4 } from "uuid";
import { removeProductFromCartAC } from "../../redux/actions/shopActions";
import { CartItemType } from "../../redux/reducers/shopReducer";
import { AppStore } from "../../redux/store/store";
import { Button } from "../../UI-kit/Button";
import { Modal } from "../../UI-kit/Modal";
import CartItem from "./CartItem";
import styles from "./CartOverlay.module.scss";
class CartOverlay extends Component<
  CartOverlayPropsType & MapStateToPropsType
> {
  render() {
    const initialState = [{}];
    const { toggleShowCart } = this.props;
    return (
      <Modal onClose={toggleShowCart}>
        <div className={styles.cartWrapper}>
          <div className={styles.cartItems}>
            My bag, {initialState.length} items
          </div>
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
          <div className={styles.total}>Total</div>
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
  };
};
export default withRouter(
  connect(mapStateToProps, { removeProductFromCartAC })(CartOverlay)
);

type MapDispatchType = {
  removeProductFromCartAC: (productId: string) => void;
};
//Types
interface CartOverlayPropsType extends RouteComponentProps {
  toggleShowCart: () => void;
}
type MapStateToPropsType = {
  cart: CartItemType[];
};
