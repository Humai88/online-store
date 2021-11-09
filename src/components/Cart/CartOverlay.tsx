import React, { Component } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { Button } from "../../UI-kit/Button";
import { Modal } from "../../UI-kit/Modal";
import styles from "./CartOverlay.module.scss";

class CartOverlay extends Component<CartOverlayPropsType & PathPropsType> {
  render() {
    const category = this.props.match.params.category;
    const initialState = [{}];
    const { toggleShowCart } = this.props;
    return (
      <Modal onClose={toggleShowCart}>
        <div className={styles.cartWrapper}>
          <div className={styles.cartItems}>
            My bag, {initialState.length} items
          </div>
          <div className={styles.total}>Total</div>
          <div className={styles.btnsWrapper}>
            <NavLink to={`/${category}/cart`}>
              <Button className={styles.btnWhite}>view bag</Button>
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
type CartOverlayPropsType = {
  toggleShowCart: () => void;
};
type PathPropsType = RouteComponentProps<PathParamsType>;
type PathParamsType = {
  category: string;
};
