import React, { Component } from "react";
import { connect } from "react-redux";
import { AttributeSet, Price } from "../../grapgQL/ProductResponseType";
import { AppStore } from "../../redux/store/store";
import { SquareBtn } from "../../UI-kit/SquareBtn";
import styles from "./CartOverlayItem.module.scss";
import {
  adjustQuantityAC,
  removeProductFromCartAC,
} from "../../redux/actions/shopActions";
import { currencyConverter } from "../../helpers/functions";

class CartOverlayItem extends Component<CartItemProps> {
  constructor(props: CartItemProps) {
    super(props);
    this.decrValue = this.decrValue.bind(this);
    this.incrValue = this.incrValue.bind(this);
  }

  componentDidUpdate(prevProps: CartItemProps) {
    const { id, qty } = this.props;
    if (qty === 0 && qty !== prevProps.qty) {
      this.props.removeProductFromCartAC(id);
    }
  }

  decrValue() {
    const { id, qty } = this.props;
    this.props.adjustQuantityAC(id, qty - 1);
  }
  incrValue() {
    const { id, qty } = this.props;
    this.props.adjustQuantityAC(id, qty + 1);
  }
  render() {
    const {
      prices,
      brand,
      name,
      attributes,
      gallery,
      qty,
      id,
      currentCurrency,
    } = this.props;

    return (
      <>
        <div id={id} className={styles.wrapper}>
          <div className={styles.productInfo}>
            <h2 className={styles.brand}>{brand}</h2>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.price}>
              {prices
                .filter((p) => p.currency === currentCurrency)
                .map((c) => {
                  return (
                    <div key={id}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyConverter(c.currency),
                        }}
                      ></span>
                      {c.amount}
                    </div>
                  );
                })}
            </div>
            {/* {attributes.map((a) => {
              return (
                <div className={styles.btnsWrapper} key={a.name}>
                  <div className={styles.attrName}>{a.name}</div>
                  <div className={styles.attrValuesWrapper}>
                    {a.selectedItems.map((item) => {
                      return a.type === "text" ? (
                        <SquareBtn key={item} className={styles.attrValue}>
                          {item}
                        </SquareBtn>
                      ) : (
                        <SquareBtn
                          key={item}
                          style={{
                            background: item,
                            border: "none",
                          }}
                          className={styles.attrValue}
                        ></SquareBtn>
                      );
                    })}
                  </div>
                </div>
              );
            })} */}

            {attributes.map((a) => {
              return (
                <div className={styles.btnsWrapper} key={a.name}>
                  <div className={styles.attrName}>{a.name}</div>
                  <div className={styles.attrValuesWrapper}>
                    {a.items.map((item) => {
                      return a.type === "text" ? (
                        <SquareBtn
                          key={item.displayValue}
                          className={styles.attrValue}
                        >
                          {item.value}
                        </SquareBtn>
                      ) : (
                        <SquareBtn
                          key={item.displayValue}
                          style={{
                            background: item.value,
                            border: "none",
                          }}
                          className={styles.attrValue}
                        ></SquareBtn>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.productCount}>
            <div className={styles.count}>
              <SquareBtn
                className={styles.adjustCountBtn}
                onClick={this.incrValue}
              >
                +
              </SquareBtn>
              <div className={styles.totalItems}>{qty}</div>
              <SquareBtn
                className={styles.adjustCountBtn}
                onClick={this.decrValue}
              >
                -
              </SquareBtn>
            </div>
            <img className={styles.img} src={gallery[0]} alt={name} />
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
export default connect(mapStateToProps, {
  removeProductFromCartAC,
  adjustQuantityAC,
})(CartOverlayItem);

// Types
type CartItemProps = {
  prices: Price[];
  brand: string;
  name: string;
  attributes: AttributeSet[];
  gallery: string[];
  qty: number;
  id: string;
} & MapStateToPropsType &
  MapDispatchType;
type MapStateToPropsType = {
  currentCurrency: string;
};
type MapDispatchType = {
  removeProductFromCartAC: (productId: string) => void;
  adjustQuantityAC: (productId: string, value: number) => void;
};
