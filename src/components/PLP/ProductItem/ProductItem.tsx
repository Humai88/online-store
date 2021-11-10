import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Price } from "../../../redux/reducers/shoppingReducer";
import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component<ProductItemPropsType> {
  render() {
    const { title, prices, imgSrc, link, inStock, currentCurrency } =
      this.props;
    return (
      <NavLink to={link} className={styles.wrapper}>
        <div
          style={{ opacity: inStock ? "1" : "0.6" }}
          className={styles.content}
        >
          <img className={styles.img} src={imgSrc} alt={title} />
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>
            {prices
              .filter((p) => p.currency === this.props.currentCurrency)
              .map((c) => {
                return (
                  <div>
                    {c.currency}
                    {c.amount}
                  </div>
                );
              })}
          </div>
        </div>
      </NavLink>
    );
  }
}

// Types
type ProductItemPropsType = {
  title: string;
  imgSrc: string;
  link: string;
  inStock?: boolean;
  prices: Price[];
  currentCurrency: string;
};
