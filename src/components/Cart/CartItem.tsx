import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { AttributeSet, Price } from "../../grapgQL/ProductResponseType";
import { AppStore } from "../../redux/store/store";
import { SquareBtn } from "../../UI-kit/SquareBtn";
import styles from "./CartItem.module.scss";
import { IoTrashBinOutline } from "react-icons/io5";
import { removeProductFromCartAC } from "../../redux/actions/shopActions";
import { StringLiteral } from "typescript";

class CartItem extends Component<CartItemProps> {
  constructor(props: CartItemProps) {
    super(props);

    this.removeProduct = this.removeProduct.bind(this);
  }
  removeProduct() {
    this.props.removeProductFromCartAC(this.props.id);
  }
  render() {
    const { prices, brand, name, attributes, gallery, qty, id } = this.props;
    return (
      <>
        <div id={id} className={styles.wrapper}>
          <div className={styles.productInfo}>
            <h2 className={styles.brand}>{brand}</h2>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.price}>
              {prices
                .filter((p) => p.currency === this.props.currentCurrency)
                .map((c) => {
                  return (
                    <div key={v4()}>
                      {c.currency}
                      {c.amount}
                    </div>
                  );
                })}
            </div>

            <div className={styles.btnsWrapper}>
              {attributes.map((a) => {
                return a.items.map((i) => {
                  return (
                    <SquareBtn className={styles.btn}>
                      {i.displayValue}
                    </SquareBtn>
                  );
                });
              })}
            </div>
          </div>
          <div className={styles.productCount}>
            <div className={styles.count}>
              <SquareBtn>+</SquareBtn>
              <div className={styles.totalItems}>{qty}</div>
              <SquareBtn>-</SquareBtn>
              {/* <SquareBtn onClick={this.props.incrValue}>+</SquareBtn>
              <div className={styles.totalItems}>0</div>
              <SquareBtn onClick={this.props.decrValue}>-</SquareBtn> */}
            </div>
            <img className={styles.img} src={gallery[0]} alt={name} />
            <div onClick={this.removeProduct}>
              <IoTrashBinOutline
                style={{
                  color: "black",
                  fontSize: "1.4rem",
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
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    currentCurrency: state.products.currentCurrency,
  };
};
export default connect(mapStateToProps, { removeProductFromCartAC })(CartItem);

// Types
type CartItemProps = {
  prices: Price[];
  brand: string;
  name: string;
  attributes: AttributeSet[];
  gallery: string[];
  qty: number;
  id: string;
  // removeProduct: (productId: string) => void;
  // incrValue: () => void;
  // decrValue: () => void;
} & MapStateToPropsType &
  MapDispatchType;
type MapStateToPropsType = {
  currentCurrency: string;
};
type MapDispatchType = {
  removeProductFromCartAC: (productId: string) => void;
};
