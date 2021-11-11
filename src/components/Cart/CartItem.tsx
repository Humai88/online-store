import React, { Component, DetailedHTMLProps, HTMLAttributes } from "react";
import { AttributeSet, Price } from "../../redux/reducers/shoppingReducer";
import { SquareBtn } from "../../UI-kit/SquareBtn";
import styles from "./CartItem.module.scss";

export class CartItem extends Component<CartItemProps & DefaultDivPropsType> {
  render() {
    const { prices, brand, name, attributes, gallery, qty } = this.props;
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.productInfo}>
            <h2 className={styles.brand}>{brand}</h2>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.price}>
              {prices[0].currency}
              {prices[0].amount}
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
          </div>
        </div>
      </>
    );
  }
}

// Types
interface CartItemProps {
  prices: Price[];
  brand: string;
  name: string;
  attributes: AttributeSet[];
  gallery: string[];
  qty: number;
  // incrValue: () => void;
  // decrValue: () => void;
}
type DefaultDivPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLInputElement
>;
