import React, { Component } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { v4 } from "uuid";
import { Button } from "../../UI-kit/Button";
import { Modal } from "../../UI-kit/Modal";
import { CartItem } from "./CartItem";
import styles from "./CartOverlay.module.scss";
import { fakeData } from "./fakeData";

class CartOverlay extends Component<CartOverlayPropsType> {
  render() {
    const initialState = [{}];
    const { toggleShowCart } = this.props;
    return (
      <Modal onClose={toggleShowCart}>
        <div className={styles.cartWrapper}>
          <div className={styles.cartItems}>
            My bag, {initialState.length} items
          </div>
          {fakeData.map((p) => {
            return (
              <CartItem
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

export default withRouter(CartOverlay);

//Types
interface CartOverlayPropsType extends RouteComponentProps {
  toggleShowCart: () => void;
}
